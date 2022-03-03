import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import query from "../../../db";

export default async function newPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;
  const el = req.body;

  if (method === "POST") {
    const data = await query(
      "INSERT INTO blogposts (blog_author, blog_title, blog_content) VALUES ($1, $2, $3);",
      [el.blog_author, el.blog_title, el.blog_content]
    );

    res.json(data.rows);
  } else {
    res.status(500);
  }
}
