import axios from "axios";
import { showAPI } from "constants/api";

const getShow = async (queryText) => {
  const response = await axios.get(`${showAPI.FETCHSHOW}&query=${queryText}`);
  return response.data.results.map((e) => e.id);
};

const getDetails = async (id) => {
  const response = await axios.get(`${showAPI.GETDETAILS}${id}${showAPI.APIKEY}`);
  return response;
};

const showServices = {
  getShow,
  getDetails,
};

export default showServices;
