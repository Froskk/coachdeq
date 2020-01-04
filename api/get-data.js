import { NowRequest, NowResponse } from "@now/node";
import { makeEntries } from "./_utils/makeEntries";

const get = (req, res) => {
  const singleSeries = makeEntries();

  res.status(200).json({ singleSeries });
};

export default get(NowRequest, NowResponse);
