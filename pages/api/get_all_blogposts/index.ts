// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import query from "../../../db";

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;

  if (method === "GET") {
    const data = await query("SELECT * FROM blogposts");
    return res.json(data);
  }

  if (method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  res.status(200).json({ name: "John Doe" });
}
