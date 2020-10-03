import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import services from '../api/server';
import url from '../baseurl'

const frontendurl=url.Frontendurl;

export function testMock(){

}

function Mainpage() {
    const [secret, setSecret] = useState<string>('');
    const [guid, setGuid] = useState<string>('');


  

    function changeSecret(evt: React.ChangeEvent<HTMLInputElement>) {
        setSecret(evt.target.value);
    }
    async function postSecret() {
        try {
            const response = await services.postSecret(secret);
            if (response.status === 200) {

                setGuid(response.data)
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;
            }
        } catch (error) {
            console.log('Post secret fail: ', error.message);
            testMock();
            alert(error.message);
        }
    }


    return (
        
        <div className='container center'>
            <div className='row'>
                <div className='col-8 col-md-10 offset-md-1'>
                    <FormGroup>
                        <div className="headertext">
                            <Label for="secretinput" style={{ margin: 20 }} className="header"><b><h3>Your Secret</h3></b></Label>
                        </div>
                        <div className="maintext">
                            <Input type="textarea" id="secretinput" style={{height:200,maxHeight:400,minHeight:100}} value={secret}
                                onChange={(evt) => { changeSecret(evt) }} />
                            <div  >
                                {!!guid && <a data-testid="res" href={`${frontendurl}secret/${guid}`}>{frontendurl}secret/{guid}</a>}
                            </div>
                        </div>
                        <Button 
                            onClick={() => { postSecret() }}
                            disabled={secret === ''}
                            className="float-right"
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