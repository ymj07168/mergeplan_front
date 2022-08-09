import axios from "axios";
import React from "react";
import "./History.css";

export default function AccountItem({ id, uId, cDate, iDate, kind, title, price, category, second, pId }) {


    let cdate = new Date(cDate);

    const onDelete = (e) => {

        console.log(cdate.getFullYear() + '-' + (cdate.getMonth() + 1) + '-' + cdate.getDate())
        let data = {
            id: id,
            userId: uId,
            createDatetime: cDate.usbstr,
            itemDatetime: iDate,
            itemKind: kind,
            itemFirst: category,
            itemSecond: second,
            itemTitle: title,
            itemPrice: price,
            plannerId: pId
        }

        let config = {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'content-type': 'application/json;charset=UTF-8'
            }
        }

        axios.delete(`/auth/accounts/item/${id}`, data, config);
    }


    return (
        <>
            <tr>
                <td>{iDate}</td><td>{title}</td><td>{category}</td><td>{price}</td><td><button onClick={onDelete}>삭제</button></td>
            </tr>
        </>

    )
}