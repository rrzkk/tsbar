import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { ok } from 'assert';
import services from '../api/server';


function Mainpage() {
    const [secret,setSecret]=useState<string>('');
    const [res,setRes]=useState<string>('');

    function changeSecret(evt: React.ChangeEvent<HTMLInputElement>){
        setSecret(evt.target.value);
    }
    async function postSecret(){
        try {
            const response = await services.postSecret(secret);
            if (response.status==200) {
                setRes(JSON.stringify(response.data))
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;
            }
        } catch (error) {
            console.log('Post secret fail: ', error.message); 
        }
    }
    return (
        
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <FormGroup>
                        <Label for="secretinput" style={{margin:20}}>Your Secret</Label>
                        <Input type="textarea"  id="secretinput" style={{height:500,margin:20}} value={secret}
                        onChange={(evt)=>{changeSecret(evt)}}/>
                        <div data-testid="res">
                            {res}
                        </div>
                        <Button style={{margin:20}} onClick={()=>{postSecret()}}>Submit Secret</Button>
                    </FormGroup>
                </div>
            </div>
        </div>
      
    );
}

export default Mainpage;