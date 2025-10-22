/* 743. Network Delay Time
Medium

You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.) */

// function networkDelayTime(times: number[][], n: number, k: number): number {
// 	const adjacency = new Map<number, number[][]>();
// 	for (const time of times) {
// 		const src = time[0];
// 		const dst = time[1];
// 		const t = time[2];
// 		if (!adjacency.has(src)) {
// 			adjacency.set(src, []);
// 		}
// 		adjacency.get(src)!.push([dst, t]);
// 	}

// 	const pq: { node: number; time: number }[] = [];
// 	pq.push({ node: k, time: 0 });
// 	const visited = new Set();
// 	let delays = 0;

// 	while (pq.length > 0) {
// 		pq.sort((a, b) => a.time - b.time);
// 		const { time, node } = pq.shift();

// 		if (visited.has(node)) {
// 			continue;
// 		}

// 		visited.add(node);
// 		delays = Math.max(delays, time);
// 		const neighbors = adjacency.get(node) || []; // Handle case when there are no neighbors

// 		for (const neighbor of neighbors) {
// 			const neighborNode = neighbor[0];
// 			const neighborTime = neighbor[1];
// 			if (!visited.has(neighborNode)) {
// 				const newTime = time + neighborTime;
// 				pq.push({ node: neighborNode, time: newTime });
// 			}
// 		}
// 	}

// 	if (visited.size === n) {
// 		return delays;
// 	}

// 	return -1;
// }
function networkDelayTime(times: number[][], n: number, k: number): number {
	// create adjacency matrix
	const adjacencyMatrix = new Map<number, number[][]>();
	for (const [src, target, cost] of times) {
		if (!adjacencyMatrix.has(src)) {
			adjacencyMatrix.set(src, []);
		}
		adjacencyMatrix.get(src)!.push([target, cost]);
	}
	// create visited set
	const visited = new Set<number>();
	// create priority queue for min node distances
	const pq: { node: number; time: number }[] = [];
	//  initialize with starting node and time zero
	pq.push({ node: k, time: 0 });
	let timeSum = 0;

	// process queue
	while (pq.length) {
		pq.sort((a, b) => a.time - b.time);
		const { node, time } = pq.shift();
		if (visited.has(node)) {
			continue;
		}
		visited.add(node);
		timeSum = Math.max(timeSum, time);
		const neighbors = adjacencyMatrix.get(node) || [];
		for (const [neighborNode, neighborTime] of neighbors) {
			if (!visited.has(neighborNode)) {
				const newTime = time + neighborTime;
				pq.push({ node: neighborNode, time: newTime });
			}
		}
	}
	if (visited.size === n) {
		return timeSum;
	}
	return -1;
}

/* solution using leetcode builtin minheap priority queue

function networkDelayTime(times: number[][], n: number, k: number): number {
    // create adjacency matrix
    const adjacencyMatrix = new Map<number, number[][]>();
    for (const [src, target, cost] of times) {
        if (!adjacencyMatrix.has(src)) {
            adjacencyMatrix.set(src, []);
        }
        adjacencyMatrix.get(src)!.push([target, cost]);
    }
    // create visited set
    const visited = new Set<number>();
    // create priority queue for min node distances
    const pq = new MinPriorityQueue((item:{node:number,time:number})=>item.time);
    //  initialize with starting node and time zero
    pq.enqueue({ node: k, time: 0 });
    let timeSum = 0;

    // process queue
    while (pq.size()) {
        // pq.sort((a, b) => a.time - b.time);
        const { node, time } = pq.dequeue();
        if (visited.has(node)) {
            continue;
        }
        visited.add(node);
        timeSum = Math.max(timeSum, time);
        const neighbors = adjacencyMatrix.get(node) || [];
        for (const [neighborNode, neighborTime] of neighbors) {
            if (!visited.has(neighborNode)) {
                const newTime = time + neighborTime;
                pq.enqueue({ node: neighborNode, time: newTime });
            }
        }
    }
    if (visited.size === n) {
        return timeSum;
    }
    return -1;
}
*/
