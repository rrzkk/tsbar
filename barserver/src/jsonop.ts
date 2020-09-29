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
    jsonread(guid:string){
        let rawdata = fs.readFileSync(__dirname +'/guiddata.json').toString();
        let jsondata = JSON.parse(rawdata);
        let result=jsondata.filter((el: singleJson)=>{el.guid=="testguid"});
        return result[0];
      
    },
    //get the json array
    jsonreadall(){
        let rawdata = fs.readFileSync(__dirname +'/guiddata.json').toString();
        let jsondata = JSON.parse(rawdata);
        return jsondata;
    }
}