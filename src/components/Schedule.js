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
        { start: new Date(), end: new Date(), title: "special event" }
    ];

    const [title, setTitle] = useState('');


    const handleSelectEvent = (e) => {
        console.log(e.start)
        setModalOpen(true);
        setTitle(e.title);

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
                // onSelectEvent={event =>
                //     alert(event.title)}
                onSelectEvent={handleSelectEvent}
            />
            <Modal open={modalOpen} close={closeModal} header="일정 추가하기" >
                일정: {title}

            </Modal>
        </div>
    )
}

export default Schedule;

