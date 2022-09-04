import axios from "axios";

export const verifyJsonData = (url: string) => {
    return axios.get(`${url}`).then((data) => data.data);
};
