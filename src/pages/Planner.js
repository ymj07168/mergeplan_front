import React, { useState, useEffect } from 'react'
import '../App.css';
import Schedule from '../components/Schedule';

export default function Planner() {

    const [test, setTest] = useState([]);
    const getTest = async () => {
        const json = await (
            await fetch(`http://localhost:3306/test`)
        ).json();
        setTest(json.data.test);
    };
    useEffect(() => {
        getTest();
    }, []);
    console.log(test);

    return (
        <>
            <Schedule />
            {/* <div>
                < h1 className='planner' >planner</h1 >
                <p>
                    이 페이지는 플래너 페이지입니다.
                    planner
                </p>
            </div> */}
        </>
    );
}

