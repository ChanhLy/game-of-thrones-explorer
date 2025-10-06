import axios from "axios";

export class CharacterService {
  getCharacterById(id: number) {
    return axios.get(`${process.env.GAME_OF_THRONE_API_URL}/Characters/${id}`);
  }

  getCharacters() {
    return axios.get(`${process.env.GAME_OF_THRONE_API_URL}/Characters`);
  }
}
