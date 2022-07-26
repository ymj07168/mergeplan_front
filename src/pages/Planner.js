import React, { useState, useEffect } from 'react'
import '../App.css';
import Schedule from '../components/Schedule';
import Modal from '../components/Modal';
import axios from "axios";

export default function Planner() {

    // 일정 등록하기 -> modal 창 생성
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    // 백엔드 test 데이터 가져와보기
    const [test, setTest] = useState('');

    useEffect(() => {
        axios.get('/test?name="hyo"')
            .then(response => setTest(response.data))
            .catch(error => console.log(error))
    }, []);



    return (
        <>
            <div className='planner'>
                <Schedule />
                <button onClick={openModal}>일정 추가하기</button>
                <Modal open={modalOpen} close={closeModal} header="Modal heading">
                    <form>
                        <input type="text"></input>

                    </form>
                </Modal>
                <div>
                    백엔드에서 가져온 데이터입니다. : {test}
                </div>
            </div>
        </>
    );
}

