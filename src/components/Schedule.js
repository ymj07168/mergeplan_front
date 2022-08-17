import { render } from "@testing-library/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
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
            plannerId: schedule.id,
            userId: schedule.userId,
            allDay: 0,
            start: new Date(schedule.start),
            end: new Date(schedule.end),
            title: schedule.title,
            category: schedule.category,
            description: schedule.description,
            itemFirstWord: schedule.itemFirstWord,
            createDate: schedule.createDate,
            accountsItemPs: schedule.accountsItemPs.map((item) => ({
                id: item.id,
                userId: item.userId,
                itemTitle: item.itemTitle,
                plannerId: item.plannerId
            }))
            // accountsItemPs: schedule.accountsItemPs
        }
    ));

    console.log("myEvent")
    console.log(myEventList)

    // 일정 클릭시 셋팅 변수
    const [plannerId, setPlannerId] = useState('');
    const [uId, setUId] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [category, setCategory] = useState(1);
    const [description, setDescription] = useState('');
    const [cDate, setCDate] = useState('');
    const [accountItem, setAccountItem] = useState([]);


    // 일정 이벤트 클릭 시 변수 셋팅
    const openModal = (e) => {
        setModalOpen(true);
        setPlannerId(e.plannerId);
        setUId(e.userId)
        setTitle(e.title);
        setCategory(e.category);
        setDescription(e.description);
        var start = e.start;
        var end = e.end;
        setStart(start.getFullYear() + '-' + String(start.getMonth() + 1).padStart(2, "0") + '-' + start.getDate() + 'T' + start.getHours() + ":" + String(start.getMinutes()).padStart(2, "0"));
        setEnd(end.getFullYear() + '-' + String(end.getMonth() + 1).padStart(2, "0") + '-' + end.getDate() + 'T' + end.getHours() + ":" + String(end.getMinutes()).padStart(2, "0"));
        setCDate(end.createDate);

        setAccountItem(e.accountsItemPs)
        // setAccountItem((e.accountsItemPs).map((item) => ({
        //     id: item.id,
        //     userId: item.userId,
        //     itemTitle: item.itemTitle,
        //     plannerId: item.plannerId
        // })))

        console.log("ㅋ")
        console.log(e.accountsItemPs)
        console.log("ㅁ")
        console.log(accountItem)
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
                    plannerId={plannerId}
                    uId={uId}
                    title={title}
                    start={start.substr(0, 10).concat(' ' + start.substr(11, 16)) + ':00'}
                    end={end.substr(0, 10).concat(' ' + end.substr(11, 16)) + ':00'}
                    category={category}
                    description={description}
                    cDate={cDate}
                    accountsItemPs={accountItem}
                />
            </Modal>
        </div>
    )
}

export default Schedule;

