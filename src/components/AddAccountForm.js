import React, { useState } from "react";
import axios from "axios";


export default function AddAcountForm(props) {

    const [Date, setDate] = useState('2022-08-06');
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState(0);
    const [Kind, setKind] = useState(0)
    const [Category, setCategory] = useState(1)


    const onDateHandler = (e) => {
        setDate(e.target.value)
    }

    const onTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onPriceHandler = (e) => {
        setPrice(e.target.value)
    }

    const onKindHandler = (e) => {
        setKind(e.target.id)
    }

    const onCategoryHandler = (e) => {
        setCategory(e.target.id)
    }

    const onAtSubmit = (e) => {
        e.preventDefault();


        // let data = JSON.stringify({
        //     "itemDatetime": '2022-08-07T20:00:00',
        //     "itemPrice": 20000,
        //     "itemFirst": 5,
        //     "itemTitle": "치킨"
        // })

        let data = {
            itemDatetime: Date,
            itemTitle: Title,
            itemPrice: Price,
            itemKind: Kind,
            itemFirst: Category
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
                console.log(Category)
                alert('새로운 내역이 추가되었습니다.')
            })
            .catch(err => console.log(err))
    }


    return (
        <form onSubmit={onAtSubmit}>
            날짜 : <input type="datetime-local" style={{ width: 270 }} onChange={onDateHandler} /><br />
            내역 : <input type="text" style={{ width: 270 }} onChange={onTitleHandler} /><br />
            금액 : <input type="text" name="amount" style={{ width: 270 }} onChange={onPriceHandler} /><br />
            수입 <input type="radio" name="kind" value="income" onChange={onKindHandler} /> 지출 <input type="radio" name="kind" value="express" onChange={onKindHandler} /><br />
            분류 : <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" />Work
            <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" />Party
            <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="4" />Shopping
            <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="5" />Dining
            <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="6" />Trip<br />
            <input type="submit" id="btn-add-schedule" value="일정추가" />

        </form >
    )
}
