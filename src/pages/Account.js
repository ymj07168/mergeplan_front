import React, { useState, useEffect } from 'react'
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import History from '../components/History';
import Modal from '../components/Modal';
import AddAcountForm from '../components/AddAccountForm';
import axios from 'axios';


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


    // axios.get('/auth/accounts/item', config)
    //     .then(
    //         response => {
    //             console.log(response)
    //             setHistories(response.data)
    //             console.log(histories)
    //         }
    //     )
    //     .catch(error => console.log(error))


    return (
        <>
            <div className='account'>
                <div className='account-header' >
                    <input type="month" className='account-month' /><br />
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
                            date={history.itemDatetime}
                            title={history.itemTitle}
                            price={history.itemPrice}
                            kind={history.itemKind}
                            category={history.itemFirst}
                        />
                    ))}
                </div>
                <p>

                    이 페이지는 가계부 페이지입니다.
                    account
                </p>
            </div>
        </>
    )
}