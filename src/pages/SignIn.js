import React, { useState } from 'react'
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

        let data = {
            username: Id,
            password: Pw
        }

        if (!Id) {
            return alert("아이디를 입력하세요.");
        }
        else if (!Pw) {
            return alert("비밀번호를 입력하세요.");
        }

        axios.post('/login', data)
            .then((result) => {
                console.log(result.status)
                console.log(data)
                if (result.status == 200) {
                    alert('로그인')
                    sessionStorage.setItem('token', result.headers.authorization)
                    //console.log(sessionStorage.getItem('token'))
                    // action or redirect
                } else if (result.status == 401) {
                    alert('비밀번호 오류')
                } else if (result.status == 500) {
                    alert('없는 아이디입니다.')
                }
            })
            .catch((err) => {
                console.log(err)
                if (err.status == 500) {
                    alert('없는 아이디입니다.')
                }
            })

        // session test
        // let config = {
        //     headers : {
        //         'Authorization' : sessionStorage.getItem('token'),
        //         'content-type' : 'application/json;charset=UTF-8'
        //     }
        // }

        // axios.get('/api/v1/user', config)
        // .then((result) => {
        //     console.log(result.data)
        // })
        // .catch(err => console.log(err))

    }

    return (
        <>
            <div className="sign-container">
                <h3>***로그인</h3>
                <div className='sign-form'>
                    <form>
                        <input type="text" name="id" className="text-field" size="80" id="userid" placeholder="아이디" onChange={onIdHandler}></input> <br></br>
                        <input type="password" name="password" className="text-field" size="80" id="userpw" placeholder="비밀번호" onChange={onPwHandler}></input> <br></br>
                        <input type="submit" value="로그인하기" onClick={onClickLogin} className="submit-btn"></input> <br></br>
                        <input type="button" value="아이디/비밀번호 찾기" className="submit-btn"></input> <br></br>
                        <input type="button" value="구글계정으로 로그인" className="submit-btnG"></input> <br></br>
                    </form>
                </div>
            </div>
        </>
    );
}