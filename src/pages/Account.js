import React, { useState, useEffect } from 'react'
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import History from '../components/History';
import Modal from '../components/Modal';
import AddAcountForm from '../components/AddAccountForm';
import axios from 'axios';
import AccountItem from '../components/AccountItem';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Account() {

    // 총수입, 총지출 변수
    const [income, setIncome] = useState("20,000");
    const [expenses, setExpenses] = useState("30,000");

    // 내역 추가하기 창 -> Modal
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    const [histories, setHistories] = useState([]);

    // console.log(accountList);

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    const getHistories = async () => {
        const json = await (await axios.get('/auth/accounts/item', config));
        setHistories(json.data);
    };
    useEffect(() => {
        getHistories();
    }, []);
    console.log(histories);

    // // 년월 변경시 년월 정보 가져오기
    // const [month, setMonth] = useState('2022-08');
    // const onMonthHandler = (e) => {
    //     setMonth(e.target.value)
    // }
    // console.log(month)

    // const accountList = histories.filter(history => history.itemMonth == month)

    // // 수입 지출 분리
    // const incomeList = accountList.filter(history => history.itemKind == 0);
    // const expensesList = accountList.filter(history => history.itemKind == 1);


    // 수입 지출 분리
    const incomeList = histories.filter(history => history.itemKind == 0);
    const expensesList = histories.filter(history => history.itemKind == 1);

    const [month, setMonth] = useState('2022-08');
    const onMonthHandler = (e) => {
        setMonth(e.target.value)
        console.log(month)
    }

    return (
        <>
            <div className='account'>
                <div className='account-header' >
                    <input type="month" className='account-month' value={month} onChange={onMonthHandler} /><br />
                    <div className='account-total'>
                        <h3>총수입: {income} 원</h3>
                        <h3>총지출: {expenses} 원</h3>
                    </div>
                    <button className='account-addbtn' onClick={openModal}>내역 추가하기</button>
                    <Modal open={modalOpen} close={closeModal} header="가계부 내역 추가하기">
                        <AddAcountForm />
                    </Modal>
                </div>

                <br /><br />
                <h1>Account</h1>
                {/* <History /> */}
                <div className='histories'>
                    {histories.map((history) => (
                        <History
                            key={history.id}
                            date={history.itemDatetime}
                            title={history.itemTitle}
                            price={history.itemPrice}
                            kind={history.itemKind}
                            category={history.itemFirst}
                        />
                    ))}
                </div>
                <div>
                    income
                    <table>
                        <thead>
                            <tr>
                                <th>날짜</th><th>내역</th><th>분류</th><th>금액</th><th>수입/지출</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomeList.map((income) => (
                                <AccountItem
                                    key={income.id}
                                    date={income.itemDatetime}
                                    title={income.itemTitle}
                                    price={income.itemPrice}
                                    kind={income.itemKind}
                                    category={income.itemFirst} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    expenses
                    <table>
                        <thead>
                            <tr>
                                <th>날짜</th><th>내역</th><th>분류</th><th>금액</th><th>수입/지출</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expensesList.map((expense) => (
                                <AccountItem
                                    key={expense.id}
                                    date={expense.itemDatetime}
                                    title={expense.itemTitle}
                                    price={expense.itemPrice}
                                    kind={expense.itemKind}
                                    category={expense.itemFirst}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <p>

                    이 페이지는 가계부 페이지입니다.
                    account
                </p>
            </div>
        </>
    )
}