import http from "axios";
import { API_ROOT } from "../constants";

const getOptions = (datatype = null) => {
  let options = {};
  let token = localStorage.getItem("token");
  if (token) {
    options = {
      ...options,
      headers: {
        authorization: token,
        "Content-Type": datatype,
      },
    };
  }

  return options;
};

const respose = (res) => res.data;

const request = {
  get: (url) => http.get(`${API_ROOT}${url}`, getOptions()).then(respose),
  post: (url, data) =>
    http
      .post(`${API_ROOT}${url}`, data, getOptions("application/json"))
      .then(respose),
  put: (url, data) =>
    http.put(`${API_ROOT}${url}`, data, getOptions()).then(respose),
  delete: (url) => http.delete(`${API_ROOT}${url}`, getOptions()).then(respose),
};

const BorrowerService = {
  login: (data) => request.post("/borrower/login", data),
  checkLogin: () => request.get("/borrower/check"),
  signup: (data) => request.post("/borrower", data),
};

const EnquiryService = {
  create: (data) => request.post("/enquiry", data),
};

const ProfileService = {
  create: (data) => request.post("/profile", data),
};

const LoanApplicationService = {
  list: () => request.get("/loanApplication"),
  applyloan: (data) => request.post("/loanApplication", data),
  feedback: (data) => request.post("/feedbackdetails", data),
};

export {
  request,
  BorrowerService,
  EnquiryService,
  ProfileService,
  LoanApplicationService,
};
