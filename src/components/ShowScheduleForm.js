import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ShowScheduleForm(props) {

    // 플래너 내역 전체 데이터 가져오기

    console.log("gg")
    console.log(props.pId)
    console.log('hh')

    const [id, setId] = useState("");
    const [title, setTitle] = useState('schedules[Number(pId.pId)].title');
    const [start, setStart] = useState('schedules[props.pId].start');
    const [end, setEnd] = useState('schedules[props.pId].end');
    const [description, setDescription] = useState('schedules[props.pId].description')
    const [category, setCategory] = useState('schedules[props.pId.itemFirstWord]')

    return (
        <form>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>일정</td>
                        <td colSpan={3}><input type="text" placeholder='제목' size="50" name="title" value={title} /></td>
                    </tr>
                    <tr>
                        <td>시작</td>
                        <td>
                            <input name="startDate" type="datetime-local" style={{ width: 165 }} value={start} />
                        </td>
                        <td> ~ 종료</td>
                        <td>
                            <input name="endDate" type="datetime-local" style={{ width: 165 }} value={end} />
                        </td>
                    </tr>
                    <tr>
                        <td>분류</td>
                        <td colSpan={3}>
                            <input type="radio" name="Types" value="Work" id="1" checked={Number(category) == 1} />Work
                            <input type="radio" name="Types" value="Party" id="2" checked={Number(category) == 2} />Party
                            <input type="radio" name="Types" value="Shopping" id="3" checked={Number(category) == 3} />Shopping
                            <input type="radio" name="Types" value="Dining" id="4" checked={Number(category) == 4} />Dining
                            <input type="radio" name="Types" value="Trip" id="5" checked={Number(category) == 5} />Trip<br />
                        </td>
                    </tr>
                    <tr>
                        <td>설명</td>
                        <td colSpan={3}><textarea rows="10" cols="50" name="comment" value={description} ></textarea></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}