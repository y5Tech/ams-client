import axios from "axios"
import {ApplicationUtils} from "../utils";

const baseUrl = ApplicationUtils.getEnvironmentVariable("API")
const defaultHeader = {
    "Content-Type": "application/json"
}
const request = {
    /*  headers: {
          Authorization: 'Bearer ' + varToken
      }*/
    get: (url: string, headers?: any) => {
        return axios({
            method: "get",
            url: baseUrl + url,
            headers: headers ? {...defaultHeader, ...headers} : defaultHeader
        })
    },

    post: (url: string, data: object, headers?: any) => {
        return axios({
            method: "post",
            url: baseUrl + url,
            data,
            headers: headers ? {...defaultHeader, ...headers} : defaultHeader
        })
    },
    put: () => {

    },
    delete: () => {

    }
}
export default request