// Change Points of View
// Algebra problem

// define the point in space and return the coordinate
const point = (a, b) => {
  // define the points as an array
  // your code
  const pointReturn = () => {
    // console.log(`Inside pointReturn: `+ [a, b]);
    // console.log(x);
    // console.log(y);
    return [a, b];
  };
  return pointReturn;
};
// define function to extraxt x-coordinate of point
const fst = (pt) => {
  // extract x from point array
  // your code
  // console.log(`fst ptArray: ` + pt[0])
  return pt()[0];
};
// define function to extraxt y-coordinate of point
const snd = (pt) => {
  // extraxt y from point array
  // your code
  // console.log(`snd ptArray: ` + ptArray[1])
  return pt()[1];
};
// define function to compute the square of the distance between two points
const sqrDist = (pt1, pt2) => {
  // (x2-x1)^2 + (y2-y1)^2
  // your code
  return ((pt2()[0] - pt1()[0])**2) + ((pt2()[1] - pt1()[1])**2)
};
// define function to return the coefficients of a general equation for a line
// through the two points
const line = (pt1, pt2) => {
  // slope = (y-y1)/(x-x1) = (y2-y1)/(x2-x1)
  // y = mx+b in this case my = lx + n
  //  your code
  //  solve for each coefficient seperately and return as array
  let l = -(pt2()[1] - pt1()[1]);
  let m = (pt2()[0] - pt1()[0]);
  // console.log(l/m);
  let n = -l*pt1()[0] - m*pt1()[1];
  return [l, m, n];
};

let foo = point(20, 22);
let bar = point(29, 10);
console.log(sqrDist(point(22, 55), point(75, 66))) // -> 2930
//  line(point(20, 22), point(29, 10)) -> [12, 9, -438] ([4, 3, -146] is a good answer too)
// console.log(fst(foo)=== 20);
// console.log(snd(foo)=== 22);
console.log(fst(foo));
console.log(snd(foo));
console.log(typeof(foo));
console.log(line(foo, bar));
