import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ShowScheduleForm(props) {

    // 플래너 해당 아이디 데이터 가져오기
    console.log("gg")
    console.log(props.pId)
    console.log('hh')

    const [id, setId] = useState(props.pId);
    const [scheduleItem, setScheduleItem] = useState('');

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    const getScheduleItem = async () => {
        const json = await (await axios.get(`/auth/planner/item/${id}`, config));
        setScheduleItem(json.data);
    };
    useEffect(() => {
        getScheduleItem();
    }, []);

    console.log(scheduleItem.title)
    console.log(scheduleItem.start)
    console.log(scheduleItem.end)
    console.log(scheduleItem.description)
    console.log(scheduleItem.category)


    return (
        < form >
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>일정</td>
                        <td colSpan={3}><input type="text" placeholder='제목' size="50" name="title" value={scheduleItem.title} /></td>
                    </tr>
                    <tr>
                        <td>시작</td>
                        <td>
                            <input name="startDate" type="datetime-local" style={{ width: 165 }} value={scheduleItem.start} />
                        </td>
                        <td> ~ 종료</td>
                        <td>
                            <input name="endDate" type="datetime-local" style={{ width: 165 }} value={scheduleItem.end} />
                        </td>
                    </tr>
                    <tr>
                        <td>분류</td>
                        <td colSpan={3}>
                            <input type="radio" name="Types" value="Work" id="1" checked={Number(scheduleItem.category) == 1} />Work
                            <input type="radio" name="Types" value="Party" id="2" checked={Number(scheduleItem.category) == 2} />Party
                            <input type="radio" name="Types" value="Shopping" id="3" checked={Number(scheduleItem.category) == 3} />Shopping
                            <input type="radio" name="Types" value="Dining" id="4" checked={Number(scheduleItem.category) == 4} />Dining
                            <input type="radio" name="Types" value="Trip" id="5" checked={Number(scheduleItem.category) == 5} />Trip<br />
                        </td>
                    </tr>
                    <tr>
                        <td>설명</td>
                        <td colSpan={3}><textarea rows="10" cols="50" name="comment" value={scheduleItem.description} ></textarea></td>
                    </tr>
                </tbody>
            </table>
        </form >
    )
}