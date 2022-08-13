import React, { useState, useEffect } from 'react'
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function AddScheduleForm(props) {

    const [title, setTitle] = useState("");

    // // 일정 날짜 설정하기 -> datepicker, radio
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const [description, setDescription] = useState("")
    const [category, setCategory] = useState(1)

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


    const onSdSubmit = (e) => {
        e.preventDefault();

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

        axios.post('/auth/planner/item', data, config)
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



    return (
        <>
            <form onSubmit={onSdSubmit}>
                <table className='add-table'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>일정</td>
                            <td colSpan={3}><input type="text" placeholder='제목' size="50" name="title" value={title} onChange={onTitleHandler} /></td>
                        </tr>
                        <tr>
                            <td>시작</td>
                            {/* <td><DatePicker
                                selected={startDate}
                                onChange={date => {
                                    setStartDate(date)
                                    onStartHandler(date)
                                }
                                }
                                timeInputLabel="Time: "
                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                showTimeInput
                                startDate={startDate}
                            /></td> */}
                            <td>
                                <input name="startDate" type="datetime-local" style={{ width: 165 }} onChange={onStartHandler} />
                            </td>
                            <td> ~ 종료</td>
                            {/* <td><DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                timeInputLabel="Time: "
                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                showTimeInput
                                startDate={startDate}
                                endDate={endDate}
                            /></td> */}
                            <td>
                                <input name="endDate" type="datetime-local" style={{ width: 165 }} onChange={onEndHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>분류</td>
                            <td colSpan={3}>
                                <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" />Work
                                <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" />Party
                                <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="3" />Shopping
                                <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="4" />Dining
                                <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="5" />Trip<br />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>장소</td>
                            <td colSpan={3}><input type="text" size="50" name="location" /></td>
                        </tr> */}
                        <tr>
                            <td>설명</td>
                            <td colSpan={3}><textarea rows="10" cols="50" name="comment" onChange={onDescirptionHandler}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" id="btn-add-schedule" value="일정추가" />
            </form>

        </>
    );

}