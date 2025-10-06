import { Router } from "express";
import { CharacterService } from "./character-services.ts";
import { HttpStatusCode } from "axios";

const characterRouter = Router();

const characterService = new CharacterService();

characterRouter.get("/characters/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    res.status(HttpStatusCode.BadRequest).send({ message: "Invalid Id, must be a string" });
  }

  const response = await characterService.getCharacterById(Number(id)).catch((error) => {
    if (error.response) {
      console.log(`Error: characterService.getCharacterById ${error.response.status} ${error.response.data}`);
      res.status(404).send(`The character with ID ${id} is not found`);
    }
  });

  if (!response) {
    return;
  }

  if (!response.data) {
    res.sendStatus(500);
    return;
  }

  res.send(response.data);
});

characterRouter.get("/characters", async (req, res) => {
  const response = await characterService.getCharacters().catch((error) => {
    if (error.response) {
      console.log(`Error: characterService.getCharacters ${error.response.status} ${error.response.data}`);
      res.status(500).send({ message: "Somethings wrong, please try again later" });
    }
  });

  if (!response) {
    return;
  }

  if (!response.data) {
    res.status(500).send({ message: "Somethings wrong, please try again later" });
    return;
  }

  res.send(response.data);
});

export { characterRouter };
