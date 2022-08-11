import { render } from "@testing-library/react";
import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";


function Schedule() {

    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);

    const myEventList = [
        {
            start: new Date(), end: new Date(), title: "special event"
        }
    ];

    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');


    const handleSelectEvent = (e) => {
        console.log(e.start)
        setModalOpen(true);
        setTitle(e.title);
        var s = e.start;
        var e = e.end;
        setStart(s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate() + ' ' + s.getHours() + ":" + s.getMinutes() + ":" + s.getSeconds());
        setEnd(e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate() + ' ' + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds());
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

            </Modal>
        </div>
    )
}

export default Schedule;

