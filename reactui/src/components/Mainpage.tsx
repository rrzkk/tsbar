import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import services from '../api/server';
import { useHistory } from "react-router-dom";


function Mainpage() {
    const [secret, setSecret] = useState<string>('');
    const [res, setRes] = useState<string>('');
    const [guid, setGuid] = useState<string>('');
    const [btnDis,setBtnDis]=useState<boolean>(false);

    let history = useHistory();


    function changeSecret(evt: React.ChangeEvent<HTMLInputElement>) {
        setSecret(evt.target.value);
    }
    async function postSecret() {
        try {
            const response = await services.postSecret(secret);
            if (response.status === 200) {
                setRes('http://localhost:8080/api/getsecret?guid=' + response.data);
                setGuid(response.data)
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;
            }
        } catch (error) {
            console.log('Post secret fail: ', error.message);
        }
    }

//    function handleClick() {
//             //history.push(`/secret/${guid}`)
//             history.push(`/secret/${guid}`)
//     }
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <FormGroup>

                        <Label for="secretinput" style={{ margin: 20 }}>Your Secret</Label>
                        <Input type="textarea" id="secretinput" style={{ height: 500, margin: 20 }} value={secret}
                            onChange={(evt) => { changeSecret(evt) }} />
                            <div  >
                            {!!guid && <a data-testid="res" href={`http://localhost:3000/secret/${guid}`}>http://localhost:3000/secret/{guid}</a>}
                            </div>
                        
                        <Button style={{ margin: 20 }} 
                        onClick={() => { postSecret() }}
                        disabled={secret===''}
                        >
                            Submit Secret
                            </Button>
                    </FormGroup>
                </div>
            </div>
        </div>

    );
}

export default Mainpage;