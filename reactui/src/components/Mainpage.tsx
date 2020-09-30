import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import services from '../api/server';
import { useHistory } from "react-router-dom";


function Mainpage() {
    const [secret,setSecret]=useState<string>('');
    const [res,setRes]=useState<string>('');
    let history = useHistory();

    function changeSecret(evt: React.ChangeEvent<HTMLInputElement>){
        setSecret(evt.target.value);
    }
    async function postSecret(){
        try {
            const response = await services.postSecret(secret);
            if (response.status==200) {
                setRes('http://localhost:8080/api/getsecret?guid='+response.data)
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;
            }
        } catch (error) {
            console.log('Post secret fail: ', error.message); 
        }
    }
    function handleClick(){
        history.push('/secret')
    }
    return (
        
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <FormGroup>
       
                        <Label for="secretinput" style={{margin:20}}>Your Secret</Label>
                        <Input type="textarea"  id="secretinput" style={{height:500,margin:20}} value={secret}
                        onChange={(evt)=>{changeSecret(evt)}}/>
                        
                        <a onClick={handleClick} data-testid="res" href="">{res}</a>
                        <Button style={{margin:20}} onClick={()=>{postSecret()}}>Submit Secret</Button>
                    </FormGroup>
                </div>
            </div>
        </div>
      
    );
}

export default Mainpage;