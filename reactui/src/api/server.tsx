import axios, { AxiosResponse} from 'axios';
//export interface ISecret{
//    id:string
//}
import url from '../baseurl';
import config from '../configuration.json'
const backendurl=process.env.NODE_ENV==='production'?config.exUrlProd:config.exUrlDev;
const frontendurl=process.env.NODE_ENV==='production'?config.intUrlProd:config.intUrlDev;

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