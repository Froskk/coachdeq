import { NowRequest, NowResponse } from "@now/node";
import { makeEntries } from "./_utils/makeEntries";
import microCors from "micro-cors";
const cors = microCors({ allowMethods: ["PUT", "POST"] });

const singleSeries = makeEntries();

// export default (req: NowRequest, res: NowResponse) => {
//   res.status(200).json({ singleSeries });
// };

// const { json, send } = require("micro");

const series = async (req: NowRequest, res: NowResponse) =>
  await res.status(200).json({ singleSeries });
const handler = cors(series);
export default handler;
