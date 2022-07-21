import React from 'react'
import '../App.css';


export default function SignUp() {
    return (
        <div className="main_signup">
            <h3>***로그인</h3>
            <div className='form-main'>
                <form>
                    <input type="text" name="id" class="text-field" size="80" id="userid" placeholder="아이디"></input> <br></br>
                    <input type="text" name="password" class="text-field" size="80" id="userpw" placeholder="비밀번호"></input> <br></br>
                    <input type="submit" value="로그인하기" class="submit-btn"></input> <br></br>
                    <input type="button" value="아이디/비밀번호 찾기" class="submit-btn"></input> <br></br>
                    <input type="button" value="구글계정으로 로그인" class="submit-btnG"></input> <br></br>

                </form>
            </div>
        </div>
    );
}