import { makeEntries } from "./_utils/makeEntries";

module.exports = (req, res) => {
  const singleSeries = makeEntries();

  res.status(200).json(singleSeries);
};
