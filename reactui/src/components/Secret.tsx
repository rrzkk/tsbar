import React, { useEffect, useReducer, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import services from '../api/server';



interface Props {
    text: string
}

const Secret: React.FC<Props> = ({ text }) => {

    const [secret, setSecret] = useState('loading');
    const useMountEffect = (fun: any) => useEffect(fun, [])
    //let secret='loading';
    useMountEffect(() => {
        console.log('run once')
        services.getSecret('http://localhost:8080/api/getsecret?guid=' + text).then(res => {
            //secret=res.data
            setSecret(res.data);
        });
    });

    console.log("text =", text);
    // useEffect(()=>{
    //     console.log('run once')
    //     services.getSecret('http://localhost:8080/api/getsecret?guid=' + text).then(res=>{
    //         //secret=res.data
    //         setSecret(res.data);
    //     });
    // },[]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <h1>The secret</h1>
                    <div>{text}</div>
                    <div>{secret}</div>
                </div>
            </div>
        </div>
    );
}

export { Secret }