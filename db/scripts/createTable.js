"use strict";
exports.__esModule = true;
var __1 = require("..");
var createBlogPostTable = function () {
    return (0, __1["default"])("DROP TABLE IF EXISTS blogposts; CREATE TABLE IF NOT EXISTS blogposts (id serial PRIMARY KEY, blog_date timestamp default CURRENT_TIMESTAMP, blog_image TEXT, blog_author TEXT, blog_title TEXT, blog_content TEXT);");
};
createBlogPostTable();
// DATE NOT NULL DEFAULT CURRENT_DATE
// const createBlogCommentsTable = ()=>{
//     return query('CREATE TABLE IF NOT EXISTS blogcomments ()')
// }
