import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";


dotenv.config();


const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

//function
async function checkItems() {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC ");
 // console.log(result.rows)
  items = result.rows;
  return items;
}




app.get("/", async(req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: await checkItems(),
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  console.log(item)
  const result = await db.query("INSERT INTO items (title) VALUES ($1) ",[item] );
  //items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
const editItemId = req.body.updatedItemId;
const editItemTitle = req.body.updatedItemTitle;
console.log(editItemId , editItemTitle);
const result = await db.query("UPDATE items SET title = $1  WHERE id = $2",[editItemTitle , editItemId] );
res.redirect("/");
});

app.post("/delete", async(req, res) => {

const deleteItem = req.body.deleteItemId;
console.log(deleteItem);
const result = await db.query("DELETE  FROM items WHERE id = $1",[deleteItem] );
res.redirect("/");

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
