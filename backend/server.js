import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";


const app = express();
const port = 5000;
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/menus',async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM menus');
        res.json(result.rows);
    } catch (error) {
        console.log("error");
        res.status(400).json({error:'server error'});
    }
});

app.get('/menu/:id/items', async (req, res) => {
    console.log("Request params:", req.params.id);
    const { id } = req.params;
    console.log("ID from params:", id);
  
    if (!id) {
      return res.status(400).json({ error: 'Invalid menu ID' });
    }
  
    try {
      const result = await db.query("SELECT * FROM items WHERE menu_id = $1", [id]);
      res.json(result.rows);
      console.log("rows are : ",result.rows);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

app.listen(port, () => {
    console.log(`Listening to port is http://localhost:${port}`);
})
