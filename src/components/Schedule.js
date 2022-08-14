import { render } from "@testing-library/react";
import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";
import EditScheduleForm from "./EditScheduleForm";


function Schedule(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);

    // const myEventList = [
    //     {
    //         id: 2, start: new Date("2022-8-13 4:30:00"), end: new Date("2022-8-13 5:30:00"), title: "coffee"
    //     }
    // ];

    // const myEventList = props.plannerList;
    const myEventList = props.plannerList.map((schedule) => (
        {
            userId: schedule.userId,
            allDay: 0,
            start: new Date(schedule.start),
            end: new Date(schedule.end),
            title: schedule.title,
            category: schedule.category,
            description: schedule.description,
            itemFirstWord: schedule.itemFirstWord
        }
    ));

    // 일정 클릭시 셋팅 변수
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [category, setCategory] = useState(1);
    const [description, setDescription] = useState('');


    // 일정 이벤트 클릭 시 변수 셋팅
    const openModal = (e) => {
        setModalOpen(true);
        // console.log(e.id)
        // setId(e.id);
        setTitle(e.title);
        setCategory(e.category);
        setDescription(e.description);
        var s = e.start;
        var e = e.end;
        setStart(s.getFullYear() + '-' + String(s.getMonth() + 1).padStart(2, "0") + '-' + s.getDate() + 'T' + s.getHours() + ":" + String(s.getMinutes()).padStart(2, "0"));
        setEnd(e.getFullYear() + '-' + String(e.getMonth() + 1).padStart(2, "0") + '-' + e.getDate() + 'T' + e.getHours() + ":" + String(e.getMinutes()).padStart(2, "0"));
    }


    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
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
                onSelectEvent={openModal}
            />
            <Modal open={modalOpen} close={closeModal} header="일정 상세보기" >
                <EditScheduleForm
                    id={id}
                    title={title}
                    start={start}
                    end={end}
                    category={category}
                    description={description}
                />
            </Modal>
        </div>
    )
}

export default Schedule;

