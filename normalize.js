(function (root) {
  const STOP = new Set(["algorithm", "algorithms", "algo", "the", "of", "technique", "problem"]);
  const WORD_MAP = { sorting: "sort", searching: "search", hashing: "hash" };

  function normalize(s) {
    let t = s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    t = t.replace(/\*/g, "star").replace(/\+/g, "plus").replace(/&/g, " and ");
    t = t.replace(/colour/g, "color").replace(/neighbour/g, "neighbor").replace(/isation/g, "ization").replace(/optimis/g, "optimiz");
    t = t.replace(/['’`]s\b/g, "").replace(/['’`]/g, "");
    const words = t.split(/[^a-z0-9]+/).filter(Boolean);
    return words
      .filter((w) => !STOP.has(w))
      .map((w) => WORD_MAP[w] || w)
      .map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w))
      .join("");
  }

  function parseData(categories) {
    const items = [];
    for (const cat of categories) {
      cat.list = [];
      for (const raw of cat.items.split("\n")) {
        const line = raw.trim();
        if (!line) continue;
        const a = line.indexOf("|");
        const b = line.indexOf("|", a + 1);
        if (a < 0 || b < 0) throw new Error("Bad line: " + line);
        const name = line.slice(0, a).trim();
        const aliases = line.slice(a + 1, b).split(";").map((x) => x.trim()).filter(Boolean);
        const clue = line.slice(b + 1).trim();
        const keys = [...new Set([name, ...aliases].map(normalize).filter(Boolean))];
        const item = { id: cat.id + ":" + normalize(name), name, aliases, clue, keys, cat: cat.id };
        items.push(item);
        cat.list.push(item);
      }
    }
    return items;
  }

  const api = { normalize, parseData };
  if (typeof module !== "undefined") module.exports = api;
  else root.AlgoNorm = api;
})(this);
