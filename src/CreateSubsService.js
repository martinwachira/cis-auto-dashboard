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
    endPoint,
    numWorkers
  ) => {
    console.log("axios data:", {
      login,
      password,
      startRange: parseInt(startRange),
      endRange: parseInt(endRange),
      offeringId: parseInt(offeringId),
      BillCycleType: parseInt(BillCycleType),
      numWorkers: parseInt(numWorkers) || 50, // default fallback
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
      numWorkers: parseInt(numWorkers) || 50,
      endPoint,
    });
  },

  // fetch logs (text view)
  getLogs: (fileName) => {
    return axios.get(API_URL + "logs", {
      params: { file: fileName },
      responseType: "text",
    });
  },

  // download logs as a file
  downloadLogs: async (fileName) => {
    const response = await axios.get(API_URL + "logs/download", {
      params: { file: fileName },
      responseType: "blob", // return file as binary
    });

    // Create a link element to trigger download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // force download with original name
    document.body.appendChild(link);
    link.click();
    link.remove();
  },
};

export default CreateSubsService;
