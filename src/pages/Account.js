import React, { useState, useEffect } from 'react'
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import Modal from '../components/Modal';
import AddAcountForm from '../components/AddAccountForm';
import axios from 'axios';
import AccountItem from '../components/AccountItem';


export default function Account(props) {

    // 총수입, 총지출 변수
    const [income, setIncome] = useState("");
    const [expenses, setExpenses] = useState("");
    // 연도 변수
    const [year, setYear] = useState('2022');
    const [totalMonth, setTotalmonth] = useState('08');


    // 내역 추가하기 창 -> Modal
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    // 가계부 내역 전체 데이터 저장 변수
    const [histories, setHistories] = useState([]);

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    // 가계부 내역 전체 데이터 가져오기
    const getHistories = async () => {
        console.log("before");
        const json = await (await axios.get('/auth/accounts/item', config));
        console.log("after");
        setHistories(json.data);
    };
    useEffect(() => {
        getHistories();
    }, []);
    console.log(histories);


    // 년월 변경시 년월 정보 가져오기
    const [month, setMonth] = useState('2022-08');
    const onMonthHandler = (e) => {
        setMonth(e.target.value)
        setYear((e.target.value).substr(0, 4))
        setTotalmonth((e.target.value).substr(5, 7))
    }

    // 월별 분리
    const accountList = histories.filter(history => (history.itemDatetime).substr(0, 7) == month)

    // 수입 지출 분리
    const incomeList = accountList.filter(item => item.itemKind == false);
    const expensesList = accountList.filter(item => item.itemKind == true);

    // 수입 지출 총액 가져오기
    axios.get(`/auth/accounts/item/total/${year}/${totalMonth}`, config)
        .then(
            result => {
                console.log(result)
                setIncome(result.data.income)
                setExpenses(result.data.expenses)
            }
        )
        .catch(error => console.log(error)

        )


    // // 수입 지출 분리
    // const incomeList = histories.filter(history => history.itemKind == false);
    // const expensesList = histories.filter(history => history.itemKind == true);



    return (
        <>
            <div className='account'>
                <div className='account-header' >
                    <input type="month" className='account-month' value={month} onChange={onMonthHandler} />
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
                <div className='histories'>
                    <div>
                        <h2>income</h2>
                        <table className='account-table'>
                            <thead>
                                <tr>
                                    <th>날짜</th><th>내역</th><th>분류</th><th>금액</th><th></th><th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {incomeList.map((income) => (
                                    <AccountItem
                                        key={income.id}
                                        id={income.id}
                                        uId={income.userId}
                                        cDate={income.createDatetime}
                                        iDate={income.itemDatetime}
                                        title={income.itemTitle}
                                        price={income.itemPrice}
                                        kind={income.itemKind}
                                        category={income.itemFirst}
                                        cWord={income.itemFirstWord}
                                        second={income.itemSecond}
                                        pId={income.plannerId} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2>expenses</h2>
                        <table className='account-table'>
                            <thead>
                                <tr>
                                    <th>날짜</th><th>내역</th><th>분류</th><th>금액</th>
                                    <th></th><th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {expensesList.map((expense) => (
                                    <AccountItem
                                        key={expense.id}
                                        id={expense.id}
                                        uId={expense.userId}
                                        cDate={expense.createDatetime}
                                        iDate={expense.itemDatetime}
                                        title={expense.itemTitle}
                                        price={expense.itemPrice}
                                        kind={expense.itemKind}
                                        category={expense.itemFirst}
                                        cWord={expense.itemFirstWord}
                                        second={expense.itemSecond}
                                        pId={expense.plannerId}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p>

                    이 페이지는 가계부 페이지입니다.
                    account
                </p>
            </div>
        </>
    )
}