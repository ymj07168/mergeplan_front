import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const isAccount = () => {
    return sessionStorage.getItem('aId')
}

export default function EditScheduleForm(props) {

    const [plannerId, setPId] = useState(props.plannerId);
    const [uId, setUId] = useState(props.uId);
    const [title, setTitle] = useState(props.title);
    const [start, setStart] = useState(props.start);
    const [end, setEnd] = useState(props.end);
    const [description, setDescription] = useState(props.description);
    const [category, setCategory] = useState(props.category);
    const [cDate, setCDate] = useState(props.cDate);
    const [accountItem, setAccountItem] = useState(props.accountsItemPs);

    // console.log(props.uId)
    // console.log(props.title)
    console.log(props.accountsItemPs)
    const onTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onStartHandler = (e) => {
        console.log(e.target.value)
        setStart((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
        // setStart(e.target.value)
        console.log((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
    }

    const onEndHandler = (e) => {
        setEnd((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
        console.log((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
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
        e.preventDefault();
        let data = {
            userId: uId,
            allday: 0,
            start: start,
            end: end,
            title: title,
            description: description,
            createDate: cDate,
            itemFirst: category,
        }


        axios.patch(`/auth/planner/item/${plannerId}`, data, config)
            .then((result) => {
                console.log(result)
                alert('내역이 수정되었습니다.')
            })
            .catch(err => console.log(err))
    }

    // 일정 삭제 버튼
    const onDelSchedule = (e) => {
        axios.delete(`/auth/planner/item/${plannerId}`, config)
            .then((result) => {
                alert('삭제 성공')
                window.location.reload();
            })
    }

    const selectList = accountItem;
    const [Selected, setSelected] = useState(' ');

    const onChangeSelect = (e) => {
        setSelected(e.target.value);
    };

    const onClickSelect = (e) => {
        setSelected(e.target.value);
    }

    // 연관 가계부 내역 보기
    const onShowAccount = (e) => {
        sessionStorage.setItem('aId', Selected);
    }

    return (
        <form onSubmit={onEditSchedule}>
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
            연관 가계부 내역:
            <select onChange={onChangeSelect} onClick={onClickSelect} value={Selected}>
                {accountItem && accountItem.length > 0 ? (accountItem.map((item) => (
                    <option value={item.id} key={item.id}>
                        {item.itemDatetime} {item.itemTitle}
                    </option>
                ))) : null}
            </select>
            <Link to='/account'><input type="button" onClick={onShowAccount} value="보기" /></Link><br />
            <input type="submit" value="수정" />
            <input type="button" value="삭제" onClick={onDelSchedule} />
        </form >
    )
}