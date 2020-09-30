import axios, { AxiosResponse} from 'axios';
//export interface ISecret{
//    id:string
//}

export default { 
    postSecret(secret: string): Promise<AxiosResponse<string>> {
        return axios.request({
            url: 'http://localhost:8080/api/trasfersecret2', 
            method: "POST",
            data: { data: JSON.stringify(secret) },
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    getSecret(url:string):Promise<AxiosResponse<string>>{
        return axios.request(
            {
                url:url,
                method:"GET",
            }
        )
    }
};