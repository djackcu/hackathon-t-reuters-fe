import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3005" + "/employers/";

export function getEmployers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveEmployer(employer) {
  return fetch(baseUrl + (employer.id + "/" || "new-employer/"), {
    method: employer.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(employer)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteEmployer(employerId) {
  return fetch(baseUrl + employerId + "/", { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
