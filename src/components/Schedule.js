import { render } from "@testing-library/react";
import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";


function Schedule(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);


    const myEventList = [
        {
            id: 1, start: new Date(), end: new Date(), title: "special event"
        },
        {
            id: 2, start: new Date(2022, 7, 13, 4, 30), end: new Date(2022, 7, 13, 5, 30), title: "coffee"
        }
    ];

    start: "2022-10-8 11:30:44"
    console.log(new Date())
    // const myEventList = props.plannerList;

    // const myEventList = props.plannerList.map((schedule) => (
    //     setTitle(schedule.title),
    //     setStart(schedule.startTime),
    //     setEnd(schedule.endTime)
    // ));

    // 일정 클릭시 셋팅 변수
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');


    const handleSelectEvent = (e) => {
        console.log(e.start)
        console.log(e.place)
        console.log(e.description)
        setModalOpen(true);
        setTitle(e.title);
        setStart(e.start);
        setEnd(e.end);
        setCategory(e.itemFirstWord);
        setDescription(e.description);
        // var s = e.start;
        // var e = e.end;
        // setStart(s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate() + ' ' + s.getHours() + ":" + s.getMinutes() + ":" + s.getSeconds());
        // setEnd(e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate() + ' ' + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds());
    }

    // Calendar.momentLocalizer(moment);
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                onSelectEvent={handleSelectEvent}
            />
            <Modal open={modalOpen} close={closeModal} header="일정 추가하기" >
                일정: {title}<br />
                시작: {start}<br />
                끝: {end}<br />
                설명: {description}<br />
                분류: {category}

            </Modal>
        </div>
    )
}

export default Schedule;

