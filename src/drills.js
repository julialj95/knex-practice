require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

function searchForTerm(searchTerm) {
  knexInstance
    .select("name", "price", "date_added", "checked", "category")
    .from("shopping_list")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then((result) => {
      console.log(result);
    });
}

searchForTerm("facon");

function productsByPage(pageNumber) {
  const productsPerPage = 6;
  const offset = productsPerPage * (pageNumber - 1);
  knexInstance
    .select("id", "name", "price", "date_added", "checked", "category")
    .from("shopping_list")
    .limit(productsPerPage)
    .offset(offset)
    .then((result) => {
      console.log(result);
    });
}

productsByPage(3);

function itemsAfterDate(days) {
  knexInstance
    .select("id", "name", "date_added", "checked", "category")
    .from("shopping_list")
    .where(
      "date_added",
      ">",
      knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
    )
    .then((result) => {
      console.log(result);
    });
}

itemsAfterDate(6);

function costByCategory() {
  knexInstance
    .select("category")
    .from("shopping_list")
    .groupBy("category")
    .sum("price AS total")
    .then((result) => {
      console.log(result);
    });
}

costByCategory();
