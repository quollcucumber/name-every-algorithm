// node check.js — sanity-check the dataset for parse errors and ambiguous answers
global.window = {};
require("./data.js");
const { parseData, normalize } = require("./normalize.js");
const items = parseData(window.QUIZ_DATA);
const byKey = new Map();
for (const it of items) for (const k of it.keys) {
  if (!byKey.has(k)) byKey.set(k, []);
  byKey.get(k).push(it.name);
}
let bad = 0;
for (const [k, names] of byKey) if (new Set(names).size > 1) { console.log("SHARED KEY", k, names); bad++; }
const names = new Map();
for (const it of items) { const n = it.name.toLowerCase(); if (names.has(n)) { console.log("DUP NAME", it.name); bad++; } names.set(n, 1); }
for (const it of items) for (const w of it.clue.split(/\s+/)) {}
const tests = [["Dijkstra's", "Dijkstra's algorithm"], ["dijkstra", "Dijkstra's algorithm"], ["bellman ford", "Bellman–Ford algorithm"], ["a*", "A* search"], ["kruskals", "Kruskal's algorithm"], ["B+ tree", "B+ tree"], ["boruvka", "Borůvka's algorithm"], ["union find", "Disjoint set union"], ["2-sat", "2-SAT"], ["segment trees", "Segment tree"], ["patience sort", "Patience sort"], ["freivalds", "Freivalds' algorithm"], ["Tarjan's SCC", "Tarjan's SCC algorithm"], ["sieve of eratosthenes", "Sieve of Eratosthenes"], ["prufer", "Prüfer sequence"], ["0-1 bfs", "0-1 BFS"], ["Welsh-Powell", "Welsh–Powell algorithm"], ["greedy colouring", "Welsh–Powell algorithm"]];
for (const [inp, want] of tests) {
  const got = byKey.get(normalize(inp)) || [];
  if (!got.includes(want)) { console.log("FAIL", inp, "->", normalize(inp), got); bad++; }
}
console.log(items.length, "items in", window.QUIZ_DATA.length, "categories;", bad, "problems");
process.exit(bad ? 1 : 0);
