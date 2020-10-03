import axios, { AxiosResponse} from 'axios';
//export interface ISecret{
//    id:string
//}
import url from '../baseurl';
const backendurl=url.Backendurl;

export default { 
    postSecret(secret: string): Promise<AxiosResponse<string>> {
    
        return axios.request({
            
            
            url: backendurl+'api/trasfersecret2', 
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
                url:backendurl+'api/getsecret?guid='+url,
                method:"GET",
            }
        )
    }
};