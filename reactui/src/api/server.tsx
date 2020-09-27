import axios, { AxiosResponse} from 'axios';

export default { 
    postSecret(secret: string): Promise<AxiosResponse<string>> {
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