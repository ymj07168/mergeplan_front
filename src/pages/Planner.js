import React, { useState, useEffect } from 'react'
import '../App.css';
import Schedule from '../components/Schedule';
import Modal from '../components/Modal';
import axios from "axios";
import AddScheduleForm from '../components/AddScheduleForm';
import { isPlanner } from '../components/AccountItem';
import ShowScheduleForm from '../components/ShowScheduleForm';

export default function Planner() {

    // 가계부에서 pId 값 넘겨받기 isPlanner()
    console.log('플래너:넘겨받은 pId값 확인')
    console.log(isPlanner());
    const [pId, setPId] = useState(isPlanner())
    const [plannerOpen, setPlannerOpen] = useState(isPlanner());
    const closeSchedule = () => {
        setPlannerOpen(false);
        sessionStorage.setItem('pId', '');
        console.log('닫힌 후 pId 값 0 확인')
        console.log(isPlanner())
    }


    // 일정 추가하기 -> modal 창 생성
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    // 백엔드 test 데이터 가져와보기
    // const [test, setTest] = useState('');

    // useEffect(() => {
    //     axios.get('/test')
    //         .then(
    //             response => {
    //                 console.log(response)
    //                 setTest(response.data)
    //             }
    //         )
    //         .catch(error => console.log(error))
    // }, []);

    // 플래너 내역 전체 데이터 저장 변수
    const [schedules, setSchedules] = useState([]);

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    // 플래너 내역 전체 데이터 가져오기
    const getSchedules = async () => {
        const json = await (await axios.get('/auth/planner/item', config));
        setSchedules(json.data);
    };
    useEffect(() => {
        getSchedules();
    }, []);
    console.log(schedules);


    return (
        <>
            <div className='planner'>
                <Schedule plannerList={schedules} />

                <button className="planner-addbtn" onClick={openModal}>일정 추가하기</button>

                <Modal open={modalOpen} close={closeModal} header="일정 추가하기">
                    <AddScheduleForm />
                </Modal>
                <Modal open={plannerOpen} close={closeSchedule} header="일정 상세보기">
                    <ShowScheduleForm
                        pId={plannerOpen}
                    />
                </Modal>
            </div>
        </>
    );
}

