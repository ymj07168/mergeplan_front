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

        let bodys = {
            username: Id,
            password: Pw
        }

        // const dispatcher = useDispatch();
        // const [member, setMember] = useState({
        //     loginId: "",
        //     password: "",
        // });

        // axios.post('/login', body)
        //     //.then(res => console.log('Login data', body))
        //     .then((result) => {
        //         //var status = result['status']
        //         //console.log("test " + status)
        //         console.log(result)
        //     })
        //     .catch(err => console.log(err))

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: bodys,
        })
            .then((result) => {
                console.log(result)
                console.log(result.payload)
            })
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