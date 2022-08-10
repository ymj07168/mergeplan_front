import axios from "axios";
import React, { useState } from "react";
import "./History.css";

export default function AccountItem({ id, uId, cDate, iDate, kind, title, price, category, cWord, second, pId }, props) {


    const onDelete = (e) => {

        let config = {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'content-type': 'application/json;charset=UTF-8'
            }
        }

        axios.delete(`/auth/accounts/item/${id}`, config)
            .then((result) => {
                alert('삭제 성공')
                console.log(id)
                window.location.reload();
            })
    }


    return (
        <>
            <tr>
                <td>{iDate}</td><td>{title}</td><td>{cWord}</td><td>{price}</td><td><button onClick={onDelete}>삭제</button></td>
            </tr>
        </>

    )
}