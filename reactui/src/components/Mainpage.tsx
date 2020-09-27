import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';


function Mainpage() {
    const [secret,setSecret]=useState<string>('');

    function changeSecret(evt: React.ChangeEvent<HTMLInputElement>){
        setSecret(evt.target.value);
    }
    async function postSecret(){
        try {
            const response = await fetch('api/postsecret', {
                method: "POST",
                body: JSON.stringify(secret),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
            });
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;
            }
        } catch (error) {
            console.log('post secret fail', error.message); 
            
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
                        <Button style={{margin:20}} onClick={()=>{postSecret()}}>Submit Secret</Button>
                    </FormGroup>
                </div>
            </div>
        </div>
      
    );
}

export default Mainpage;