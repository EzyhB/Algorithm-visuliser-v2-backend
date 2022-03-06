import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../../../db";
import NextCors from "nextjs-cors";

export default async function deleteReq(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;
  const { id } = req.query;

  if (method === "DELETE") {
    await query("DELETE FROM blogposts WHERE id = $1;", [id.toString()]);
    res.json({
      message: "post deleted with the id of: " + id,
      status: 200,
    });
  } else {
    res.status(500);
  }
}
