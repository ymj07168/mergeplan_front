import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';


export default function SignIn() {

    const [Id, setId] = useState('')
    const [Pw, setPw] = useState('')

    const onIdHandler = (e) => {
        setId(e.target.value)
    }

    const onPwHandler = (e) => {
        setPw(e.target.value)
    }

    const onClickLogin = (e) => {
        e.preventDefault();

        let body = {
            id: Id,
            password: Pw,
        }

        axios.post('/test', body)
            .then(response => {

            })
    }

    return (
        <>
            <div className="sign-container">
                <h3>***로그인</h3>
                <div className='sign-form'>
                    <form>
                        <input type="text" name="id" class="text-field" size="80" id="userid" placeholder="아이디"></input> <br></br>
                        <input type="password" name="password" class="text-field" size="80" id="userpw" placeholder="비밀번호"></input> <br></br>
                        <input type="submit" value="로그인하기" onClick={onClickLogin} class="submit-btn"></input> <br></br>
                        <input type="button" value="아이디/비밀번호 찾기" class="submit-btn"></input> <br></br>
                        <input type="button" value="구글계정으로 로그인" class="submit-btnG"></input> <br></br>
                    </form>
                </div>
            </div>
        </>
    );
}