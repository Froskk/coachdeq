import { NowRequest, NowResponse } from "@now/node";
import { makeEntries } from "./_utils/makeEntries";

const singleSeries = makeEntries();

export default (req: NowRequest, res: NowResponse) => {
  res.json({ singleSeries });
};
