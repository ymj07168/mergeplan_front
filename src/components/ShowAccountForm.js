import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ShowAccountForm(props) {

    // 플래너 해당 아이디 데이터 가져오기
    console.log("gg")
    console.log(props.aId)
    console.log('hh')

    const [id, setId] = useState(props.aId);
    const [accountItem, setAccountItem] = useState([]);
    console.log("헬로월드")
    console.log(props.accountItem);

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    const getAccountItem = async () => {
        const json = await (await axios.get(`/auth/accounts/item/${id}`, config));
        setAccountItem(json.data);
    };
    useEffect(() => {
        getAccountItem();
    }, []);


    // const accountItem = props.accountList.filter(item => item.id == id);
    // console.log(accountItem.id)
    // console.log(accountItem.itemTitle)
    // console.log(accountItem.itemDatetime)
    // const [Date, setDate] = useState(accountItem.itemDatetime); // props.iDate(itemDatetime)
    // const [Title, setTitle] = useState(accountItem.itemTitle);
    // const [Price, setPrice] = useState(accountItem.itemPrice);
    // const [Kind, setKind] = useState(accountItem.itemKind)
    // const [Category, setCategory] = useState(accountItem.itemFirst)


    return (
        <form >
            날짜 : <input type="datetime-local" style={{ width: 270 }} value={accountItem.itemDatetime} /><br />
            내역 : <input type="text" style={{ width: 270 }} value={accountItem.itemTitle} /><br />
            금액 : <input type="text" name="amount" style={{ width: 270 }} value={accountItem[0].itemPrice} /><br />
            수입 <input type="radio" name="kind" id="0" checked={Number(accountItem.itemKind) == 0} /> 지출 <input type="radio" name="kind" id="1" checked={Number(accountItem.itemKind) == 1} /><br />
            분류 : <input type="radio" name="Types" value="Work" id="1" checked={Number(accountItem.itemFirst) == 1} />Work
            <input type="radio" name="Types" value="Party" id="2" checked={Number(accountItem.itemFirst) == 2} />Party
            <input type="radio" name="Types" value="Shopping" id="3" checked={Number(accountItem.itemFirst) == 3} />Shopping
            <input type="radio" name="Types" value="Dining" id="4" checked={Number(accountItem.itemFirst) == 4} />Dining
            <input type="radio" name="Types" value="Trip" id="5" checked={Number(accountItem.itemFirst) == 5} />Trip<br />
            <input type="submit" id="btn-add-schedule" value="수정하기" />
        </form >
    )
}