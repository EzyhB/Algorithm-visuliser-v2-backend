export {};
import query from "..";

const createBlogPostTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS blogposts (id serial PRIMARY KEY, blog_date DATE NOT NULL DEFAULT CURRENT_DATE, blog_author TEXT, blog_title TEXT, blog_content TEXT);"
  );
};

createBlogPostTable();

// NOT NULL DEFAULT CURRENT_DATE

// const createBlogCommentsTable = ()=>{
//     return query('CREATE TABLE IF NOT EXISTS blogcomments ()')
// }
