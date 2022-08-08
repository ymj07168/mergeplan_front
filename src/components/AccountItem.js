import React from "react";
import "./History.css";

export default function AccountItem({ date, title, price, kind, category }) {



    return (
        <div className="history">
            <h1>{date}</h1>
            <table style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>내역</th><th>분류</th><th>금액</th><th>수입/지출</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{title}</td><td>{category}</td><td>{price}</td><td>{kind}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}