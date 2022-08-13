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


    // const myEventList = [
    //     {
    //         id: 1, start: new Date(), end: new Date(), title: "special event"
    //     },
    //     {
    //         id: 2, start: new Date("2022-8-13 4:30:00"), end: new Date("2022-8-13 5:30:00"), title: "coffee"
    //     }
    // ];

    console.log(new Date(2022, 7, 13, 5, 30))
    console.log(new Date("2022-8-13 5:30"))
    // // const myEventList = props.plannerList;

    const myEventList = props.plannerList.map((schedule) => (
        {
            userId: schedule.userId,
            allDay: 0,
            // start: new Date(Number((schedule.start).substr(0, 4)), Number((schedule.start).substr(6, 7)), Number((schedule.start).substr(8, 10)), Number((schedule.start).substr(11, 13)), Number((schedule.start).substr(14, 16))),
            // end: new Date(Number((schedule.end).substr(0, 4)), Number((schedule.end).substr(6, 7)), Number((schedule.end).substr(8, 10)), Number((schedule.end).substr(11, 13)), Number((schedule.end).substr(14, 16))),
            start: new Date(schedule.start),
            end: new Date(schedule.end),
            title: schedule.title,
            category: schedule.category,
            description: schedule.description,
            itemFirstWord: schedule.itemFirstWord
        }
    ));

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
        setStart(String(e.start));
        setEnd(String(e.end));
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

