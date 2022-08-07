import { height } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function AddAcountForm(props) {

    const [Date, setDate] = useState('2022-08-07');
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState(0);
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
    const onCategoryHandler = (e) => {
        setCategory(e.target.id)
    }

    const onAtSubmit = (e) => {
        e.preventDefault();

        // let data = JSON.stringify({
        //     "itemDatetime": '2022-08-06T21:00:00',
        //     "itemPrice": 50000,
        //     "itemFirst": 1,
        //     "itemTitle": "용돈"
        // })

        let data = {
            itemDatetime: Date,
            itemTitle: Title,
            itemPrice: Price,
            itemFirst: Category,
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
            분류 : <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" />Work
            <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" />Party
            <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="3" />Shopping
            <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="4" />Dining
            <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="5" />Trip<br />
            <input type="submit" id="btn-add-schedule" value="일정추가" onChange={onCategoryHandler} />

        </form >
    )
}
