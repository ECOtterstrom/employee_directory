import Axios from "axios";

export default {
  getUsers: () => (Axios.get("https://randomuser.me/api/?results=20&nat=us"))
}