type DeviceInfo = {
	reliability: number;
	cost: number;
};

/**
 * Solves the reliability design problem using the set method (dynamic programming approach)
 * with sophisticated pruning of Pareto-optimal solutions.
 * @param devices Information about each device in the series system.
 * @param budget The maximum allowed total cost.
 * @returns The maximum possible system reliability within the budget.
 */
function solveReliabilityDesign(devices: DeviceInfo[], budget: number): number {
	const numStages = devices.length;

	// Calculate precise upper bounds
	const minTotalCost = devices.reduce((sum, device) => sum + device.cost, 0);
	const maxCopiesPerDevice = devices.map((d) => {
		const remainingBudget = budget - (minTotalCost - d.cost);
		return Math.floor(remainingBudget / d.cost) + 1;
	});

	// S will store the set of optimal (cost -> max reliability) pairs for the current stage
	let S: Map<number, number> = new Map();
	S.set(0, 1.0); // Initial state: reliability 1.0, cost 0 before the first stage

	for (let i = 0; i < numStages; i++) {
		const { reliability, cost } = devices[i];
		const maxCopies = maxCopiesPerDevice[i];
		const nextS: Map<number, number> = new Map();

		for (let copies = 1; copies <= maxCopies; copies++) {
			const stageReliability = 1 - Math.pow(1 - reliability, copies);
			const stageCost = cost * copies;

			for (const [prevCost, prevReliability] of S.entries()) {
				const newTotalCost = prevCost + stageCost;
				const newTotalReliability = prevReliability * stageReliability;

				if (newTotalCost <= budget) {
					// Check if a better reliability for the same or lower cost exists in nextS
					let isDominated = false;
					for (const [existingCost, existingReliability] of nextS.entries()) {
						if (
							existingCost <= newTotalCost &&
							existingReliability >= newTotalReliability
						) {
							isDominated = true;
							break;
						}
					}

					if (!isDominated) {
						// Add the new solution, overriding any strictly worse solution for the same cost
						nextS.set(newTotalCost, newTotalReliability);

						// Further pruning: Remove any existing entries in nextS that are now dominated by the new entry
						for (const [
							existingCost,
							existingReliability,
						] of nextS.entries()) {
							if (
								newTotalCost < existingCost &&
								newTotalReliability >= existingReliability
							) {
								nextS.delete(existingCost);
							}
						}
					}
				}
			}
		}
		S = nextS;
	}

	// Find the maximum reliability among all valid states within the budget
	let maxReliability = 0.0;
	for (const reliabilityValue of S.values()) {
		if (reliabilityValue > maxReliability) {
			maxReliability = reliabilityValue;
		}
	}

	return maxReliability;
}

// --- Example Usage ---
const devices: DeviceInfo[] = [
	{ reliability: 0.9, cost: 30 },
	{ reliability: 0.8, cost: 15 },
	{ reliability: 0.5, cost: 20 },
];
const budget = 145;

const resultReliability = solveReliabilityDesign(devices, budget);
console.log(`Maximum system reliability within budget: ${resultReliability}`);
