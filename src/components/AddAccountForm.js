import React, { useState, useEffect } from "react";
import axios from "axios";
import { AppBar } from "@mui/material";
import '../App.css';


export default function AddAcountForm(props) {

    const [Date, setDate] = useState('');
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState(0);
    const [Kind, setKind] = useState(0)
    const [Category, setCategory] = useState(1)


    // 플래너 모든 데이터 가져와서 schedules 변수에 저장
    const [schedules, setSchedules] = useState([]);
    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }
    const getSchedules = async () => {
        const json = await (await axios.get('/auth/planner/item', config));
        setSchedules(json.data);
    };
    useEffect(() => {
        getSchedules();
    }, []);
    console.log(schedules);

    // const selectList = schedules.map((item) => (title = item.title, key = item.plannerId))
    const selectList = schedules;
    console.log(selectList)

    const [Selected, setSelected] = useState('');

    const changeSelect = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };

    const clickSelect = (e) => {
        setSelected(e.target.value);
    }


    const onDateHandler = (e) => {
        // setDate(e.target.value)
        setDate((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16) + ':00'))
        console.log(e.target.value)
        console.log((e.target.value).substr(0, 10).concat(' ' + (e.target.value).substr(11.16)))
    }

    const onTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onPriceHandler = (e) => {
        setPrice(Number(e.target.value))
    }

    const onKindHandler = (e) => {
        setKind(Number(e.target.id))
    }

    const onCategoryHandler = (e) => {
        setCategory(Number(e.target.id))
    }

    const onAtSubmit = (e) => {
        // e.preventDefault();

        console.log(String(Date).substr(0, 7))
        let data = {
            itemDatetime: Date,
            itemKind: Kind,
            itemFirst: Category,
            itemTitle: Title,
            itemPrice: Price,
            plannerId: Selected
        }

        let config = {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'content-type': 'application/json;charset=UTF-8'
            }
        }

        axios.post('/auth/accounts/item', data, config)
            .then((result) => {
                console.log(result)
                alert('새로운 내역이 추가되었습니다.')
            })
            .catch(err => console.log(err))
    }


    return (
        <form onSubmit={onAtSubmit}>
            날짜 : <input type="datetime-local" style={{ width: 270 }} onChange={onDateHandler} /><br />
            내역 : <input type="text" style={{ width: 270 }} onChange={onTitleHandler} /><br />
            금액 : <input type="text" name="amount" style={{ width: 270 }} onChange={onPriceHandler} /><br />
            수입 <input type="radio" name="kind" id="0" onChange={onKindHandler} /> 지출 <input type="radio" name="kind" id="1" onChange={onKindHandler} /><br />
            분류 : <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" />Work
            <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" />Party
            <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="3" />Shopping
            <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="4" />Dining
            <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="5" />Trip<br />
            연관 플래너 일정 선택:
            <select onChange={changeSelect} onClick={clickSelect} value={Selected}>
                {selectList.map((item) => (
                    <option value={item.id} key={item.id}>
                        {item.title}
                    </option>
                ))}
            </select><br />
            <input type="submit" className="add-account-submit-btn" value="일정추가" />

        </form >
    )
}
