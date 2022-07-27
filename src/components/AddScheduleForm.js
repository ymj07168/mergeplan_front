import React, { useState, useEffect } from 'react'
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { flexbox } from '@mui/system';

export default function AddScheduleForm() {


    // 일정 날짜 설정하기 -> datepicker, radio
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <>
            <form>
                {/* 일정 : <input type="text" placeholder='제목' style={{ width: 270 }} /><br />
                시작 : <input type="datetime-local" style={{ width: 270 }} /><br />
                종료 : <input type="datetime-local" style={{ width: 270 }} /><br />
                분류 : <input type="radio" name="Types" value="Work" />Work
                <input type="radio" name="Types" value="Party" />Party
                <input type="radio" name="Types" value="Shopping" />Shopping
                <input type="radio" name="Types" value="Dining" />Dining
                <input type="radio" name="Types" value="Trip" />Trip<br />
                장소 : <input type="text" style={{ width: 270 }} /><br />
                설명 : <textarea name="comment" style={{ width: 270 }}></textarea> */}


                <table className='add-table'>
                    <tr>
                        <td>일정</td>
                        <td colSpan={3}><input type="text" placeholder='제목' size="50" /></td>
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
                </table>
            </form>

        </>
    );

}