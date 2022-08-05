import React from "react";
import "./History.css";

export default function History() {



    return (
        <div className="history">
            <h1>1일</h1>
            <table style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>내역</th><th>분류</th><th>금액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>친구랑 저녁약속</td><td>Party</td><td>100,000</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}