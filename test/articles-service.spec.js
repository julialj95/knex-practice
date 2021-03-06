// const { expect } = require("chai");

// const articlesService = require("../src/articles-service.js");
// const knex = require("knex");

// describe("articles services object", function () {
//   let db;
//   let testArticles = [
//     {
//       id: 1,
//       date_published: new Date("2029-01-22T16:28:32.615Z"),
//       title: "First test post!",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
//     },
//     {
//       id: 2,
//       date_published: new Date("2100-05-22T16:28:32.615Z"),
//       title: "Second test post!",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
//     },
//     {
//       id: 3,
//       date_published: new Date("1919-12-22T16:28:32.615Z"),
//       title: "Third test post!",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
//     },
//   ];

//   before(() => {
//     db = knex({
//       client: "pg",
//       connection: process.env.TEST_DB_URL,
//     });
//   });
//   before(() => db("blogful_articles").truncate());
//   afterEach(() => db("blogful_articles").truncate());
//   after(() => db.destroy());

//   context(`Given 'blogful_articles' has data`, () => {
//     beforeEach(() => {
//       return db.into("blogful_articles").insert(testArticles);
//     });
//     it(`getAllArticles() resolves all articles from 'blogful_articles' table`, () => {
//       return articlesService.getAllArticles(db).then((actual) => {
//         expect(actual).to.eql(testArticles);
//       });
//     });
//   });
//   context("Given 'blogful_articles' has no data", () => {
//     it(`getAllArticles() resolves an empty array`, () => {
//       return articlesService.getAllArticles(db).then((actual) => {
//         expect(actual).to.eql([]);
//       });
//     });
//   });

//   it(`insertArticle() inserts a new article and resolves the new article with an 'id'`, () => {
//     const newArticle = {
//       title: "Test new title",
//       content: "Test new content",
//       date_published: new Date("2020-01-01T00:00:00.000Z"),
//     };
//     return articlesService.insertArticle(db, newArticle).then((actual) => {
//       expect(actual).to.eql({
//         id: 1,
//         title: newArticle.title,
//         content: newArticle.content,
//         date_published: newArticle.date_published,
//       });
//     });
//   });

//   it(`getById() resolves an article by id from 'blogful_articles' table`, () => {
//     const thirdId = 3;
//     const thirdTestArticle = testArticles[thirdId - 1];
//     return articlesService.getById(db, thirdId).then((actual) => {
//       expect(actual).to.eql({
//         id: thirdId,
//         title: thirdTestArticle.title,
//         content: thirdTestArticle.content,
//         date_published: thirdTestArticle.date_published,
//       });
//     });
//   });

//   it(`deleteArticle() removes an article by id from 'blogful_articles' table`, () => {
//     const articleId = 3;
//     return articlesService
//       .deleteArticle(db, articleId)
//       .then(() => articlesService.getAllArticles(db))
//       .then((allArticles) => {
//         // copy the test articles array without the "deleted" article
//         const expected = testArticles.filter(
//           (article) => article.id !== articleId
//         );
//         expect(allArticles).to.eql(expected);
//       });
//   });
// });
