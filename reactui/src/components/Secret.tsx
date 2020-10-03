import React, { useEffect,useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import services from '../api/server';



interface Props {
    text: string
}

const Secret: React.FC<Props> = ({ text }) => {

    const [secret, setSecret] = useState('loading');

    const useMountEffect = (fun: any) => useEffect(fun, []);
    useMountEffect(() => {

        services.getSecret('http://localhost:8080/api/getsecret?guid=' + text).then(res => {
            setSecret(res.data);
        });
    });
    return (
        <div className='container center'>
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
            </div>
        </div>
    );
}

export { Secret }