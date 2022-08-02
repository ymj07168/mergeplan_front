import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';
// function

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
        if (Pw == "1111") {
            alert("로그인되었습니다.");
        } else {
            alert("비밀번호가 일치하지 않습니다.")
        }

        axios.post('/test', body)
            .then(response => {

            })
    }


    return (
        <>
            <div className="sign-container">
                <h3>****로그인</h3>
                <div className='sign-form'>
                    <form>
                        <input type="text" name="id" class="text-field" value={Id} size="80" id="userid" onChange={onIdHandler} placeholder="아이디"></input> <br></br>
                        <input type="password" name="password" class="text-field" value={Pw} size="80" id="userpw" onChange={onPwHandler} placeholder="비밀번호"></input> <br></br>
                        <button type="submit" value="로그인하기" class="submit-btn" onClick={onClickLogin}>로그인하기</button> <br></br>
                        <input type="button" value="아이디/비밀번호 찾기" class="submit-btn"></input> <br></br>
                        <button type="button" value="구글계정으로 로그인" class="submit-btnG"><img className="google-btn-img" width="20" height="20" src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo-thumbnail.png" />    구글계정으로 로그인</button> <br></br>
                        <div>
                            아이디 : {Id} <br></br>
                            비밀번호 : {Pw}
                        </div>
                    </form>
                </div>
            </div>

        </>

    );
}