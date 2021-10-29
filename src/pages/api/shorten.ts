import { NextApiRequest, NextApiResponse } from "next";
import { setUrl } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;
  const short = await setUrl(url);

  res.status(200).json({ url, short });
}
