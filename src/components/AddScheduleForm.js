import React, { useState, useEffect } from 'react'
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function AddScheduleForm(props) {

    const [title, setTitle] = useState("");

    const onSdHandler = (e) => {
        setTitle(e.target.value);
    }
    const onSdSubmit = (e) => {
        e.preventDefault();

        let data = JSON.stringify({
            "allday": 0,
            "title": "",
            "description": "설명"
        })

        let config = {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'content-type': 'application/json;charset=UTF-8'
            }
        }

        axios.post('/auth/planner', data, config)
            .then((result) => {
                console.log(result)
                alert('새로운 일정이 추가되었습니다.')

            })
            .catch(err => console.log(err))


        // if (res.payload.loginSuccess) {
        //     props.history.push('/')
        // } else {
        //     alert("Error")
        // }

    }

    // 일정 날짜 설정하기 -> datepicker, radio
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



    return (
        <>
            <form onSubmit={onSdSubmit}>
                <table className='add-table'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>일정</td>
                            <td colSpan={3}><input type="text" placeholder='제목' size="50" name="title" value={title} onChange={onSdHandler} /></td>
                        </tr>
                        <tr>
                            <td>시작</td>
                            <td><DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                timeInputLabel="Time:"
                                dateFormat="MM/dd/yyyy h:mm aa"
                                showTimeInput
                                startDate={startDate}
                            /></td>
                            <td> ~ 종료</td>
                            <td><DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                timeInputLabel="Time: "
                                dateFormat="MM/dd/yyyy h:mm aa"
                                showTimeInput
                                startDate={startDate}
                                endDate={endDate}
                            /></td>
                        </tr>
                        <tr>
                            <td>분류</td>
                            <td colSpan={3}>
                                <input type="radio" name="Types" value="Work" />Work
                                <input type="radio" name="Types" value="Party" />Party
                                <input type="radio" name="Types" value="Shopping" />Shopping
                                <input type="radio" name="Types" value="Dining" />Dining
                                <input type="radio" name="Types" value="Trip" />Trip
                            </td>
                        </tr>
                        <tr>
                            <td>장소</td>
                            <td colSpan={3}><input type="text" size="50" name="location" /></td>
                        </tr>
                        <tr>
                            <td>설명</td>
                            <td colSpan={3}><textarea rows="10" cols="50" name="comment"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" id="btn-add-schedule" value="일정추가" />
            </form>

        </>
    );

}