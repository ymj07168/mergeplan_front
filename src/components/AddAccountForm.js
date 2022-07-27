import { height } from "@mui/system";
import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';

export default function AddAcountForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <form>
            날짜 : <input type="date" style={{ width: 270 }} /><br />
            내역 : <input type="text" style={{ width: 270 }} /><br />
            금액 : <input type="text" name="amount" style={{ width: 270 }} /><br />
            분류 : <input type="radio" name="Types" value="Work" />Work
            <input type="radio" name="Types" value="Party" />Party
            <input type="radio" name="Types" value="Shopping" />Shopping
            <input type="radio" name="Types" value="Dining" />Dining
            <input type="radio" name="Types" value="Trip" />Trip<br />
        </form >
    )
}
