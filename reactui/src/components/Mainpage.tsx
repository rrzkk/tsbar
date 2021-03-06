import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import services from '../api/server';




//const frontendurl=process.env.NODE_ENV==='production'?config.intUrlProd:config.intUrlDev;
const frontendurl = 'http://' + window.location.host + '/';
function testMock(code: number, setType: any, setModal: any) {

    if (code === 0) { setType('Connection Error') }
    else if (code > 399 && code < 500) { setType('Client side Error') }
    else if (code > 499 && code < 600) { setType('Server side Error') }
    else { setType('Unknown Error') }
    // alert('Your Error Type is : '+type+'/n'+'Your Error is : '+msg);
    setModal(true);

}
function copyURL(value:any) {
    navigator.clipboard.writeText(value)
}


//main function
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
    //responsive design
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
    const resStyle = {
        borderRadius: '25px',
        alignSelf: 'center'
    }
    const resStyle2 = {
        borderRadius: '0px',
        alignSelf: 'flex-start'
    }
    const urlRef = useRef<null|any>(null);
   

    return (

        <div className='container center' style={width > 575 ? resStyle : resStyle2}>
            <div className='row'>
                <div className='col-12 col-md-10 offset-md-1'>
                    <FormGroup>
                        <div className="headertext">
                            <Label for="secretinput" style={{ margin: 20 }} className="header"><b><h3>Your Secret</h3></b></Label>
                        </div>
                        <div className="maintext">
                            <Input type="textarea" id="secretinput" style={{ height: 200, maxHeight: 400, minHeight: 100 }} value={secret}
                                onChange={(evt) => { changeSecret(evt) }} />
                           
                         
                            {
                                !!guid &&
                                <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                                    <Label for="url"><b>URL:</b></Label>
                                    <Input type="text" readOnly id="url" style={{ marginLeft: "20px" }} value={`${frontendurl}secret/${guid}`} ref={urlRef} />
                                  
                                        <Button style={{ marginLeft: "20px" }} onClick={() => { main.copyURL(urlRef.current.props.value) }} color="primary"
                                        data-testid="copyBtn">COPY</Button>
                                    
                                </div>
                            }

                        </div>
                        <Button
                            onClick={() => { postSecret() }}
                            disabled={secret === ''}
                            className="float-right"
                            style={{ margin: 20 }}
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
const main = { Mainpage, testMock,copyURL }

export default main;