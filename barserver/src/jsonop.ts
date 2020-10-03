import fs from 'fs';
import path from 'path';


interface singleJson {
    secret:string,
    guid:string
}

export default{
    // concat file1 and file2
    jsonwrite(file1:singleJson[],file2:singleJson){
        const file3=JSON.stringify(  file1.concat(file2));
       console.log("write");
        fs.writeFileSync(path.join(__dirname ,'guiddata.json'), file3);
        

    },
    // get the json object with guid===guid
    async jsonread(guid:string){
        
        const jsondata = this.jsonreadall();



        const result= jsondata.filter((el: singleJson)=>el.guid===guid);
        if(result.length!==0){
        return result[0].secret.toString();
        }
        else return 'The secret is already burnt!';
    },
    // get the json array
    jsonreadall(){
        let rawdata
        if(fs.existsSync(path.join(__dirname ,'guiddata.json'))){
        rawdata = fs.readFileSync(path.join(__dirname ,'guiddata.json')).toString();
        }
        else{
            fs.writeFileSync(path.join(__dirname ,'guiddata.json'), '[]');
            rawdata='[]'
        }
        const jsondata = JSON.parse(rawdata);
        return jsondata;
    },
    // delete json object with guid= guid
     jsondelete(guid:string){
        const alljson=this.jsonreadall();
        
        const result=alljson.filter((el:singleJson)=>el.guid!==guid);
        const resultstring= JSON.stringify(result);
      
        fs.writeFileSync(path.join(__dirname ,'guiddata.json'),resultstring);
  
    }
}