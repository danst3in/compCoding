type DeviceInfo = {
	reliability: number;
	cost: number;
};

// Represents a complete state after processing 'i' stages
type State = {
	totalReliability: number;
	// An array storing the number of copies [m1, m2, ..., mi]
	copiesHistory: number[];
};

/**
 * Solves the reliability design problem using the set method (dynamic programming
 * approach) and returns the max reliability and the optimal configuration (copies per
 * device) with sophisticated pruning of Pareto-optimal solutions.
 * @param devices Information about each device in the series system.
 * @param budget The maximum allowed total cost.
 * @returns An object containing the maximum reliability and the optimal copies array,
 *          or null if no valid configuration is found.
 */
function solveReliabilityDesignWithConfig(
	devices: DeviceInfo[],
	budget: number,
): { maxReliability: number; optimalCopies: number[] } | null {
	const numStages = devices.length;

	// Calculate precise upper bounds
	const minTotalCost = devices.reduce((sum, device) => sum + device.cost, 0);
	const maxCopiesPerDevice = devices.map((d) => {
		const remainingBudget = budget - (minTotalCost - d.cost);
		return Math.floor(remainingBudget / d.cost) + 1;
	});

	// S will store the set of optimal states for the current stage.
	// Map key: total cost | Map value: State object (including reliability and copies history)
	let S: Map<number, State> = new Map();
	S.set(0, { totalReliability: 1.0, copiesHistory: [] });

	console.log('--- Starting Reliability Design DP ---');
	console.log(`Initial State (Stage 0):`, Array.from(S.entries()));

	for (let i = 0; i < numStages; i++) {
		const { reliability, cost } = devices[i];
		const maxCopies = maxCopiesPerDevice[i];
		const nextS: Map<number, State> = new Map();

		for (let copies = 1; copies <= maxCopies; copies++) {
			const stageReliability = 1 - Math.pow(1 - reliability, copies);
			const stageCost = cost * copies;

			for (const [prevTotalCost, prevState] of S.entries()) {
				const newTotalCost = prevTotalCost + stageCost;

				if (newTotalCost <= budget) {
					const newTotalReliability =
						prevState.totalReliability * stageReliability;
					const newCopiesHistory = [...prevState.copiesHistory, copies];

					const newState: State = {
						totalReliability: newTotalReliability,
						copiesHistory: newCopiesHistory,
					};

					// Pruning logic (same as before)
					const existingState = nextS.get(newTotalCost);
					if (
						existingState &&
						existingState.totalReliability >= newTotalReliability
					) {
						continue;
					}
					nextS.set(newTotalCost, newState);

					for (const [existingCost, existingStateValue] of nextS.entries()) {
						if (
							newTotalCost < existingCost &&
							newTotalReliability >= existingStateValue.totalReliability
						) {
							nextS.delete(existingCost);
						}
					}
				}
			}
		}
		S = nextS; // Update S for the next stage

		// --- Visualization Log ---
		console.log(`\n--- End of Stage ${i + 1} (Device R=${reliability}) ---`);
		console.log(`Number of Pareto-optimal states found: ${S.size}`);
		// Log the actual content in a readable format
		const visualizedSet = Array.from(S.entries()).map(([cost, state]) => ({
			Cost: cost,
			Reliability: state.totalReliability.toFixed(4),
			Copies: `[${state.copiesHistory.join(',')}]`,
		}));
		console.table(visualizedSet);

		console.log('\n--- DP Process Complete ---');
	}

	// Find the final optimal solution (same as before)
	let maxReliability = 0.0;
	let optimalConfig: number[] | null = null;
	for (const state of S.values()) {
		if (state.totalReliability > maxReliability) {
			maxReliability = state.totalReliability;
			optimalConfig = state.copiesHistory;
		}
	}

	if (optimalConfig && maxReliability > 0) {
		return { maxReliability: maxReliability, optimalCopies: optimalConfig };
	} else {
		return null;
	}
}

// --- Example Usage ---
const devices: DeviceInfo[] = [
	{ reliability: 0.9, cost: 30 },
	{ reliability: 0.8, cost: 15 },
	{ reliability: 0.5, cost: 20 },
];
const budget = 145;

const result = solveReliabilityDesignWithConfig(devices, budget);

if (result) {
	console.log(`\nFinal Result:`);
	console.log(
		`Maximum system reliability within budget: ${result.maxReliability.toFixed(4)}`,
	);
	console.log(
		`Optimal device configuration (copies per stage): [${result.optimalCopies.join(', ')}]`,
	);
} else {
	console.log('No feasible solution found within the budget.');
}
