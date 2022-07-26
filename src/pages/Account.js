import React, { useState, useEffect } from 'react'
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import History from '../components/History';


export default function Account() {

    const [startDate, setStartDate] = useState(new Date());

    const [income, setIncome] = useState("20,000");
    const [expenses, setExpenses] = useState("30,000");

    return (
        <>
            <div className='account'>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                />
                <h3>총수입: {income} 원</h3>
                <h3>총지출: {expenses} 원</h3>
                <input type="button" value="내역 추가" style={{ width: "200px", height: "50px" }} />

                {/* <table style={{
                    tableLayout: "fixed", textAlign: "center", width: "100%"
                }}>
                    <td>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                        />
                    </td>
                    <td>
                        <h3>총수입: {income} 원</h3>
                        <h3>총지출: {expenses} 원</h3>
                    </td>
                    <td>
                        <input type="button" value="내역 추가" style={{ width: "200px", height: "50px" }} />
                    </td>
                </table> */}

                <br /><br />
                <h1>Account</h1>
                <History />
                <p>

                    이 페이지는 가계부 페이지입니다.
                    account
                </p>
            </div>
        </>
    )
}