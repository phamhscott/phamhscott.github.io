// coursework.ts — smaller class projects and assignments, grouped by course.
// These didn't each warrant their own repo, so they live together in one
// "Coursework" section. Same idea as projects.ts: the DATA lives here, the
// markup that displays it lives on the page (index.astro).
//
// >> TO ADD A COURSE: copy a { ... } block below and edit its fields. <<

export interface Course {
  code: string; // e.g. "CSE 151A"
  name: string; // the class's topic
  description: string; // what you built in it
  tags?: string[]; // key concepts / tech, shown as little pills
}

export const coursework: Course[] = [
  {
    code: "CSE 151A",
    name: "Machine Learning",
    description:
      "Built core ML models from scratch in PyTorch for MNIST digit classification — k-nearest neighbors, logistic regression, a Gaussian generative classifier, multilayer perceptrons, and convolutional neural networks (reaching ~97% test accuracy).",
    tags: ["Python", "PyTorch", "CNNs", "Classification"],
  },
  {
    code: "CSE 150B",
    name: "Artificial Intelligence: Search & Reasoning",
    description:
      "Implemented classic AI algorithms: search (DFS, BFS, Uniform-Cost, and A*) on a gridworld, expectimax game AI for 2048, reinforcement learning (Monte Carlo, Temporal-Difference, and Q-learning) for Blackjack, and Monte Carlo Tree Search for Gomoku.",
    tags: ["Python", "Search", "Reinforcement Learning", "MCTS"],
  },
  {
    code: "CSE 120",
    name: "Operating Systems",
    description:
      "Kernel development on the Nachos OS: thread synchronization and semaphores, system calls, user processes, and demand-paged virtual memory with page-fault handling, clock replacement, and swapping.",
    tags: ["Java", "Concurrency", "Virtual Memory"],
  },
  {
    code: "CSE 100",
    name: "Advanced Data Structures",
    description:
      "C++ implementations of Huffman coding for file compression and graph-based network planning.",
    tags: ["C++", "Algorithms", "Data Structures"],
  },
  {
    code: "CSE 29",
    name: "Systems Programming",
    description:
      "Low-level C projects: a Unix-like shell, a malloc/free memory allocator simulator (best-fit policy), and a linked-list calendar.",
    tags: ["C", "Systems"],
  },
];
