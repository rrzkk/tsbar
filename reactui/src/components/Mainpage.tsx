import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import services from '../api/server';
import url from '../baseurl'

//const frontendurl = url.Frontendurl;
import config from '../configuration.json'
const frontendurl=process.env.NODE_ENV==='production'?config.intUrlProd:config.intUrlDev;

function testMock(code: number, setType: any, setModal: any) {

    if (code === 0) { setType('Connection Error') }
    else if (code > 399 && code < 500) { setType('Client side Error') }
    else if (code > 499 && code < 600) { setType('Server side Error') }
    else { setType('Unknown Error') }
    // alert('Your Error Type is : '+type+'/n'+'Your Error is : '+msg);
    setModal(true);

}

function Mainpage() {
    const [secret, setSecret] = useState<string>('');
    const [guid, setGuid] = useState<string>('');
    const [connectionErr, setConnectionErr] = useState<number>(0);
    //err type
    const [type, setType] = useState<string>('');
    const [modal, setModal] = useState(false);
    const [err, setErr] = useState('');




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
                var error = new Error(response.statusText);
                setConnectionErr(response.status);
                throw error;
            }
        } catch (error) {

            setErr(error.message);
            main.testMock(connectionErr, setType, setModal);

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
                            <Input type="textarea" id="secretinput" style={{ height: 200, maxHeight: 400, minHeight: 100 }} value={secret}
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

                    <Modal toggle={() => { setModal(false) }} isOpen={modal}>
                        <ModalHeader data-testid='err'>
                            Something seems wrong...
                        </ModalHeader>
                        <ModalBody>
                            <p>This is a {type}, </p>
                            <p>Maybe this would help: </p>
                            <p>{err}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={() => { setModal(false) }}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>

    );
}
const main = { Mainpage, testMock }

export default main;