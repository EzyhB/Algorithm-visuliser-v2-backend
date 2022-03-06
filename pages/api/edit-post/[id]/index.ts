import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import query from "../../../../db";

export default async function handlePatch(
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
  const el = req.body;

  if (method === "PATCH") {
    const data = await query(
      "UPDATE blogposts SET blog_title = $1, blog_content = $2 WHERE id = $3 RETURNING *;",
      [el.blog_title, el.blog_content, id.toString()]
    );

    res.json({
      updated: data.rows,
      message: "edited post with the id of: " + id,
    });
  } else {
    res.status(500);
  }
}
