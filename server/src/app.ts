import 'dotenv/config';
import express from "express";
import { characterRouter } from "./characters/character-router.ts";

const app = express();
const port = process.env.PORT || 3000;

app.use(characterRouter);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
