// Format per line: Name | alias; alias | clue
// Aliases are matched after normalisation (case, punctuation, "algorithm", possessive 's and plurals are ignored).
window.QUIZ_DATA = [
{ id: "sorting", title: "Sorting", items: `
Bubble sort | sinking sort | Repeatedly swap adjacent out-of-order pairs until a pass makes no swaps
Insertion sort | | Grow a sorted prefix, sliding each new element left into place
Selection sort | | Repeatedly find the minimum of the unsorted part and swap it to the front
Merge sort | mergesort | Split in half, sort each half recursively, then combine the two sorted halves
Quicksort | quick sort | Pick a pivot, partition around it, recurse on both sides
Heapsort | heap sort | Build a max-heap, then repeatedly pop the max to the end
Counting sort | | Tally how many times each key appears, then rebuild from prefix sums of the tallies
Radix sort | lsd radix sort; msd radix sort | Sort digit by digit using a stable sort per digit
Bucket sort | bin sort | Scatter values into ranged bins, sort each bin, concatenate
Shell sort | shellsort | Insertion sort on elements a shrinking gap apart
Timsort | tim sort | Python's and Java's hybrid of natural runs, insertion sort and galloping merges
Introsort | introspective sort | Quicksort that falls back to heapsort when recursion gets too deep (std::sort)
Pdqsort | pattern defeating quicksort | Pattern-defeating hybrid quicksort used by Rust and Go
Cocktail shaker sort | cocktail sort; shaker sort; bidirectional bubble sort | Bubble passes that alternate left-to-right and right-to-left
Gnome sort | stupid sort | Step forward when in order, swap and step back when not
Comb sort | | Bubble sort with a gap that shrinks by a factor of about 1.3
Odd-even sort | brick sort; odd even transposition sort | Alternately compare (odd, even) and (even, odd) indexed adjacent pairs
Cycle sort | | Minimises writes by rotating each permutation cycle into place
Pancake sort | pancake sorting | Only allowed operation: reverse a prefix
Bogosort | bogo sort; permutation sort; monkey sort | Shuffle randomly until it happens to be sorted
Stooge sort | | Sort first 2/3, last 2/3, first 2/3 again
Slowsort | slow sort | Deliberately pessimal "multiply and surrender" sort
Bitonic sort | bitonic sorter | Sorting network built from merging sequences that rise then fall
Batcher odd-even mergesort | odd even merge sort; batcher merge sort; odd-even mergesort | Batcher's O(n log² n) sorting network
Smoothsort | smooth sort | Dijkstra's heapsort variant using Leonardo-number heaps, O(n) when nearly sorted
Tree sort | | Insert everything into a BST, then read it back in-order
Patience sort | patience sorting | Deal cards onto piles like the solitaire game, then k-way merge the piles
Pigeonhole sort | | One hole per possible key value, drop each item in its hole
Bead sort | gravity sort | Beads on vertical rods fall under gravity
Sleep sort | | Spawn a thread per number that waits that long before printing it
Strand sort | | Repeatedly pull out an increasing subsequence and merge it into the output
Library sort | gapped insertion sort | Insertion sort that leaves gaps like a library shelf
Flashsort | flash sort | Distribution sort that classifies by estimated final position
Block sort | wikisort; block merge sort | Stable in-place merge sort with O(1) extra memory using blocks
Spreadsort | spread sort | Hybrid of radix and comparison sorting used in Boost
Stalin sort | | Joke O(n) "sort" that deletes any element out of order
`},
{ id: "searching", title: "Searching & selection", items: `
Linear search | sequential search | Check every element one by one
Binary search | binary chop; bisection search; half-interval search; binary search on answer | Halve a sorted search range each step
Ternary search | | Find the extremum of a unimodal function by discarding a third each step
Golden-section search | golden section search; golden ratio search | Unimodal optimisation that reuses one probe per step via φ
Exponential search | galloping search; doubling search | Double an index bound until you overshoot, then binary search
Interpolation search | | Guess the position by assuming values are evenly distributed
Jump search | block search | Jump √n ahead at a time, then scan linearly back
Fibonacci search | | Divide a sorted array using consecutive Fibonacci numbers
Quickselect | hoare selection; hoare's selection | Find the k-th smallest by partitioning and recursing on one side (nth_element)
Median of medians | bfprt; bfprt algorithm | Deterministic linear-time selection using groups of five
Floyd–Rivest algorithm | floyd rivest | Sampling-based selection with very few comparisons
Two pointers | two pointer; two pointers technique | Move a left and right index monotonically through an array
Sliding window | | Maintain an aggregate over a contiguous range as it moves
Meet in the middle | mitm | Split the search space in two halves, enumerate each, and combine
Parallel binary search | | Binary search many queries at once, sweeping updates once per round
Fractional cascading | | Speed up searching the same key in many sorted lists by linking them
Floyd's cycle detection | tortoise and hare; floyd cycle finding; floyds cycle | A slow and a fast pointer that eventually meet in a loop
Brent's cycle detection | brent cycle detection; brent | Cycle finding by teleporting the slow pointer at powers of two
Iterative deepening DFS | iddfs; iterative deepening; iterative deepening depth first search | Repeated depth-limited search with increasing limits
Iterative deepening A* | ida*; ida star | Depth-first with an f-cost threshold that grows each round
Beam search | | Best-first search that keeps only the top k candidates per level
Best-first search | best first search; greedy best first search | Always expand the node a heuristic rates most promising
`},
{ id: "graph", title: "Graph traversal & connectivity", items: `
Breadth-first search | bfs; breadth first search | Explore level by level with a queue
Depth-first search | dfs; depth first search | Go as deep as possible, backtrack with a stack or recursion
Flood fill | seed fill; bucket fill | Paint every cell connected to a start cell (paint bucket tool)
0-1 BFS | 01 bfs; zero one bfs | Shortest paths with edge weights 0 or 1 using a deque
Bidirectional search | bidirectional bfs | Search from start and goal simultaneously until they meet
Topological sort | toposort; topological ordering; topo sort | Order a DAG so every edge points forward
Kahn's algorithm | kahn | Topological order by repeatedly removing in-degree-0 vertices
Tarjan's SCC algorithm | tarjan scc; tarjan; tarjans strongly connected components | Single DFS with lowlink values to find strongly connected components
Kosaraju's algorithm | kosaraju; kosaraju sharir | SCCs via DFS order, then DFS on the transposed graph
Path-based strong component algorithm | gabow; gabow's algorithm; path based scc | Gabow's/Cheriyan–Mehlhorn SCC algorithm using two stacks
Bridge finding | bridges; finding bridges; bridge; cut edges | Edges whose removal disconnects the graph, found via low-link
Articulation points | cut vertices; cut vertex; articulation point | Vertices whose removal disconnects the graph
Biconnected components | bcc; blocks; 2 vertex connected components; biconnected component | Maximal subgraphs with no articulation point
Block-cut tree | block cut tree | Tree joining each biconnected component to the cut vertices it contains
2-SAT | 2sat; two sat; 2 satisfiability | Boolean clauses of two literals solved via SCCs of the implication graph
Hierholzer's algorithm | hierholzer | Linear-time Eulerian circuit by splicing cycles together
Fleury's algorithm | fleury | Eulerian path that never crosses a bridge unless forced
Bipartite check | bipartiteness check; 2 coloring; two coloring; bipartite testing; bipartite | Try to 2-colour the graph with BFS/DFS
Lengauer–Tarjan algorithm | lengauer tarjan; dominator tree | Builds the dominator tree of a flow graph
Bron–Kerbosch algorithm | bron kerbosch | Recursive backtracking enumeration of maximal cliques
Welsh–Powell algorithm | welsh powell; greedy coloring; greedy colouring | Greedily colour vertices in decreasing degree order
DSatur | dsatur | Colour next the vertex with the most distinctly coloured neighbours
Havel–Hakimi algorithm | havel hakimi | Decides whether a degree sequence is graphical
Kirchhoff's theorem | matrix tree theorem; kirchhoff; kirchhoff's matrix tree theorem | Counts spanning trees with a Laplacian determinant
Christofides algorithm | christofides; christofides serdyukov | 1.5-approximation for metric TSP via MST + perfect matching
Held–Karp algorithm | held karp; bitmask tsp; tsp dp | O(2ⁿn²) DP for the travelling salesman problem
Karp's minimum mean cycle | karp minimum mean cycle; minimum mean cycle; karp | Finds the cycle with the smallest average edge weight
Johnson's cycle algorithm | johnson elementary cycles; elementary cycles | Enumerate all simple cycles of a directed graph
Warnsdorff's rule | warnsdorff; knights tour | Knight's tour heuristic: always move to the square with fewest onward moves
Hopcroft–Tarjan planarity test | planarity testing; hopcroft tarjan; planarity test | Linear-time check whether a graph can be drawn without crossings
`},
{ id: "paths", title: "Shortest paths", items: `
Dijkstra's algorithm | dijkstra; djikstra; dijkstras | Greedy shortest paths with a priority queue, non-negative weights
Bellman–Ford algorithm | bellman ford; bellmanford | Relax every edge V−1 times; detects negative cycles
SPFA | shortest path faster algorithm; spfa | Queue-based Bellman–Ford that only relaxes from updated vertices
Floyd–Warshall algorithm | floyd warshall; floyd; warshall; roy warshall | All-pairs shortest paths with a triple loop over intermediate vertices
Johnson's algorithm | johnson; johnsons | All-pairs shortest paths via potentials from Bellman–Ford then V Dijkstras
A* search | a*; a star; astar; a star search | Dijkstra guided by an admissible heuristic
Dial's algorithm | dial | Dijkstra with buckets for small integer weights
Yen's algorithm | yen; yens k shortest paths; k shortest paths | K shortest loopless paths
Eppstein's algorithm | eppstein | K shortest paths (allowing repeats) with a heap of sidetracks
Seidel's algorithm | seidel | All-pairs shortest paths on unweighted graphs via matrix multiplication
Contraction hierarchies | contraction hierarchy | Preprocess road networks by contracting unimportant nodes with shortcuts
D* | d star; d* lite; dstar | Incremental replanning pathfinding used by robots and Mars rovers
Jump point search | jps | Grid A* speed-up that skips symmetric paths
Suurballe's algorithm | suurballe | Two edge-disjoint paths of minimum total length
`},
{ id: "mst", title: "Spanning trees", items: `
Kruskal's algorithm | kruskal | Sort edges, add each one that doesn't create a cycle (with DSU)
Prim's algorithm | prim; jarnik; prim jarnik | Grow one tree, always adding the cheapest edge leaving it
Borůvka's algorithm | boruvka; sollin; sollins algorithm | Every component simultaneously grabs its cheapest outgoing edge
Reverse-delete algorithm | reverse delete | Delete edges from heaviest down unless it disconnects the graph
Chu–Liu/Edmonds algorithm | chu liu edmonds; chu liu; edmonds arborescence; minimum arborescence; directed mst | Minimum spanning arborescence of a directed graph
Manhattan MST | manhattan minimum spanning tree | MST of points under L1 distance using only O(n) candidate edges
Steiner tree | steiner tree dp; minimum steiner tree | Connect a set of terminals cheaply, optionally via extra vertices
`},
{ id: "flows", title: "Flows, cuts & matching", items: `
Ford–Fulkerson algorithm | ford fulkerson | Max flow by repeatedly pushing along any augmenting path
Edmonds–Karp algorithm | edmonds karp | Ford–Fulkerson where augmenting paths are found with BFS
Dinic's algorithm | dinic; dinitz; dinitz algorithm | Max flow with BFS level graphs and blocking flows
Push–relabel algorithm | push relabel; preflow push; goldberg tarjan; hlpp; highest label preflow push | Max flow by pushing excess and raising vertex heights
Capacity scaling | capacity scaling algorithm; scaling max flow | Augment only along paths with capacity at least Δ, halving Δ
Min-cost max-flow | mcmf; min cost flow; minimum cost flow; min cost max flow; successive shortest paths | Cheapest maximum flow via repeated shortest augmenting paths
Network simplex | network simplex algorithm | Simplex method specialised to min-cost flow on spanning trees
Hopcroft–Karp algorithm | hopcroft karp | O(E√V) bipartite matching with phases of shortest augmenting paths
Kuhn's algorithm | kuhn; augmenting path matching | Simple DFS augmenting-path bipartite matching
Hungarian algorithm | kuhn munkres; munkres; hungarian method; assignment problem | O(n³) min-cost perfect bipartite matching using potentials
Blossom algorithm | edmonds blossom; blossom; edmonds matching | Maximum matching in general graphs by contracting odd cycles
Gale–Shapley algorithm | gale shapley; stable marriage; deferred acceptance | Stable matching: proposers propose, receivers tentatively accept
Stoer–Wagner algorithm | stoer wagner | Deterministic global minimum cut of an undirected graph
Karger's algorithm | karger; karger stein; kargers min cut | Randomly contract edges until two vertices remain
Gomory–Hu tree | gomory hu | Tree encoding all pairwise min cuts using n−1 max-flow calls
Hall's theorem | hall marriage theorem; halls marriage theorem; hall | Perfect matching exists iff every subset has enough neighbours
König's theorem | konig; konigs theorem; kőnig | In bipartite graphs, max matching = min vertex cover
`},
{ id: "trees", title: "Tree algorithms", items: `
Binary lifting | jump pointers; binary lifting lca | Store 2^k-th ancestors to jump up a tree in O(log n)
Euler tour technique | euler tour; euler tour lca; dfs order | Flatten a tree into an array of entry/exit times
Heavy-light decomposition | hld; heavy light decomposition; heavy path decomposition | Split a tree into chains so any path crosses O(log n) of them
Centroid decomposition | centroid decomp | Recursively split at the vertex whose removal leaves pieces ≤ n/2
Tarjan's offline LCA | tarjan lca; tarjans off line lowest common ancestor; offline lca | Answer LCA queries in one DFS using union-find
Farach-Colton–Bender | farach colton bender; farach colton and bender | O(n) preprocessing, O(1) LCA via ±1 RMQ blocks
Small-to-large merging | small to large; dsu on tree; sack; smaller to larger | Always merge the smaller set into the larger: O(n log n) total
Rerooting DP | rerooting; reroot dp; all roots dp | Compute a tree DP answer for every possible root
Tree diameter | double bfs; diameter of a tree; two dfs | Farthest node from any node, then farthest from that
Prüfer sequence | prufer sequence; prufer code; prufer | Bijection between labelled trees and sequences of length n−2
AHU algorithm | tree isomorphism; ahu | Aho–Hopcroft–Ullman canonical encoding for tree isomorphism
Virtual tree | auxiliary tree; virtual trees; compressed tree | Tree of k key vertices and their pairwise LCAs
Long-path decomposition | long path decomposition; long chain decomposition | Like HLD but by depth; merges depth-indexed DP in O(n)
Tree hashing | | Hash rooted subtrees to compare their shapes
`},
{ id: "basic-ds", title: "Basic data structures", items: `
Array | static array | Contiguous fixed-size block indexed in O(1)
Dynamic array | vector; arraylist; resizable array; growable array | Array that doubles capacity when full (amortised O(1) push)
Linked list | singly linked list | Nodes each holding a value and a pointer to the next
Doubly linked list | | Nodes with pointers to both previous and next
Circular linked list | | The last node points back to the first
XOR linked list | xor list | Stores prev ⊕ next in a single pointer field
Unrolled linked list | | Linked list where each node stores a small array
Skip list | skiplist | Layers of linked lists with random express lanes, O(log n) expected
Stack | lifo | Last in, first out
Queue | fifo | First in, first out
Deque | double ended queue; dequeue | Push and pop at both ends
Circular buffer | ring buffer; circular queue; cyclic buffer | Fixed array where head and tail wrap around
Priority queue | | Abstract type that always serves the highest-priority element next
Hash table | hash map; hashmap; hashtable; dictionary; unordered map | Key → bucket via a hash function, O(1) expected lookups
Separate chaining | chaining | Collision resolution: each bucket keeps a list
Linear probing | open addressing | Collision resolution: try the next slot, then the next...
Quadratic probing | | Collision resolution: step by 1, 4, 9, 16...
Double hashing | | Collision resolution: step size given by a second hash
Cuckoo hashing | | Two tables/hashes; inserting kicks the old occupant to its other spot
Robin Hood hashing | | Steal slots from elements closer to their home position
Consistent hashing | hash ring | Keys and servers on a ring so few keys move when servers change
Bitset | bit array; bitmap; bit vector; bitvector | Packed array of bits, operate 64 at a time
Bloom filter | | Probabilistic set membership: false positives but never false negatives
Cuckoo filter | | Bloom filter alternative storing fingerprints that supports deletion
Count–min sketch | count min sketch; countmin sketch | Approximate frequency counts with d hash rows, take the minimum
HyperLogLog | hyper log log; hll | Estimate the number of distinct elements from leading zeros of hashes
Disjoint set union | dsu; union find; union-find; disjoint set; merge find set | Merge sets and find representatives (path compression + union by rank)
Sparse table | | O(1) idempotent range queries (e.g. min) from precomputed power-of-two ranges
Monotonic stack | monotone stack | Stack kept sorted; finds next greater/smaller elements
Monotonic queue | monotone queue; monotonic deque; monotone deque | Deque kept sorted; sliding window min/max
Adjacency list | | For each vertex, a list of its neighbours
Adjacency matrix | | V×V grid where cell (u, v) says whether there's an edge
Edge list | | Graph stored as a plain list of (u, v, w) triples
Gap buffer | | Text editor array with an empty gap at the cursor
Rope | ropes | Balanced tree of string pieces for fast concatenation and editing
Piece table | | Text editor structure that references an original and an append buffer
Sparse matrix | csr; compressed sparse row | Matrix storing only non-zero entries
Dancing links | dlx | Doubly linked toroidal lists for undoing removals (Knuth)
LRU cache | least recently used cache; lru | Hash map + linked list evicting the least recently used entry
Persistent array | | Array where every update yields a new version and old ones survive
Difference array | difference arrays | Store a[i] − a[i−1] so range additions become two point updates
Prefix sums | prefix sum; cumulative sum; partial sums | p[i] = a[0] + ... + a[i−1], answers range sums in O(1)
`},
{ id: "tree-ds", title: "Trees & heaps", items: `
Binary search tree | bst | Left subtree smaller, right subtree larger
AVL tree | avl | First self-balancing BST; subtree heights differ by at most 1
Red–black tree | red black tree; rb tree; rbtree | Self-balancing BST with coloured nodes (std::map)
Splay tree | | Self-adjusting BST that rotates each accessed node to the root
Treap | cartesian tree treap; tree heap | BST on keys and heap on random priorities
Scapegoat tree | | Rebuild a subtree from scratch when it gets too unbalanced
AA tree | arne andersson tree | Simplified red–black tree where red nodes can only be right children
Weight-balanced tree | weight balanced tree; bb[α] tree; bounded balance tree | Balance by subtree sizes instead of heights
2–3 tree | 2-3 tree; 23 tree; two three tree | Every internal node has 2 or 3 children, all leaves at the same depth
2–3–4 tree | 2-3-4 tree; 234 tree; two three four tree | Nodes with 2, 3 or 4 children; isomorphic to red–black trees
B-tree | btree; b tree | Wide balanced tree for disks and databases
B+ tree | b+tree; bplus tree; b plus tree | B-tree where all values live in linked leaves
Cartesian tree | | Heap-ordered tree whose in-order traversal is the original array
Order statistic tree | order statistics tree; ordered set; pbds; policy based data structure | BST augmented with sizes for k-th element and rank queries
Tango tree | | O(log log n)-competitive BST using preferred paths
Finger tree | | Persistent sequence with amortised O(1) access at the ends
Segment tree | segtree; seg tree; range tree segment tree | Binary tree over intervals for range queries and point updates
Lazy segment tree | lazy propagation; lazy segtree; segment tree with lazy propagation | Segment tree that defers range updates
Persistent segment tree | chairman tree; president tree; persistent segtree; functional segment tree | Keep every version by copying O(log n) nodes per update
Merge sort tree | | Segment tree whose nodes store their sorted range
Segment tree beats | ji driver segment tree; segtree beats; ji segment tree | Range chmin/chmax using max and second max
Li Chao tree | li chao; lichao tree; li chao segment tree | Segment tree of lines for min/max at a point
Kinetic segment tree | kinetic segtree | Segment tree that tracks when the maximum line changes as time moves forward
Sqrt tree | sqrt tree data structure | O(1) range queries for any associative operation with O(n log log n) build
Fenwick tree | binary indexed tree; bit; fenwick; bit tree | Prefix sums with i += i & −i
Interval tree | | Stores intervals to find all that overlap a point or interval
Range tree | | Multi-level BST for orthogonal range queries
K-d tree | kd tree; k d tree; kdtree | Alternately split points by x then y (then z...)
Quadtree | quad tree | Recursively split 2D space into four quadrants
Octree | oct tree | Recursively split 3D space into eight octants
R-tree | r tree; rtree; r* tree | Bounding-rectangle tree used by spatial databases
BSP tree | binary space partitioning; bsp; binary space partition | Recursively cut space with hyperplanes (Doom's renderer)
Ball tree | metric tree; vp tree; vantage point tree | Partition points into nested hyperspheres
Merkle tree | hash tree | Tree of hashes used in Git and blockchains
Trie | prefix tree; digital tree; retrieval tree | Tree with one character per edge
Binary trie | xor trie; bitwise trie | Trie over bits, e.g. for max XOR queries
Radix tree | patricia tree; patricia trie; compressed trie; compact prefix tree; radix trie | Trie with single-child chains compressed into one edge
Ternary search tree | tst | Trie where each node has less / equal / greater children
Van Emde Boas tree | veb tree; van emde boas; veb | O(log log U) predecessor using recursive √U clusters
X-fast trie | x fast trie | Hash tables on each level of a binary trie for O(log log U) predecessor
Y-fast trie | y fast trie | X-fast trie over buckets of balanced BSTs
Fusion tree | | Predecessor in O(log_w n) using word-level parallelism
Wavelet tree | wavelet matrix | Recursively partition by value bits; k-th smallest in a range
Link-cut tree | link cut tree; lct; dynamic tree | Dynamic forest with path queries via splay-tree preferred paths
Euler tour tree | ett | Dynamic connectivity of forests via balanced trees of Euler tours
Top tree | top trees | Dynamic tree supporting path and subtree aggregates via clusters
Binary heap | heap; min heap; max heap | Complete binary tree in an array; parent ≤ children
D-ary heap | d ary heap; k ary heap; dary heap | Heap where each node has d children
Binomial heap | binomial queue | Forest of binomial trees, merge like binary addition
Fibonacci heap | fib heap | O(1) amortised decrease-key; theoretical Dijkstra speedup
Pairing heap | | Simple heap with fast meld, great in practice
Leftist heap | leftist tree | Meldable heap whose null-path length is shorter on the right
Skew heap | self adjusting heap | Leftist heap without bookkeeping: always swap children when merging
Min-max heap | min max heap | Alternating min and max levels: get both extremes in O(1)
Soft heap | | Heap that corrupts some keys to beat the comparison bound (Chazelle)
Radix heap | | Monotone integer priority queue with buckets by highest differing bit
Brodal queue | brodal heap | Worst-case optimal priority queue
Beap | bi parental heap | Bi-parental heap laid out in a triangle
Stern–Brocot tree | stern brocot | Infinite BST containing every positive rational exactly once
`},
{ id: "strings", title: "Strings", items: `
Knuth–Morris–Pratt algorithm | kmp; knuth morris pratt; prefix function; failure function | Pattern matching using the longest proper border of every prefix
Z-algorithm | z function; z algorithm; z array; z box | Longest common prefix of the string with each of its suffixes
Rabin–Karp algorithm | rabin karp | Pattern matching by comparing rolling hashes
Polynomial hashing | rolling hash; string hashing; polynomial rolling hash; hashing | Hash = Σ s[i]·pⁱ mod m
Boyer–Moore algorithm | boyer moore | Match from the right using bad-character and good-suffix shifts
Boyer–Moore–Horspool algorithm | horspool; boyer moore horspool | Simplified Boyer–Moore with only the bad-character table
Aho–Corasick algorithm | aho corasick; aho | Multi-pattern matching with a trie plus failure links
Manacher's algorithm | manacher | All longest palindromic substrings in O(n)
Suffix array | sa | Sorted order of all suffixes of a string
Suffix tree | | Compressed trie of all suffixes
Suffix automaton | dawg; directed acyclic word graph; sam | Smallest DFA accepting all substrings
Palindromic tree | eertree; palindrome tree; palindromic automaton | One node per distinct palindromic substring
Ukkonen's algorithm | ukkonen | Online linear-time suffix tree construction
Kasai's algorithm | kasai; lcp array; kasai lcp | LCP array from a suffix array in O(n)
SA-IS | sais; induced sorting | Linear suffix array construction by induced sorting
DC3 algorithm | dc3; skew algorithm; karkkainen sanders | Linear suffix array via recursion on 2/3 of the suffixes
Duval's algorithm | lyndon factorization; duval; lyndon factorisation | Factor a string into non-increasing Lyndon words
Booth's algorithm | booth; minimal rotation; lexicographically minimal string rotation; minimum cyclic shift | Lexicographically smallest rotation in O(n)
Main–Lorentz algorithm | main lorentz | Find all tandem repeats (squares) by divide and conquer
Bitap algorithm | bitap; shift or; shift and; baeza yates gonnet | Approximate matching with bit-parallel state
Levenshtein distance | edit distance; levenshtein; wagner fischer | Minimum insertions, deletions and substitutions
Damerau–Levenshtein distance | damerau levenshtein | Edit distance that also allows swapping adjacent characters
Hamming distance | hamming | Number of positions where two equal-length strings differ
Longest common subsequence | lcs | Longest sequence appearing in both strings in order
Needleman–Wunsch algorithm | needleman wunsch | Global sequence alignment DP (bioinformatics)
Smith–Waterman algorithm | smith waterman | Local sequence alignment DP
Hirschberg's algorithm | hirschberg | LCS/alignment reconstruction in linear space via divide and conquer
Burrows–Wheeler transform | bwt; burrows wheeler; block sorting compression | Sort all rotations and take the last column (bzip2)
FM-index | fm index | Compressed full-text index built on the BWT
Huffman coding | huffman; huffman tree | Optimal prefix code by merging the two rarest symbols
Shannon–Fano coding | shannon fano | Prefix code by recursively splitting probabilities in half
Arithmetic coding | range coding; arithmetic encoding | Encode a whole message as a single number in [0, 1)
LZ77 | lz77; lempel ziv 77; lz | Compression with back-references into a sliding window
LZ78 | lz78 | Compression building an explicit dictionary of phrases
LZW | lempel ziv welch; lzw | Dictionary compression used in GIF
DEFLATE | deflate; gzip; zlib | LZ77 + Huffman, used in zip and PNG
Run-length encoding | rle; run length encoding | Store "AAAB" as "3A1B"
Soundex | | Phonetic code mapping similar-sounding names together
`},
{ id: "dp", title: "Dynamic programming & optimisation", items: `
Knapsack | 0 1 knapsack; 01 knapsack; knapsack problem; knapsack dp | Choose items maximising value under a weight limit
Unbounded knapsack | complete knapsack | Knapsack where each item can be taken any number of times
Subset sum | subset sum dp | Can some subset hit an exact target?
Coin change | coin change dp | Ways or minimum coins to make an amount
Longest increasing subsequence | lis | Longest strictly rising subsequence, O(n log n) with patience piles
Kadane's algorithm | kadane; maximum subarray; max subarray sum | Max subarray sum: extend or restart at each element
Matrix chain multiplication | matrix chain; mcm | Best parenthesisation of a product of matrices
Interval DP | range dp; interval dynamic programming | dp[l][r] built from smaller intervals
Bitmask DP | bitmask dynamic programming; dp over subsets; bit dp | State is a subset encoded as an integer
SOS DP | sum over subsets; sos; subset sum dp zeta; zeta transform; superset sum | For each mask, sum over all its submasks in O(2ⁿ n)
Digit DP | digit dynamic programming | Count numbers ≤ N by building digits with a tight flag
DP on trees | tree dp; dp on tree; tree dynamic programming | Combine children's states at each node
Broken profile DP | profile dp; plug dp; dp on broken profile; connectivity dp | Grid DP over the frontier between filled and empty cells
Convex hull trick | cht; convex hull optimisation; convex hull optimization | Maintain lines to answer min/max of (m·x + c) queries
Divide and conquer optimisation | divide and conquer dp; dnc optimization; divide and conquer optimization | Optimal split points are monotone, so recurse on halves
Knuth's optimisation | knuth optimization; knuth yao; knuth yao speedup; knuths optimization | opt[l][r−1] ≤ opt[l][r] ≤ opt[l+1][r] cuts interval DP to O(n²)
Aliens trick | wqs binary search; lagrangian relaxation; aliens; alien trick; lambda optimization | Binary search a penalty per item to remove the "exactly k" constraint (IOI 2016)
Slope trick | | Represent a convex piecewise-linear DP by the multiset of its breakpoints
Monotone queue optimisation | monotone queue optimization; monotonic queue optimization; sliding window dp | Sliding-window min transition in O(1) amortised
SMAWK algorithm | smawk | Row minima of a totally monotone matrix in O(n)
Viterbi algorithm | viterbi | Most likely hidden-state sequence in an HMM
Forward–backward algorithm | forward backward; baum welch | Posterior state probabilities in an HMM
CYK algorithm | cyk; cocke younger kasami; cky | Parse a context-free grammar in Chomsky normal form with interval DP
Bellman equation | bellman; value iteration | The recursive optimality equation behind DP and RL
Simplex algorithm | simplex; simplex method | Linear programming by walking between vertices of the feasible region
Ellipsoid method | ellipsoid | First polynomial-time linear programming algorithm
Interior point method | interior point; karmarkar; karmarkars algorithm | Linear programming by moving through the inside of the feasible region
Branch and bound | | Prune search branches whose bound can't beat the best solution so far
Backtracking | | Build candidates incrementally and abandon them as soon as they fail
Algorithm X | knuths algorithm x; exact cover | Knuth's exact cover search, usually with dancing links
`},
{ id: "math", title: "Maths & number theory", items: `
Euclidean algorithm | gcd; euclid; euclidean; euclids algorithm | gcd(a, b) = gcd(b, a mod b)
Extended Euclidean algorithm | extended gcd; exgcd; egcd; extended euclid | Also finds x, y with ax + by = gcd(a, b)
Binary GCD | stein; steins algorithm; binary gcd algorithm | GCD with only shifts and subtraction
Sieve of Eratosthenes | eratosthenes; sieve; prime sieve | Cross out multiples of each prime
Linear sieve | euler sieve; eulers sieve; sieve of euler | Each composite is crossed out exactly once by its smallest prime factor
Segmented sieve | | Sieve a range [L, R] using primes up to √R
Sieve of Atkin | atkin | Prime sieve based on quadratic forms
Sieve of Sundaram | sundaram | Sieve that removes i + j + 2ij to find odd primes
Trial division | | Test divisibility by every number up to √n
Fermat primality test | fermat test | Check aⁿ⁻¹ ≡ 1 (mod n); fooled by Carmichael numbers
Miller–Rabin primality test | miller rabin; rabin miller; miller-rabin | Probabilistic primality using square roots of 1
AKS primality test | aks | First deterministic polynomial-time primality test
Pollard's rho algorithm | pollard rho; pollards rho; rho | Factor integers with a pseudo-random sequence and cycle detection
Pollard's p − 1 algorithm | pollard p 1; pollard p minus 1; p 1 method | Factor n when p − 1 is smooth for some prime factor p
Quadratic sieve | | Factoring by finding smooth values of x² − n
General number field sieve | gnfs; number field sieve | Fastest known classical factoring for huge numbers
Lenstra elliptic-curve factorization | ecm; lenstra; elliptic curve factorization; elliptic curve factorisation | Factoring using random elliptic curves
Binary exponentiation | fast power; exponentiation by squaring; fast exponentiation; binpow; square and multiply; modpow; fast pow; modular exponentiation | Compute aⁿ with O(log n) multiplications
Matrix exponentiation | matrix power; matrix fast power; matrix exponentiation by squaring | Linear recurrences in O(k³ log n)
Montgomery multiplication | montgomery; montgomery reduction | Modular multiplication without division, via R = 2^k
Barrett reduction | barrett | Fast mod using a precomputed reciprocal
Russian peasant multiplication | russian peasant; ancient egyptian multiplication; peasant multiplication | Halve one factor, double the other, add when odd
Karatsuba algorithm | karatsuba | Multiply with 3 half-size products instead of 4
Toom–Cook multiplication | toom cook; toom 3 | Generalised Karatsuba splitting into k parts
Schönhage–Strassen algorithm | schonhage strassen; schoenhage strassen | Huge-integer multiplication via FFT over rings
Fast Fourier transform | fft; cooley tukey; fourier transform | Evaluate a polynomial at roots of unity in O(n log n)
Number-theoretic transform | ntt; number theoretic transform | FFT over a prime field like 998244353
Fast Walsh–Hadamard transform | fwht; walsh hadamard; xor convolution; walsh hadamard transform | XOR/AND/OR convolution in O(n log n)
Strassen algorithm | strassen; strassen matrix multiplication | Multiply 2×2 block matrices with 7 products instead of 8
Freivalds' algorithm | freivalds; freivald | Randomly verify A·B = C in O(n²)
Gaussian elimination | gauss jordan; gaussian; gauss elimination; row reduction; gauss jordan elimination | Row operations to solve linear systems or compute determinants
XOR basis | linear basis; xor linear basis; gaussian elimination xor | Basis of a set of numbers over GF(2)
Berlekamp–Massey algorithm | berlekamp massey; bm | Shortest linear recurrence generating a sequence
Lagrange interpolation | lagrange; lagrange polynomial | Unique polynomial through n+1 points
Horner's method | horner; horners rule; horner scheme | Evaluate a polynomial with n multiply-adds
Newton's method | newton raphson; newton; newtons iteration | xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)
Bisection method | bisection | Root finding by halving an interval where the sign changes
Secant method | secant | Newton's method with a finite-difference derivative
Simpson's rule | simpson; adaptive simpson | Numerical integration with parabolas
Fast inverse square root | quake inverse square root; 0x5f3759df; fast inv sqrt | Quake III bit hack: magic constant 0x5F3759DF
CORDIC | cordic; volder | Compute trig functions with only shifts and adds
Chinese remainder theorem | crt; chinese remainder | Combine congruences with coprime moduli
Garner's algorithm | garner | Reconstruct a number from its residues in mixed radix
Baby-step giant-step | bsgs; baby step giant step; shanks | Discrete log in O(√p)
Pohlig–Hellman algorithm | pohlig hellman | Discrete log when the group order is smooth
Tonelli–Shanks algorithm | tonelli shanks; tonelli | Modular square root mod a prime
Cipolla's algorithm | cipolla | Modular square root using a quadratic extension field
Lucas's theorem | lucas theorem; lucas; lucass theorem | C(n, k) mod p via base-p digits
Möbius inversion | mobius inversion; mobius function; moebius inversion | Recover f from g = Σ_{d|n} f(d)
Inclusion–exclusion principle | inclusion exclusion; pie; principle of inclusion exclusion | |A ∪ B| = |A| + |B| − |A ∩ B|, generalised
Min_25 sieve | min25; min 25 sieve; min25 sieve | Sum of a multiplicative function over primes in ~O(n^{3/4}/log n)
Du's sieve | du sieve; dujiao sieve; du jiao sieve | Sum of a multiplicative function via Dirichlet convolution, O(n^{2/3})
Floor sum | floor_sum; floor sum algorithm; euclidean like algorithm; universal euclidean | Σ ⌊(a·i + b)/c⌋ by a Euclid-like recursion
Gray code | grey code; reflected binary code | Successive numbers differ in exactly one bit
Fisher–Yates shuffle | fisher yates; knuth shuffle; fisher yates knuth | Uniform random permutation: swap each position with a random earlier one
Reservoir sampling | algorithm r | Uniform sample of k items from a stream of unknown length
Boyer–Moore majority vote | majority vote; boyer moore voting; moore voting; boyer moore majority | Find the majority element in O(1) space with a counter
Linear congruential generator | lcg; linear congruential | xₙ₊₁ = (a·xₙ + c) mod m
Mersenne Twister | mt19937; mersenne twister | Period 2¹⁹⁹³⁷ − 1 PRNG used by C++ and Python
Xorshift | xorshift; xorshift64; xoshiro | PRNG built only from XORs and shifts
Monte Carlo method | monte carlo | Estimate quantities by random sampling
Shor's algorithm | shor | Quantum polynomial-time integer factoring
Grover's algorithm | grover | Quantum search of N items in O(√N)
`},
{ id: "geometry", title: "Computational geometry & graphics", items: `
Graham scan | graham | Convex hull: sort by angle around the lowest point, pop right turns
Andrew's monotone chain | monotone chain; andrew; andrews algorithm | Convex hull: sort by x, build lower and upper hulls
Jarvis march | gift wrapping; jarvis; gift wrapping algorithm | Convex hull by repeatedly picking the most clockwise point, O(nh)
Quickhull | quick hull | Convex hull by recursively taking the farthest point from a line
Chan's algorithm | chan | Output-sensitive O(n log h) convex hull
Rotating calipers | rotating caliper | Sweep two parallel lines around a convex hull (diameter, width)
Shoelace formula | shoelace; gauss area formula; surveyors formula; shoelace theorem | Polygon area from the cross products of consecutive vertices
Pick's theorem | pick | Area = interior lattice points + boundary/2 − 1
Sweep line | line sweep; sweep line algorithm; plane sweep | Move a line across the plane, processing events in order
Bentley–Ottmann algorithm | bentley ottmann | Report all segment intersections with a sweep line
Shamos–Hoey algorithm | shamos hoey | Detect whether any two segments intersect, O(n log n)
Closest pair of points | closest pair; closest pair divide and conquer | Divide and conquer, checking a narrow strip in the middle
Ray casting | point in polygon; even odd rule; crossing number; ray casting algorithm | Point-in-polygon by counting crossings of a ray
Winding number | winding number algorithm | Point-in-polygon by how many times the polygon wraps around the point
Bowyer–Watson algorithm | bowyer watson; delaunay triangulation; delaunay | Build a Delaunay triangulation by inserting points and retriangulating
Fortune's algorithm | fortune; voronoi diagram; voronoi; fortunes sweep | Voronoi diagram with a sweep line and beach line of parabolas
Welzl's algorithm | welzl; minimum enclosing circle; smallest enclosing circle | Expected O(n) smallest enclosing circle
Half-plane intersection | half plane intersection; halfplane intersection | Intersect n half-planes in O(n log n)
Minkowski sum | minkowski | Sum of two convex polygons by merging edge sequences
Ear clipping | ear clipping triangulation; ear cutting | Triangulate a polygon by cutting off "ears" one at a time
Ramer–Douglas–Peucker algorithm | douglas peucker; ramer douglas peucker; rdp | Simplify a polyline by keeping the farthest points
Sutherland–Hodgman algorithm | sutherland hodgman | Clip a polygon against a convex window edge by edge
Weiler–Atherton algorithm | weiler atherton | Clip arbitrary polygons, including concave ones
Cohen–Sutherland algorithm | cohen sutherland | Line clipping with 4-bit outcodes
Liang–Barsky algorithm | liang barsky | Parametric line clipping
Bresenham's line algorithm | bresenham; bresenhams; bresenham line | Draw a raster line with integer error accumulation
Xiaolin Wu's line algorithm | xiaolin wu; wu line; wus algorithm | Anti-aliased line drawing
Midpoint circle algorithm | midpoint circle; bresenham circle | Rasterise a circle using 8-way symmetry
De Casteljau's algorithm | de casteljau; casteljau | Evaluate Bézier curves by repeated linear interpolation
Marching squares | | Contour lines from a 2D grid of samples
Marching cubes | | Triangle mesh of an isosurface from a 3D voxel grid
Painter's algorithm | painter; painters | Draw polygons back to front
Z-buffering | z buffer; depth buffer; z buffering; depth buffering | Keep the nearest depth per pixel
Ray tracing | raytracing; ray tracer | Render by following light rays from the camera
Phong shading | phong; phong reflection model | Ambient + diffuse + specular lighting
Gouraud shading | gouraud | Interpolate vertex colours across a triangle
Floyd–Steinberg dithering | floyd steinberg; error diffusion dithering | Push each pixel's quantisation error onto its neighbours
Perlin noise | perlin; simplex noise | Smooth gradient noise for procedural textures
Lloyd's algorithm | lloyd; voronoi relaxation; lloyd relaxation | Move points to their Voronoi cell centroids, repeat
Hilbert curve | hilbert order; hilbert curve order | Space-filling curve used to order points (e.g. for Mo's)
`},
{ id: "techniques", title: "Range queries & paradigms", items: `
Mo's algorithm | mo; mos; mo algorithm; query sqrt decomposition | Offline range queries sorted by (block of L, R) moving two pointers
Mo's algorithm with updates | mo with updates; mos with modifications; time mo | Mo's with a third time dimension
Sqrt decomposition | square root decomposition; sqrt; block decomposition; sqrt decomp | Split into √n blocks of √n
CDQ divide and conquer | cdq; cdq dnc | Offline divide and conquer on time: left half's updates answer right half's queries
Offline dynamic connectivity | segment tree on time; dynamic connectivity; segment tree over time | Edges live on a segment tree of time, DFS with a rollback DSU
DSU with rollback | rollback dsu; undo dsu; dsu rollback | Union by rank without path compression so unions can be undone
Coordinate compression | coordinate compression; discretization; discretisation; compress coordinates | Map large values to their rank 0..k−1
Divide and conquer | dnc; d&c | Split, solve recursively, combine
Greedy algorithm | greedy | Always take the locally best choice
Dynamic programming | dp | Solve overlapping subproblems once and reuse them
Memoization | memoisation; memo | Cache the results of recursive calls
Randomized algorithm | randomised algorithm; randomized; las vegas | Use randomness to get speed or simplicity
Exchange argument | | Prove greedy order by swapping adjacent elements
Minimax | minimax algorithm | Maximise your score assuming the opponent minimises it
Alpha–beta pruning | alpha beta; alpha beta pruning; alphabeta | Minimax that skips branches that can't matter
Monte Carlo tree search | mcts | Game tree search with random playouts and UCB selection
Sprague–Grundy theorem | sprague grundy; grundy; nimber; grundy numbers; mex | Every impartial game is equivalent to a Nim heap
Simulated annealing | annealing | Random local search that accepts worse moves with decreasing probability
Hill climbing | | Keep moving to a better neighbour until stuck
Genetic algorithm | ga; evolutionary algorithm | Evolve a population by selection, crossover and mutation
Tabu search | tabu | Local search that forbids recently visited moves
Ant colony optimization | ant colony; aco; ant colony optimisation | Simulated ants lay pheromones on good paths
Particle swarm optimization | pso; particle swarm; particle swarm optimisation | Particles move toward their own and the swarm's best positions
DPLL algorithm | dpll; davis putnam logemann loveland | SAT solving by unit propagation, pure literals and backtracking
CDCL | conflict driven clause learning; cdcl | Modern SAT solving that learns a clause from each conflict
Unification | robinson unification | Find a substitution making two terms equal (Prolog)
Shunting-yard algorithm | shunting yard; shunting yard algorithm | Dijkstra's infix → postfix conversion with an operator stack
Recursive descent parser | recursive descent; recursive descent parsing | One function per grammar rule
LR parser | lr parsing; lalr; lalr parser; lr parsing algorithm; shift reduce | Bottom-up shift-reduce parsing (yacc)
Earley parser | earley | Parse any context-free grammar with dynamic charts
Thompson's construction | thompson; thompson nfa | Regex → NFA
Powerset construction | subset construction; rabin scott | NFA → DFA by tracking sets of states
Hopcroft's algorithm | dfa minimization; hopcroft minimization; dfa minimisation | Minimise a DFA by partition refinement
Mark and sweep | mark sweep; mark and sweep garbage collection; tracing garbage collection | GC: mark everything reachable, free the rest
Reference counting | refcounting | Free an object when its count of references hits zero
Copy-on-write | cow; copy on write | Share data until someone modifies it
`},
{ id: "systems", title: "Systems, ML & crypto", items: `
Round-robin scheduling | round robin | Each process gets a fixed time slice in turn
Banker's algorithm | bankers; banker | Dijkstra's deadlock avoidance by simulating allocations
Peterson's algorithm | peterson | Two-process mutual exclusion with a flag array and a turn variable
Dekker's algorithm | dekker | First known correct two-process mutual exclusion
Lamport's bakery algorithm | bakery; lamport bakery; bakery algorithm | Mutual exclusion by taking a ticket number
Lamport timestamps | lamport clock; lamport clocks; logical clock | Logical clock: max(local, received) + 1
Vector clock | vector clocks | One counter per process to detect causality
Paxos | paxos | Consensus with proposers, acceptors and ballots
Raft | raft consensus | Understandable consensus with leader election and log replication
Two-phase commit | 2pc; two phase commit | Prepare, then commit, across distributed participants
Chandy–Lamport algorithm | chandy lamport; snapshot algorithm | Consistent global snapshot using marker messages
Bully algorithm | bully | Leader election where the highest ID wins
Nagle's algorithm | nagle | Buffer small TCP packets until an ACK arrives
Token bucket | leaky bucket; token bucket algorithm | Rate limiting by spending tokens that refill over time
Clock page replacement | clock algorithm; second chance; page replacement clock | Approximate LRU page eviction with a reference bit and a sweeping hand
Bélády's algorithm | belady; beladys optimal; optimal page replacement | Evict the page needed furthest in the future
Buddy allocation | buddy system; buddy allocator; buddy memory allocation | Split memory into power-of-two blocks, merge with your buddy on free
PageRank | page rank; pagerank | Rank web pages by the stationary distribution of a random surfer
Gradient descent | sgd; stochastic gradient descent; gradient decent | Step opposite the gradient to minimise a loss
Backpropagation | backprop; back propagation | Chain rule to get gradients of a neural network
Adam | adam optimizer; adam optimiser | Gradient descent with momentum and per-parameter adaptive rates
K-means clustering | k means; kmeans; lloyds k means | Alternately assign points to the nearest centre and recompute centres
K-nearest neighbours | knn; k nearest neighbors; k nearest neighbours | Classify by majority vote of the closest training points
Expectation–maximization | em algorithm; em; expectation maximisation; expectation maximization | Alternate inferring latent variables and fitting parameters
Principal component analysis | pca; principal components analysis | Project onto the directions of greatest variance
DBSCAN | dbscan | Density-based clustering that marks sparse points as noise
Decision tree learning | id3; c4.5; cart; decision tree | Split data greedily by information gain or Gini impurity
Random forest | random forests | Average many decision trees trained on bootstrap samples
Support vector machine | svm; support vector machines | Maximum-margin separating hyperplane
Perceptron | perceptron learning | The original single-neuron linear classifier
Naive Bayes | naive bayes classifier; naïve bayes | Classifier assuming features are independent given the class
Kalman filter | kalman | Optimal linear estimator for noisy measurements over time
Q-learning | q learning; qlearning | Model-free RL updating Q(s, a) toward reward + max future Q
Attention | transformer; self attention; scaled dot product attention | softmax(QKᵀ/√d)·V
RSA | rsa; rivest shamir adleman | Public-key crypto based on factoring n = pq
Diffie–Hellman key exchange | diffie hellman; dh; diffie hellman key exchange | Agree on gᵃᵇ over a public channel
Elliptic-curve cryptography | ecc; ecdsa; elliptic curve cryptography; ecdh | Public-key crypto on groups of points on a curve
AES | aes; rijndael; advanced encryption standard | The standard 128-bit block cipher
DES | des; data encryption standard; triple des; 3des | 1970s 56-bit Feistel block cipher
ChaCha20 | chacha; chacha20; salsa20 | ARX stream cipher used in TLS and WireGuard
One-time pad | otp; one time pad; vernam cipher | XOR with a truly random key as long as the message
Caesar cipher | caesar; shift cipher; rot13 | Shift each letter by a fixed amount
Vigenère cipher | vigenere; vigenere cipher | Caesar shifts given by a repeating keyword
SHA-256 | sha256; sha 2; sha2; sha-2 | 256-bit hash used in Bitcoin
MD5 | md5 | Broken 128-bit hash still used for checksums
HMAC | hmac | Keyed hash message authentication code
Bcrypt | bcrypt; scrypt; argon2; pbkdf2 | Deliberately slow password hashing
CRC | cyclic redundancy check; crc32 | Error-detecting checksum from polynomial division
Hamming code | hamming codes; hamming 7 4 | Error-correcting code that fixes single-bit errors
Reed–Solomon error correction | reed solomon | Polynomial error-correcting code used in QR codes and CDs
Luhn algorithm | luhn; mod 10 algorithm | Credit card checksum: double every second digit
Zeller's congruence | zeller | Day of the week for any date
`},
];
