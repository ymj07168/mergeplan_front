import React from 'react';
import '../App.css';
import Select from 'react-select';


const techCompanies = [
    { label: "1월", value: 1 },
    { label: "2월", value: 2 },
    { label: "3월", value: 3 },
    { label: "4월", value: 4 },
    { label: "5월", value: 5 },
    { label: "6월", value: 6 },
    { label: "7월", value: 7 },
    { label: "8월", value: 8 },
    { label: "9월", value: 9 },
    { label: "10월", value: 10 },
    { label: "11월", value: 11 },
    { label: "12월", value: 12 },
];

export default function Account() {
    return (
        <>
            <div className="account-container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Select options={techCompanies} />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="account-record">
                        <label className="income">수입 :</label><br></br>
                        <label className="income">지출 :</label>
                    </div>
                    <input type="button" className="add-account-item" value="추가" />

                </div>
            </div>
            <div className="account-detail">
                <ul>
                    <li>
                        <div className="account-detail-li">
                            <h1>Date</h1>
                            <p>지출 : _______원</p>
                        </div>
                    </li>
                    <li>
                        <div className="account-detail-li">
                            <label className="account-date">날짜 : _ 월 _일</label><br></br>
                            <label className="iaccount-money">지출 : _______원</label>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}