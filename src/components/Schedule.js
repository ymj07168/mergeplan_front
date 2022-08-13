import { render } from "@testing-library/react";
import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal";
import axios from "axios";


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

    console.log(new Date(2022, 7, 13, 5, 30))
    console.log(new Date("2022-8-13 5:30"))
    // // const myEventList = props.plannerList;

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
    const [pId, setPId] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [category, setCategory] = useState(1);
    const [description, setDescription] = useState('');

    const onTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onStartHandler = (e) => {
        setStart((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
        // setStart(e.target.value)
        console.log(new Date(e.target.value))
        console.log(new Date(2022, 5, 2, 3, 4, 0))
        console.log((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
    }

    const onEndHandler = (e) => {
        setEnd((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
        // setEnd(e.target.value)
    }

    const onDescirptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const onCategoryHandler = (e) => {
        setCategory(Number(e.target.id))
    }

    // 일정 이벤트 클릭 시 변수 셋팅
    const handleSelectEvent = (e) => {
        setModalOpen(true);
        // console.log(e.id)
        // setPId(e.id);
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


    // 일정 수정 버튼
    const onEditSchedule = (e) => {
        let data = {
            allday: 0,
            title: title,
            start: start,
            end: end,
            description: description,
            category: category,
        }

        let config = {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'content-type': 'application/json;charset=UTF-8'
            }
        }

        axios.patch(`/auth/accounts/item/${pId}`, data, config)
            .then((result) => {
                console.log(result)
                alert('내역이 수정되었습니다.')
            })
            .catch(err => console.log(err))
    }

    // 일정 삭제 버튼
    const onDelSchedule = (e) => {
        axios.delete(`/auth/planner/item/${pId}`, config)
            .then((result) => {
                alert('삭제 성공')
                console.log(pId)
                window.location.reload();
            })
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
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>일정</td>
                            <td colSpan={3}><input type="text" placeholder='제목' size="50" name="title" value={title} onChange={onTitleHandler} /></td>
                        </tr>
                        <tr>
                            <td>시작</td>
                            <td>
                                <input name="startDate" type="datetime-local" style={{ width: 165 }} value={start} onChange={onStartHandler} />
                            </td>
                            <td> ~ 종료</td>
                            <td>
                                <input name="endDate" type="datetime-local" style={{ width: 165 }} value={end} onChange={onEndHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>분류</td>
                            <td colSpan={3}>
                                <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" checked={Number(category) == 1} />Work
                                <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" checked={Number(category) == 2} />Party
                                <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="3" checked={Number(category) == 3} />Shopping
                                <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="4" checked={Number(category) == 4} />Dining
                                <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="5" checked={Number(category) == 5} />Trip<br />
                            </td>
                        </tr>
                        <tr>
                            <td>설명</td>
                            <td colSpan={3}><textarea rows="10" cols="50" name="comment" value={description} onChange={onDescirptionHandler}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <input type="button" value="수정" onClick={onEditSchedule} />
                <input type="button" value="삭제" onClick={onDelSchedule} />
            </Modal>
        </div>
    )
}

export default Schedule;

