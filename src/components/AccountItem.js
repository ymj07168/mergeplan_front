import React from "react";
import "./History.css";

export default function AccountItem({ date, title, price, category }) {



    return (
        <>
            <tr>
                <td>{date}</td><td>{title}</td><td>{category}</td><td>{price}</td><td><button>삭제</button></td>
            </tr>
        </>

    )
}