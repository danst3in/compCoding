// leetcode
/*

Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.


Constraints:

1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4

 */

/**
 * @param {number[]} prices
 * @return {number}
 */

// solution with storage object (peaks and valleys)
var maxProfit = function (prices) {
  let idx = 0;
  // count of buy/sell pairs
  let count = 0;
  //storage of buy/sell pairs
  let sales = {};
  let totalProfit = 0;

  while (idx < prices.length - 1) {
    // Find local minima. limit is length - 2 because we are comparing against next element
    // and final element is length-1
    // Price of next element should be smaller than current element
    // Is price tomorrow less than price today?
    while (idx < prices.length - 1 && prices[idx + 1] <= prices[idx]) {
      idx++;
    }
    // Exit while loop when price tomorrow no longer less than price today
    // Price goes up tomorrow, so buy today!

    // if we have reached the end there are no further solutons possible. break out of the loop
    // don't buy stock on the last day!
    if (idx === prices.length - 1) break;

    // otherwise store the index of local minima as index for today's price;
    sales[count] = {};
    // console.log("idx before buy: ", idx);
    sales[count].buy = idx++;
    // console.log("sales[count].buy: ", sales[count].buy);

    // find local maxima. Limit is length - 1 since comparing to the previous element.
    //   // Price of today's element should be greater than previous element
    // Is price today greater than price yesterday?
    while (idx < prices.length && prices[idx] >= prices[idx - 1]) {
      idx++;
    }
    // Exit while loop when price today no longer greater than price yesterday
    // Price goes up today, so sell yesterday!

    //store index of local maxima
    sales[count].sell = idx - 1;
    // console.log("sales[count.sell]: ", sales[count].sell);

    // increment count of buy/sell pairs
    count++;
  }
  // console.log("sales: ", sales);
  // if array sorted in decreasing order, can't make any money!@
  if (count === 0) {
    return 0;
  }
  for (let i = 0; i < count; i++) {
    totalProfit += prices[sales[i].sell] - prices[sales[i].buy];
    // console.log("totalProfit: ", totalProfit);
  }
  return totalProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// solution with peaks and valleys no storage
var maxProfit = function (prices) {
  let idx = 0;
  // price at local maxima
  let peak = prices[0];
  // price at local minima
  let valley = prices[0];
  let totalProfit = 0;

  while (idx < prices.length - 1) {
    // Find local minima. limit is length - 2 because we are comparing against next element
    // and final element is length-1
    // Price of next element should be smaller than current element
    // Is price tomorrow less than price today?
    while (idx < prices.length - 1 && prices[idx + 1] <= prices[idx]) {
      idx++;
    }
    // Exit while loop when price tomorrow no longer less than price today
    // Price goes up tomorrow, so buy today!

    // if we have reached the end there are no further solutons possible. break out of the loop
    // don't buy stock on the last day!
    // if (idx === prices.length - 1) break;

    // store today's price as local minima to buy;
    valley = prices[idx];
    // console.log("valley, buy, minima: ", valley);

    // find local maxima. Limit is length - 1 since comparing to the previous element.
    //   // Price of today's element should be greater than previous element
    // Is price today less than price tomorrow?
    while (idx < prices.length && prices[idx] <= prices[idx + 1]) {
      idx++;
    }
    // Exit while loop when price tomorrow no longer greater than price today
    // Price goes up tomorrow, so sell today!

    // store today's price as local minima to buy;
    peak = prices[idx];
    // console.log("peak, sell, maxima: ", peak);

    // if array sorted in decreasing order, can't make any money!@

    totalProfit += peak - valley;
    // console.log("totalProfit: ", totalProfit);
  }

  return totalProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// solution with running sum of differences, no storage of buy/sell dates
var maxProfit = function (prices) {
  let totalProfit = 0;
  // iterate thru the array
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > prices[i - 1]) {
      // if the price today is greater than yesterday's price
      //add the difference between today and yesterday to the running sum
      totalProfit += prices[i] - prices[i - 1];
      // console.log("totalProfit: ", totalProfit);
    }
  }

  return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
