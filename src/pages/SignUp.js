import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';


export default function SignUp(props) {

    const [Name, setName] = useState('')  // username_k
    const [Id, setId] = useState('')
    const [Pw, setPw] = useState('')
    const [CPW, setCPw] = useState('')
    const [Date, setDate] = useState('2022-08-12')


    const onNameHandler = (e) => {
        setName(e.target.value)
    }
    const onIdHandler = (e) => {
        setId(e.target.value)
    }

    const onPwHandler = (e) => {
        setPw(e.target.value)
    }
    const onCPwHandler = (e) => {
        setCPw(e.target.value)
    }
    const onDateHandler = (e) => {
        setDate(e.target.value)
    }


    const onClickJoin = (e) => {
        e.preventDefault();
        let body = {
            username_k: Name,
            username: Id,
            password: Pw,
            cpassword: CPW,
            birthday: Date
        }
        // if (Pw == "1111") {
        //     alert("로그인되었습니다.");
        // } else {
        //     alert("비밀번호가 일치하지 않습니다.")
        // }

        axios.post('/join', body)
            .then(res => {
                console.log(body)
                // 정상 회원가입 시 status 처리
                if (res.status == 200) {
                    props.history.push('/login')
                }
                // 빈칸 있을 경우 status 처리
                // 잘못된 형식의 경우 status 처리?
                // 이 외의 경우
            })
    }


    return (
        <>

            <div className="sign-container">
                <h3>***회원가입</h3><br></br>
                <p>가계부와 플래너가 연동된 다양한 서비스를 만들어보세요.</p>

                <div className='sign-form'>
                    <form>

                        <input type="text" name="username_k" className="text-field" size="80" id="userName" placeholder="이름" onChange={onNameHandler}></input> <br></br>
                        <input type="text" name="username" className="text-field" size="80" id="userId" placeholder="아이디" onChange={onIdHandler}></input> <br></br>
                        <input type="password" name="password" className="text-field" size="80" id="userPw" placeholder="비밀번호" onChange={onPwHandler}></input> <br></br>
                        <input type="password" name="password" className="text-field" size="80" id="userCpw" placeholder="비밀번호 확인" onChange={onCPwHandler}></input> <br></br>
                        <input type="date" name="birthday" className="text-field" size="80" id="userDate" placeholder='생년월일' onChange={onDateHandler} /><br />


                        <input type="checkbox" name="idSave" value="save" />서비스 약관에 동의합니다. <br></br>
                        <input type="submit" value="가입하기" className="submit-btn" onClick={onClickJoin}></input> <br></br>
                        <input type="button" value="구글계정으로 로그인" className="submit-btnG" ></input> <br></br>
                    </form>
                    {/* <TextField label="Email Address" required fullWidth name="email" autoComplete="email" /> */}
                </div>
            </div>
        </>
    );
}