import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import EditAcountForm from "./EditAccountForm";
import { Link } from "react-router-dom";
import './AccountItem.css';
// pId값 플래너 페이지 이동하면서 넘겨주는 함수
export const isPlanner = () => {
    return sessionStorage.getItem('pId')
}

export default function AccountItem({ id, uId, cDate, iDate, kind, title, price, category, cWord, second, pId }, props) {

    // 수정 modal 창
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }



    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    const onDelete = (e) => {
        axios.delete(`/auth/accounts/item/${id}`, config)
            .then((result) => {
                alert('삭제 성공')
                console.log(id)
                window.location.reload();
            })
    }


    const onShowSchedule = (e) => {
        console.log(pId + '가계부:일정보기 버튼 누르기 전')
        // console.log(schedules[pId])
        sessionStorage.setItem('pId', 15)
        console.log(pId + '가계부:일정보기 버튼 누른 후');

        // axios.get(`auth/planner/item/${pId}`, config)
        // plannerList[pId]
        // 
    }


    return (
        <>
            <tr>
                <td>{iDate}</td><td>{title}</td><td>{cWord}</td><td>{price}</td><td><button className="account-chan" onClick={openModal}>수정</button></td><td><button className="account-del" onClick={onDelete}>삭제</button></td><td><Link to='/planner'><button className="account-plan" onClick={onShowSchedule}>일정</button></Link></td>
            </tr>
            <Modal open={modalOpen} close={closeModal} header="내역 수정하기">
                <EditAcountForm
                    id={id}
                    uId={uId}
                    cDate={cDate}
                    iDate={iDate}
                    kind={kind}
                    category={category}
                    second={second}
                    title={title}
                    price={price}
                    pId={pId} />
            </Modal>
        </>

    )
}