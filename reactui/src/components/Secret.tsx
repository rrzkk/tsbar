import React, { useEffect, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import services from '../api/server';



interface Props {
    text: string
}
function testMock(code: number, setType: any, setModal: any) {

    if (code === 0) { setType('Connection Error') }
    else if (code > 399 && code < 500) { setType('Client side Error') }
    else if (code > 499 && code < 600) { setType('Server side Error') }
    else { setType('Unknown Error') }
    // alert('Your Error Type is : '+type+'/n'+'Your Error is : '+msg);
    setModal(true);

}

const Secret: React.FC<Props> = ({ text }) => {

    const [secret, setSecret] = useState('loading');
    //const [connectionErr, setConnectionErr] = useState<number>(0);
    const [err, setErr] = useState('');
    const [modal, setModal] = useState(false);
    const [type, setType] = useState<string>('Error');
    const [connectionErr, setConnectionErr] = useState<number>(0);

    const useMountEffect = (fun: any) => useEffect(fun, []);
    useMountEffect(() => {
        services.getSecret(text).then(res => {
            if (res.status === 200) {
                setSecret(res.data);
            }
            else {
                var error = new Error(res.statusText);
                //setConnectionErr(res.status);
                console.log(res.status);
                setConnectionErr(res.status);

                throw error;
            }

        }).catch(
            error => {
                setErr(error.message);
                testMock(connectionErr, setType, setModal);
            }
        );
    });
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
        alignSelf: 'flex-start',
        height:'80vh',
        paddingTop:'20vh'
    }
    return (
        <div className='container center' style={width>575?resStyle:resStyle2}>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <div className="headertext">
                        <h3>The secret message</h3>
                    </div>

                    <div className="maintext">
                        <div><b>GUID : </b>{text}</div>
                    </div>

                    <div className="maintext">
                        <div><b>Secret: </b>{secret}</div>
                    </div>
                </div>
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
    );
}

export { Secret }