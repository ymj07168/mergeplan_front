import React, { useState, useEffect } from 'react'
import '../App.css';
import Schedule from '../components/Schedule';
import axios from "axios";

export default function Planner() {

    const [test, setTest] = useState('');

    useEffect(() => {
        axios.get('/test')
            .then(response => setTest(response.data))
            .catch(error => console.log(error))
    }, []);


    return (
        <>

            <div className='planner'>
                <Schedule />
                <button>일정 추가하기</button>
                <button>일정 삭제하기</button>
                <div>
                    백엔드에서 가져온 데이터입니다. : {test}
                </div>
            </div>
        </>
    );
}

