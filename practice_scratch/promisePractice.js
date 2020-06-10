// Promise Practice
// try writing a function success(n) that returns a promise that resolves to the string 'complete' in n seconds
//
/*
async function success(n) {
  let complete = await Promise.resolve("complete").catch((err) =>
    console.error(err)
  );
  let timer = setTimeout(() => console.log(complete), n * 1000);

  return timer;
}
success(3);
*/

/*
async function success2(n) {
  let timer = setTimeout(() => console.log("complete"), n * 1000);

  return timer;
}
success2(3).then((res) => res);
*/

/*
function pro(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`complete after ${n} seconds`), n * 1000);
  });
}
console.log(pro(2).then((res) => console.log(res)));
*/

/*
const success3 = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("complete");
    }, n * 1000);
  });
};
console.log(success3(5).then((res) => console.log(res)));
*/

// Promise version with try and catch statements
/*
function timeout(ms) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve("complete"), ms * 1000);
    } catch (e) {
      reject(e);
    }
  });
}
timeout(5).then((res) => console.log(res));
*/

// Promise.resolve version
/*
function timeoutPR(ms) {
  let complete = Promise.resolve("complete").catch((err) => console.error(err));
  // console.log('complete.then' , complete.then.toString());
  setTimeout(() => complete.then((res) => console.log(res)), ms * 1000);
  return complete;
}
timeoutPR(5);
*/

// fresh try next day
/*
const promiseFunc = (n) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve("complete"), n * 1000);
    } catch (err) {
      reject(err);
    }
  });
};
promiseFunc(5).then((res) => console.log(res));
*/

// Promise Practice
// try writing a function success(n) that returns a promise that resolves to the string 'complete' in n seconds
//
// Fresh try 2 months later

const successP = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), n * 1000);
    // throw new Error("error");
    // reject("errerrrr");
  });
};
successP(2)
  .then((m) => console.log(m))
  .catch((e) => console.warn("e:", e));
