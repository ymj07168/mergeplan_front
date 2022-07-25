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
    }


    // const onClickLogin = (e) => {
    //     console.log('click login')
    //     console.log('ID : ', inputId)
    //     console.log('PW : ', inputPw)
    //     axios.post('/test', null, {
    //         params: {
    //             'user_id': inputId,
    //             'user_pw': inputPw
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //             console.log('res.data.userId :: ', res.data.userId)
    //             console.log('res.data.msg :: ', res.data.msg)
    //             if (res.data.userId === undefined) {
    //                 // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
    //                 console.log('======================', res.data.msg)
    //                 alert('입력하신 id 가 일치하지 않습니다.')
    //             } else if (res.data.userId === null) {
    //                 // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
    //                 console.log('======================', '입력하신 비밀번호 가 일치하지 않습니다.')
    //                 alert('입력하신 비밀번호 가 일치하지 않습니다.')
    //             } else if (res.data.userId === inputId) {
    //                 // id, pw 모두 일치 userId = userId1, msg = undefined
    //                 console.log('======================', '로그인 성공')
    //                 sessionStorage.setItem('user_id', inputId)
    //             }
    //             // 작업 완료 되면 페이지 이동(새로고침)
    //             document.location.href = '/'
    //         })
    //         .catch()
    // }

    // useEffect(() => {
    //     axios.get('/user_inform/login')
    //         .then(res => console.log(res))
    //         .catch()
    // }, [])



    return (
        <>
            <div className="sign-container">
                <h3>***로그인</h3>
                <div className='sign-form'>
                    <form>
                        <input type="text" name="id" class="text-field" size="80" id="userid" placeholder="아이디"></input> <br></br>
                        <input type="text" name="password" class="text-field" size="80" id="userpw" placeholder="비밀번호"></input> <br></br>
                        <input type="submit" value="로그인하기" class="submit-btn"></input> <br></br>
                        <input type="button" value="아이디/비밀번호 찾기" class="submit-btn"></input> <br></br>
                        <input type="button" value="구글계정으로 로그인" class="submit-btnG"></input> <br></br>
                    </form>
                </div>
            </div>
        </>
    );
}