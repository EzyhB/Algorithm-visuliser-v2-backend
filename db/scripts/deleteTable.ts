import query from "..";

export {};
const deleteBlogPostTable = () => {
  return query("DROP TABLE IF EXISTS blogposts;");
};

deleteBlogPostTable();
