(() => {
  const { normalize, parseData } = window.AlgoNorm;
  const CATS = window.QUIZ_DATA;
  const ALL = parseData(CATS);
  const PENDING_MS = 900;
  // Leftover endings people keep typing after an answer was already accepted ("dijkstra" + "'s algorithm").
  const NOISE = ["'s algorithms", "’s algorithms", "s algorithms", " algorithms", "es", "'"];
  const NOISE_WINDOW_MS = 3000;

  const $ = (id) => document.getElementById(id);
  const el = {
    quizzes: $("quizzes"), score: $("score"), total: $("total"), timer: $("timer"), bar: $("bar"),
    guess: $("guess"), start: $("start"), giveup: $("giveup"), reset: $("reset"), limit: $("limit"),
    clues: $("clues"), hint: $("hint"), best: $("best"), flash: $("flash"), result: $("result"), board: $("board"),
  };

  const store = {
    get(k, d) { try { const v = localStorage.getItem("nea:" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("nea:" + k, JSON.stringify(v)); } catch {} },
    del(k) { try { localStorage.removeItem("nea:" + k); } catch {} },
  };

  let quizId, cats, items, keyMap, allKeys, state, cells, catCounts, tick, pending, noise;

  function fmt(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
    const mm = String(m).padStart(2, "0"), ss = String(r).padStart(2, "0");
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  }

  function autoLimitMin(n) { return Math.max(4, Math.ceil((n * 4) / 60)); }

  function limitMs() {
    const v = state.limit;
    if (v === "0") return 0;
    if (v === "auto") return autoLimitMin(items.length) * 60000;
    return Number(v) * 60000;
  }

  function elapsed() { return state.elapsed + (state.runningSince ? Date.now() - state.runningSince : 0); }

  function save() {
    const s = { ...state, elapsed: elapsed(), runningSince: null, guessed: [...state.guessed] };
    store.set("state:" + quizId, s);
  }

  function freshState() {
    return { status: "idle", guessed: new Set(), elapsed: 0, runningSince: null, limit: store.get("limit", "auto"), gaveUp: false };
  }

  function loadQuiz() {
    clearInterval(tick);
    clearPending();
    const hash = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    quizId = CATS.some((c) => c.id === hash) ? hash : "all";
    cats = quizId === "all" ? CATS : CATS.filter((c) => c.id === quizId);
    items = cats.flatMap((c) => c.list);
    keyMap = new Map();
    allKeys = [];
    for (const it of items) for (const k of it.keys) {
      if (!keyMap.has(k)) keyMap.set(k, []);
      keyMap.get(k).push(it);
      allKeys.push([k, it]);
    }
    const saved = store.get("state:" + quizId, null);
    state = freshState();
    if (saved) {
      const ids = new Set(items.map((i) => i.id));
      Object.assign(state, saved, { guessed: new Set((saved.guessed || []).filter((g) => ids.has(g))), runningSince: null });
    }
    // A quiz left running when the page closed comes back paused.
    if (state.status === "running") state.status = "paused";
    el.flash.textContent = "";
    el.guess.value = "";
    renderNav();
    renderBoard();
    renderPanel();
    document.title = (quizId === "all" ? "Name Every Algorithm & Data Structure" : `Name every ${cats[0].title.toLowerCase()} algorithm`) ;
  }

  function renderNav() {
    const links = [{ id: "all", title: "Everything", n: ALL.length }, ...CATS.map((c) => ({ id: c.id, title: c.title, n: c.list.length }))];
    el.quizzes.innerHTML = "";
    for (const l of links) {
      const a = document.createElement("a");
      a.href = "#/" + l.id;
      a.className = l.id === quizId ? "active" : "";
      a.innerHTML = `${escapeHtml(l.title)}<span class="n">${l.n}</span>`;
      el.quizzes.appendChild(a);
    }
  }

  function escapeHtml(s) { return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]); }

  function wiki(name) { return "https://en.wikipedia.org/w/index.php?search=" + encodeURIComponent(name); }

  function renderBoard() {
    el.board.innerHTML = "";
    cells = new Map();
    catCounts = new Map();
    for (const c of cats) {
      const sec = document.createElement("section");
      sec.className = "cat";
      const h = document.createElement("h2");
      h.innerHTML = `<span>${escapeHtml(c.title)}</span>`;
      const count = document.createElement("span");
      count.className = "count";
      h.appendChild(count);
      catCounts.set(c.id, count);
      const grid = document.createElement("div");
      grid.className = "grid";
      for (const it of c.list) {
        const cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        cells.set(it.id, cell);
        paintCell(it);
      }
      sec.append(h, grid);
      el.board.appendChild(sec);
    }
    paintCounts();
  }

  function paintCell(it, isNew) {
    const cell = cells.get(it.id);
    const got = state.guessed.has(it.id);
    const revealed = got || state.status === "done";
    const showClue = el.clues.checked;
    cell.className = "cell" + (got ? " got" : revealed ? " missed" : "") + (isNew ? " new" : "");
    let html = "";
    if (revealed) html += `<a class="name" href="${wiki(it.name)}" target="_blank" rel="noopener">${escapeHtml(it.name)}</a>`;
    if (showClue || (revealed && !got)) html += `<span class="clue">${escapeHtml(it.clue)}</span>`;
    cell.innerHTML = html;
    cell.title = revealed ? it.clue : "";
  }

  function paintCounts() {
    for (const c of cats) {
      const got = c.list.filter((i) => state.guessed.has(i.id)).length;
      const span = catCounts.get(c.id);
      span.textContent = `${got} / ${c.list.length}`;
      span.classList.toggle("done", got === c.list.length);
    }
    el.score.textContent = state.guessed.size;
    el.total.textContent = items.length;
    el.bar.style.width = (100 * state.guessed.size) / items.length + "%";
  }

  function renderPanel() {
    const st = state.status;
    el.limit.value = state.limit;
    el.limit.disabled = st !== "idle";
    el.guess.disabled = st !== "running";
    el.start.hidden = st === "running" || st === "done";
    el.start.textContent = st === "paused" ? "Resume" : "Start";
    el.giveup.hidden = st !== "running" && st !== "paused";
    el.reset.hidden = st === "idle";
    el.guess.placeholder = st === "running" ? "Type an algorithm or data structure…" : st === "done" ? "Quiz over — hit Restart to play again" : "Press Start, then type an algorithm or data structure…";
    const best = store.get("best:" + quizId, null);
    el.best.textContent = best ? `Best: ${best.score} / ${items.length}${best.time ? " in " + fmt(best.time) : ""}` : "";
    renderResult();
    updateTimer();
  }

  function renderResult() {
    if (state.status !== "done") { el.result.hidden = true; return; }
    const n = state.guessed.size, total = items.length;
    const pct = Math.round((100 * n) / total);
    const why = n === total ? "You named them all!" : state.gaveUp ? "You gave up." : "Time's up!";
    el.result.hidden = false;
    el.result.innerHTML = `<h2>${n} / ${total} (${pct}%)</h2><p>${why} Time: ${fmt(state.elapsed)}. Missed answers are shown in red — click any name to read about it.</p>`;
  }

  function updateTimer() {
    const lim = limitMs();
    const e = elapsed();
    if (lim) {
      const left = lim - e;
      el.timer.textContent = fmt(left);
      el.timer.classList.toggle("timer-low", state.status === "running" && left < 60000);
      if (state.status === "running" && left <= 0) finish(false);
    } else {
      el.timer.textContent = fmt(e);
      el.timer.classList.remove("timer-low");
    }
  }

  function start() {
    if (state.status === "done") return;
    state.status = "running";
    state.runningSince = Date.now();
    clearInterval(tick);
    tick = setInterval(() => { updateTimer(); }, 250);
    renderPanel();
    save();
    el.guess.focus();
  }

  function finish(gaveUp) {
    clearPending();
    state.elapsed = elapsed();
    state.runningSince = null;
    state.status = "done";
    state.gaveUp = gaveUp;
    clearInterval(tick);
    el.guess.value = "";
    const best = store.get("best:" + quizId, null);
    const n = state.guessed.size;
    if (!best || n > best.score || (n === best.score && state.elapsed < best.time)) {
      store.set("best:" + quizId, { score: n, time: state.elapsed });
    }
    save();
    for (const it of items) paintCell(it);
    renderPanel();
    el.result.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function reset() {
    if (state.status !== "done" && state.guessed.size && !confirm("Restart and lose your progress?")) return;
    clearInterval(tick);
    clearPending();
    const limit = state.limit;
    state = freshState();
    state.limit = limit;
    store.del("state:" + quizId);
    el.guess.value = "";
    el.flash.textContent = "";
    for (const it of items) paintCell(it);
    paintCounts();
    renderPanel();
  }

  function clearPending() {
    if (pending) clearTimeout(pending.timer);
    pending = null;
    if (noise) clearTimeout(noise.timer);
    el.guess.classList.remove("pending");
    el.hint.textContent = "";
  }

  function accept(matches) {
    clearPending();
    for (const it of matches) {
      state.guessed.add(it.id);
      paintCell(it, true);
    }
    el.guess.value = "";
    noise = { at: Date.now(), timer: null };
    const catTitle = (id) => CATS.find((c) => c.id === id).title;
    el.flash.style.color = "";
    el.flash.textContent = "✓ " + matches.map((m) => `${m.name} (${catTitle(m.cat)})`).join(", ");
    paintCounts();
    save();
    if (state.guessed.size === items.length) finish(false);
  }

  function onInput() {
    clearPending();
    const raw = el.guess.value.toLowerCase();
    if (noise && raw && Date.now() - noise.at < NOISE_WINDOW_MS && NOISE.some((n) => n.startsWith(raw))) {
      noise.timer = setTimeout(() => { if (el.guess.value.toLowerCase() === raw) el.guess.value = ""; }, 600);
      return;
    }
    noise = null;
    const k = normalize(el.guess.value);
    if (!k) return;
    const hits = keyMap.get(k) || [];
    const fresh = hits.filter((it) => !state.guessed.has(it.id));
    if (!fresh.length) {
      if (hits.length) {
        el.flash.style.color = "var(--muted)";
        el.flash.textContent = `Already named: ${hits[0].name}`;
        const raw = el.guess.value;
        const stillTyping = allKeys.some(([key, it]) => key.length > k.length && key.startsWith(k) && !state.guessed.has(it.id));
        pending = { matches: [], timer: setTimeout(() => { if (el.guess.value === raw) el.guess.value = ""; clearPending(); }, stillTyping ? 1200 : 700) };
      }
      return;
    }
    // If this is also the start of another unguessed answer (e.g. "bit" vs "bitset"), wait before accepting.
    const longer = allKeys.some(([key, it]) => key.length > k.length && key.startsWith(k) && !state.guessed.has(it.id) && !fresh.includes(it));
    if (!longer) return accept(fresh);
    el.guess.classList.add("pending");
    el.hint.textContent = "Press Enter to submit, or keep typing…";
    pending = { matches: fresh, timer: setTimeout(() => accept(fresh), PENDING_MS) };
  }

  el.guess.addEventListener("input", onInput);
  el.guess.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && pending) { e.preventDefault(); if (pending.matches.length) accept(pending.matches); else { el.guess.value = ""; clearPending(); } }
    else if (e.key === "Enter" && noise) { el.guess.value = ""; }
    if (e.key === "Escape") { el.guess.value = ""; clearPending(); }
  });
  el.start.addEventListener("click", start);
  el.giveup.addEventListener("click", () => { if (confirm("Give up and reveal the answers?")) finish(true); });
  el.reset.addEventListener("click", reset);
  el.limit.addEventListener("change", () => { state.limit = el.limit.value; store.set("limit", state.limit); save(); updateTimer(); });
  el.clues.checked = store.get("clues", false);
  el.clues.addEventListener("change", () => { store.set("clues", el.clues.checked); for (const it of items) paintCell(it); });
  window.addEventListener("hashchange", () => { if (state && state.status === "running") { state.elapsed = elapsed(); state.runningSince = null; state.status = "paused"; save(); } loadQuiz(); window.scrollTo(0, 0); });
  window.addEventListener("beforeunload", () => save());
  document.addEventListener("visibilitychange", () => { if (document.hidden) save(); });

  loadQuiz();
})();
