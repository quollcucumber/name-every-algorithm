# Name Every Algorithm & Data Structure

A JetPunk/Sporcle-style "countries of the world" quiz, but for algorithms and data structures — 500 answers across 15 categories.

- Type names; correct answers fill in automatically. Matching ignores case, punctuation, diacritics, plurals, possessive `'s` and the word "algorithm", and most entries have aliases (`kmp`, `dsu`, `hld`, `segtree`, ...).
- If what you typed is also the start of another answer (`bit` vs `bitset`), it waits a moment — press Enter to submit right away.
- Play everything or a single category (`#/strings`, `#/graph`, ...), with an optional time limit and a "Show clues" mode.
- Progress and best scores are saved in `localStorage`. No backend, no network calls.

## Run locally

Any static file server works:

```sh
python3 -m http.server 8000
```

## Editing the list

Answers live in `data.js`, one per line: `Name | alias; alias | clue`. After editing, run

```sh
node check.js
```

to catch parse errors and answers that would collide after normalisation.

## Deploying

It's a plain static site: GitHub Pages → Settings → Pages → Deploy from branch → `main` / root.
