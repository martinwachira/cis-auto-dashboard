import axios from "axios";

const API_URL = "http://localhost:8080/";
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
