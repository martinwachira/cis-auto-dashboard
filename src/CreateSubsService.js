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
      endPoint,
    });
  },
};

export default CreateSubsService;
