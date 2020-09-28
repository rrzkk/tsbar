import axios, { AxiosResponse} from 'axios';
export interface ISecret{
    id:string
}

export default  { 
    postSecret(secret: string): Promise<AxiosResponse<ISecret>> {
        return axios.request({
            url: 'http://localhost:8080/api/postsecret', 
            method: "POST",
            data: { data: JSON.stringify(secret) },
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};