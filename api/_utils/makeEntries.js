import { intBetween } from "./intBetween";

export const makeEntries = () => {
  const [minReading, maxReading] = [intBetween(25, 50), intBetween(32, 71)];
  const entries = intBetween(5, 8);

  let total = 0;
  let data = Array(entries)
    .fill(0)
    .map((_, i) => {
      const reading = intBetween(minReading, maxReading);
      total += reading;

      return {
        x: i,
        reading,
        average: total / (i + 1)
      };
    });

  return data;
};
