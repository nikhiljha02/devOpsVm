import express from "express";
const app = express();
import fs from "fs";
import path from "path";

const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
 
  const html = fs.readFileSync(path.join(process.cwd()., "index.html"), "utf-8");
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
