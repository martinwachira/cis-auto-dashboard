import axios from "axios";

const API_URL = "http://localhost:8080/";
const CreateSubsService = {
  create: (login, password, startRange, endRange, offeringId, urlEndPoint) => {
    return axios.post(API_URL + "create-cis", {
      login,
      password,
      startRange,
      endRange,
      offeringId,
      urlEndPoint,
    });
  },
};

export default CreateSubsService;
