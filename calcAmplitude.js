const temparatures1 = [3, -2, -6, -1, "error", 9, 13, 15, 14, 9, 5];
const temparatures2 = [5, 7, -4, -6, 3, 7, "error", 12, 25, 9, "error", 8];

const calcAmplitude = (temps1, temps2) => {
  let mergedTemps = temps1.concat(temps2);
  let minTemp = mergedTemps[0];
  let maxTemp = mergedTemps[0];
  for (let i = 0; i < mergedTemps.length; i++) {
    if (mergedTemps[i] === "error") continue;
    if (mergedTemps[i] > maxTemp) maxTemp = mergedTemps[i];
    if (mergedTemps[i] < minTemp) minTemp = mergedTemps[i];
  }
  return maxTemp - minTemp;
};
let result = calcAmplitude(temparatures1, temparatures2);
console.log(result);
