import axios from "axios";
const URI = "http://localhost:8080/api/v1/question/"

export const Services = {
    save : function (data) {
        return axios.post(URI + "add", data);
    },
    list : function () {
        return axios.get(URI + "list");
    }
}

