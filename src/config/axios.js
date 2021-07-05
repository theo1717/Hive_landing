import Axios from "axios";

var host = "https://hivetech.com.br";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  host = "http://localhost:8080";
}
export default Axios.create({
  baseURL: host
});
