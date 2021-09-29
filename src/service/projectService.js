import axios from "axios";

export default class ProjectService {
  static async projects() {
    return await axios("./projects.json");
  }
}
