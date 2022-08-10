import React, { useState } from "react";
import axios from "axios";


export default function EditAcountForm(props) {

    console.log(props.title);
    const [Date, setDate] = useState(props.iDate);
    const [Title, setTitle] = useState(props.title);
    const [Price, setPrice] = useState(props.price);
    const [Kind, setKind] = useState(props.kind)
    const [Category, setCategory] = useState(props.category)


    const onDateHandler = (e) => {
        setDate(e.target.value)
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

    const onAtEditSubmit = (e) => {

        let data = {
            itemDatetime: Date,
            itemKind: Kind,
            itemFirst: Category,
            itemTitle: Title,
            itemPrice: Price
        }

        let config = {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'content-type': 'application/json;charset=UTF-8'
            }
        }

        axios.patch('/auth/accounts/item', data, config)
            .then((result) => {
                console.log(result)
                alert('내역이 수정되었습니다.')
            })
            .catch(err => console.log(err))
    }


    return (
        <form onSubmit={onAtEditSubmit}>
            날짜 : <input type="datetime-local" style={{ width: 270 }} value={Date} onChange={onDateHandler} /><br />
            내역 : <input type="text" style={{ width: 270 }} value={Title} onChange={onTitleHandler} /><br />
            금액 : <input type="text" name="amount" style={{ width: 270 }} value={Price} onChange={onPriceHandler} /><br />
            수입 <input type="radio" name="kind" id="0" onChange={onKindHandler} /> 지출 <input type="radio" name="kind" id="1" onChange={onKindHandler} /><br />
            분류 : <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" />Work
            <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" />Party
            <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="3" />Shopping
            <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="4" />Dining
            <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="5" />Trip<br />
            <input type="submit" id="btn-add-schedule" value="일정추가" />

        </form >
    )
}