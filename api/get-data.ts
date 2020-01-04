import { NowRequest, NowResponse } from "@now/node";
import { makeEntries } from "./_utils/makeEntries";

export default (req: NowRequest, res: NowResponse) => {
  const singleSeries = makeEntries();

  res.json(singleSeries);
};
