import fs from 'fs'


interface singleJson {
    secret:string,
    guid:string
}

export default{
    //concat file1 and file2
    async jsonwrite(file1:singleJson[],file2:singleJson){
        const file3=JSON.stringify(  file1.concat(file2));
        fs.writeFile(__dirname +'/guiddata.json', file3,err=>{});
        
    },
    //get the json object with guid===guid
    async jsonread(guid:string){
        let rawdata = fs.readFileSync(__dirname +'/guiddata.json').toString();
        let jsondata = JSON.parse(rawdata);
        
    
       
        const result= jsondata.filter((el: singleJson)=>el.guid==guid);
        console.log(result[0].secret);
        return result[0].secret.toString();
      
    },
    //get the json array
    jsonreadall(){
        let rawdata = fs.readFileSync(__dirname +'/guiddata.json').toString();
        
        let jsondata = JSON.parse(rawdata);
        return jsondata;
    }
}