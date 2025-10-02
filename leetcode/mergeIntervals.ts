/* 56. Merge Intervals
Medium

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104 */

function merge(intervals: number[][]): number[][] {
	// sort intervals by starting number
	const sortedIntervals: number[][] = intervals.sort((a, b) => a[0] - b[0]);

	// iterate through arrays and compare start index of 1st interval to start index of next interval and repeat for end indexes
	const finalArr: number[][] = sortedIntervals.reduce((acc, curr, i) => {
		if (acc.length == 0) {
			acc.push(curr);
			return acc;
		}
		let workingIdx = acc.length - 1;
		let newInterval: number[] = [];

		if (
			acc[workingIdx][0] <= curr[0] &&
			curr[0] <= acc[workingIdx][1] &&
			curr[1] <= acc[workingIdx][1]
		) {
			return acc;
		} else if (
			acc[workingIdx][0] <= curr[0] &&
			curr[0] <= acc[workingIdx][1] &&
			acc[workingIdx][1] <= curr[1]
		) {
			newInterval = [acc[workingIdx][0], curr[1]];
			let tempEarlyIntervals = acc.splice(0, workingIdx);
			tempEarlyIntervals.push(newInterval);
			let tempLateIntervals = acc.splice(workingIdx + 1);
			acc = tempEarlyIntervals.concat(tempLateIntervals);
		} else {
			acc.push(curr);
		}

		return acc;
	}, [] as number[][]);
	return finalArr;
}
