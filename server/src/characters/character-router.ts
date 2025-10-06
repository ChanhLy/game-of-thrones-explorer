import { Router } from "express";
import { CharacterService } from "./character-services.ts";
import { HttpStatusCode } from "axios";

const characterRouter = Router();

const characterService = new CharacterService();

characterRouter.get("/characters/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    res.sendStatus(HttpStatusCode.BadRequest);
  }

  const response = await characterService.getCharacterById(Number(id)).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      // this also stop the controller so we don't need to return
      res.status(error.response.status).send(error.response.data);
    }
  });

  if (!response?.data) {
    res.sendStatus(500);
    return;
  }
  res.send(response.data);
});

characterRouter.get("/characters", async (req, res) => {
  const response = await characterService.getCharacters();

  if (!response.data) {
    res.sendStatus(500);
  }
  res.send(response.data);
});

export { characterRouter };
