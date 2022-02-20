export {};
//SELECT TO_CHAR(NOW() :: DATE, 'dd/mm/yyyy');
import query from "..";

import data from "./dummydata";

const populateBlogTable = async () => {
  data.forEach(async (el) => {
    const data = await query(
      "INSERT INTO blogposts (blog_author, blog_title, blog_content) VALUES ($1, $2, $3)",
      [el.blog_author, el.blog_title, el.blog_content]
    );
    return data.rows;
  });
};

populateBlogTable();
