export {};
import query from "..";

const createBlogPostTable = () => {
  return query(
    "DROP TABLE IF EXISTS blogposts; CREATE TABLE IF NOT EXISTS blogposts (id serial PRIMARY KEY, blog_date timestamp default CURRENT_TIMESTAMP, blog_image TEXT, blog_author TEXT, blog_title TEXT, blog_content TEXT, user_auth TEXT);"
  );
};

createBlogPostTable();

// DATE NOT NULL DEFAULT CURRENT_DATE

// const createBlogCommentsTable = ()=>{
//     return query('CREATE TABLE IF NOT EXISTS blogcomments ()')
// }
