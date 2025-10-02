import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const CreateSubsService = {
  create: (
    login,
    password,
    startRange,
    endRange,
    offeringId,
    BillCycleType,
    // numWorkers,
    endPoint
  ) => {
    // Log the form data
    console.log("axios data:", {
      login,
      password,
      startRange: parseInt(startRange),
      endRange: parseInt(endRange),
      offeringId: parseInt(offeringId),
      BillCycleType: parseInt(BillCycleType),
      // numWorkers: parseInt(numWorkers) || 50, // fallback default
      endPoint,
    });
    console.log("api url", API_URL);

    return axios.post(API_URL + "create-cis", {
      login,
      password,
      startRange: parseInt(startRange),
      endRange: parseInt(endRange),
      offeringId: parseInt(offeringId),
      BillCycleType: parseInt(BillCycleType),
      // numWorkers: parseInt(numWorkers) || 50, // fallback default
      endPoint,
    });
  },
  // fetch logs
  getLogs: (fileName) => {
    console.log(fileName);

    return axios.get(API_URL + "logs", {
      params: { file: fileName },
      responseType: "text", // because logs are plain text
    });
  },
};

export default CreateSubsService;
