// Podcast Speed Listening Calculator
// If you have ever listened to an audiobook or podcast, you may have had the
// option to change the play speed of the audio. This allows you to increase or
// decrease the speed that you listen to your content.
// I want you to calculate the time it takes to listen to the audio when the play
// speed is varied. The time should be rounded down to whole seconds.

// audioLength /* a string of the total time of the audio, "hh:mm:ss" */
// playSpeed /* a float between 0.5 and 3.0, only to 1 decimal point */

// speedListen is a function that accepts two paramaters
// a length of time, and a playspeed multiplier
// speedListen:: (timeString, number) --> time

function speedListen(audioLength, playSpeed) {
  // define variables to extract numbers from time string
  let hours = +`${audioLength[0]}${audioLength[1]}`
  let minutes = +`${audioLength[3]}${audioLength[4]}`
  let seconds = +`${audioLength[6]}${audioLength[7]}`

  // declare variables to perform time calculation and rounding

  const totalSeconds = seconds + (60*minutes) + (3600*hours);
  const calcSeconds = totalSeconds / playSpeed
  const hoursCalc = (Math.floor(calcSeconds / 3600) < 10) ? `0${Math.floor(calcSeconds / 3600)}`: Math.floor(calcSeconds / 3600)
  const minutesCalc = (Math.floor((Math.floor(calcSeconds % 3600)) / 60) < 10) ? `0${Math.floor((Math.floor(calcSeconds % 3600)) / 60)}`: Math.floor((Math.floor(calcSeconds % 3600)) / 60)
  const secondsCalc = (Math.floor((Math.floor(calcSeconds % 3600)) % 60) < 10) ? `0${Math.floor((Math.floor(calcSeconds % 3600)) % 60)}`: Math.floor((Math.floor(calcSeconds % 3600)) % 60)

  // define variable newAudioLength to hold new calculated value
  let newAudioLength = `${hoursCalc}:${minutesCalc}:${secondsCalc}`;

  // return newAudioLength
  return newAudioLength;

}
// The results of calculations on the time units are expected to be truncated/floored

console.log(speedListen("00:00:55", 2)) //=> "00:00:27" // NOT "00:00:28"

// speedListen("01:20:00", 1.5) //=> "00:53:20"
