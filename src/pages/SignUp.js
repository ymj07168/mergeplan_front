import React from 'react'
import '../App.css';


export default function SignUp() {
    return (
        <>

            <div className="sign-container">
                <h3>***회원가입</h3><br></br>
                <p>가계부와 플래너가 연동된 다양한 서비스를 만들어보세요.</p>

                <div className='sign-form'>
                    <form>
                        <input type="text" name="userName" class="text-field" size="80" id="userName" placeholder="이름"></input> <br></br>
                        <input type="text" name="id" class="text-field" size="80" id="userid" placeholder="아이디"></input> <br></br>
                        <input type="text" name="password" class="text-field" size="80" id="userpw" placeholder="비밀번호"></input> <br></br>
                        <input type="text" name="password" class="text-field" size="80" id="userpw" placeholder="비밀번호 확인"></input> <br></br>

                        <input type="checkbox" name="idSave" value="save" />서비스 약관에 동의합니다. <br></br>
                        <input type="submit" value="가입하기" class="submit-btn"></input> <br></br>

                        <input type="button" value="구글계정으로 로그인" class="submit-btnG" ></input> <br></br>

                    </form>
                    {/* <TextField label="Email Address" required fullWidth name="email" autoComplete="email" /> */}
                </div>
            </div>
        </>
    );
}