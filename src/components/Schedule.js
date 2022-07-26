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

    // Calendar.momentLocalizer(moment);
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
            // step={60}
            // view="month"
            // views={["month"]}
            // min={new Date(2008, 0, 1, 8, 0)}
            // max={new Date(2008, 0, 1, 17, 0)}
            // date={new Date(2019, 1, 20)}
            />
        </div>
    )
}

export default Schedule;

