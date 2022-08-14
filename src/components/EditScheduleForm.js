import React, { useState } from "react";
import axios from "axios";

export default function EditScheduleForm(props) {

    const [id, setId] = useState("");
    const [title, setTitle] = useState(props.title);
    const [start, setStart] = useState(props.start);
    const [end, setEnd] = useState(props.end);
    const [description, setDescription] = useState(props.description)
    const [category, setCategory] = useState(props.category)

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


        axios.patch(`/auth/accounts/item/${id}`, data, config)
            .then((result) => {
                console.log(result)
                alert('내역이 수정되었습니다.')
            })
            .catch(err => console.log(err))
    }

    // 일정 삭제 버튼
    const onDelSchedule = (e) => {
        axios.delete(`/auth/planner/item/${id}`, config)
            .then((result) => {
                alert('삭제 성공')
                console.log(id)
                window.location.reload();
            })
    }

    return (
        <form>
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
        </form>
    )
}