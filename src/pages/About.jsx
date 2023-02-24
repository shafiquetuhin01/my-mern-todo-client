import React, { useState } from 'react';
import Draft from '../draftComp/Draft';

const About = () => {
    const [address, setAddress] = useState({
        village:"Kharera",
        post:"Kharera",
        ps:"Kasba",
        dist:"B.Baria",
        mob:"01678042832",
        name:"Mohammad Shafiqul Islam"
    })
    const [simple, setSimple] = useState(['Arir','Raju','Alamgir','Kabir','Ratan'])
    
    return (
        <div className='text-center text-4xl mt-6'>
            <h2 className='font-bold text-5xl'>This is about me page</h2>
            <Draft simples={simple} addr={address}/>
        </div>
    );
};

export default About;