import axios from "axios";
import React, { useState } from "react";
import "./History.css";
import Modal from "./Modal";
import EditAcountForm from "./EditAccountForm";

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


    return (
        <>
            <tr>
                <td>{iDate}</td><td>{title}</td><td>{cWord}</td><td>{price}</td><td><button onClick={openModal}>수정</button></td><td><button onClick={onDelete}>삭제</button></td>
            </tr>
            <Modal open={modalOpen} close={closeModal} header="일정 수정하기">
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