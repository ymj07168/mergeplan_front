import axios from "axios";
import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";


function Schedule() {
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);

    const myEventList = [
        { start: new Date(), end: new Date(), title: "special event" }
    ];



    axios.post('/',)



    // Calendar.momentLocalizer(moment);
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
            />
        </div>
    )
}

export default Schedule;

