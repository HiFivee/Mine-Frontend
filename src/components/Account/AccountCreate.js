import { useRef, useState, useEffect } from "react";

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 웹에서 아이콘이 필요할 때 가장 많이 사용되는 라이브러리
// https://www.daleseo.com/react-font-awesome/ 참고
// 패키지에서 제공하는 FontAwesomeIcon 컴포넌트에 icon prop으로 넘겨서 사용!

import axios from '../../utils/api/axios';
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;

const ProductBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const ProductSearch = styled.select`
  width: 92%;
  height: 75%;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
  padding-left: 7px;
`;

const ShowingCode = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const REG_LIST = [
    { id: null, value: '거주 지역' },
    { id: 0, value: '서울특별시' },
    { id: 1, value: '부산광역시' },
    { id: 2, value: '인천광역시' },
    { id: 3, value: '대구광역시' },
    { id: 4, value: '광주광역시' },
    { id: 5, value: '대전광역시' },
    { id: 6, value: '울산광역시' },
    { id: 7, value: '경기도' },
    { id: 8, value: '강원도' },
    { id: 9, value: '충청북도' },
    { id: 10, value: '충청남도' },
    { id: 11, value: '경상북도' },
    { id: 12, value: '경상남도' },
    { id: 13, value: '전라북도' },
    { id: 14, value: '전라남도' },
    { id: 15, value: '제주도' },
];

const USER_REGEX = /^[ㄱ-ㅎ|가-힣|A-z][ㄱ-ㅎ|가-힣|A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// /(?=.*\d)(?=.*[a-z]).{8,}/;
const TEL_REGEX = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const REGISTER_URL = '/api/account';

const AccountCreate = () => {
    const userRef = useRef();
    const errRef = useRef();
    // useRef : state로만 해결할 수 없고, DOM을 반드시 직접 건드려야 할 때 사용
    // ex) 특정 input에 focus, 스크롤 박스 조작, canvas에 그림 그리기
    // https://velog.io/@apro_xo/React.js-ref%EA%B0%80-%EB%AD%98%EA%B9%8C

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [tel, setTel] = useState('');
    const [validTel, setValidTel] = useState(false);
    const [telFocus, setTelFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [git, setGit] = useState('');
    const [validGit, setValidGit] = useState(false);
    const [gitFocus, setGitFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidTel(TEL_REGEX.test(tel));
    }, [tel])

    useEffect(() => {
        setValidGit(URL_REGEX.test(git));
    }, [git])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])
    // test() : 주어진 문자열이 정규 표현식을 만족하는지 판별, 
    // 그 여부를 true/false로 반환
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

    // setValidName 함수를 사용해 validName에 boolean 값 저장
    // user 값이 변할 때만!

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])
    // 동일하게 setValidPwd 함수를 사용해 validPwd에 boolean 값 저장
    // setValidMatch 함수를 사용해 validMath에 boolean 값 저장
    // pwd, matchPwd 값이 변할 때만!

    useEffect(() => {
        setErrMsg('');
    }, [user, email, tel, pwd, matchPwd, git])
    // user, pwd, matchPwd 값이 변할 때만, setErrMsg 함수 실행
    // 현재 상황에는 setErrMsg에 주어진 메시지 없음

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 버튼 자동 활성화 방지

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = TEL_REGEX.test(tel);
        const v5 = URL_REGEX.test(git);
        // true/false 값 저장

        if (!v1 || !v2 || !v3 || !v4 ) {
            // 이 값들 중에 하나라도 false 이면
            // 즉 username, pwd 형식이 하나라도 맞지 않거나
            // 조건 안에 들어 있는 값들이 채워지지 않을 경우.
            // git은 필수요소가 아니므로, 일단 제외

            setErrMsg("잘못된 접근입니다. Invalid Entry"); // 출력
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, email, tel, pwd, git}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );

            // console.log 부분은 확인용이므로, 나중에 삭제해주기! 
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))

            //데이터는 response.data 안에 들어 있음!

            setSuccess(true);
        
            setUser('');
            setEmail('');
            setTel('');
            setPwd('');
            setMatchPwd('');
            setGit('');
            // success가 true가 되면, state와 input 정리

        } catch (err) {
            if (!err?.response) { // 위에 정의한 response
                setErrMsg('서버 응답 없음. No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('이미 있는 이름입니다. Username Taken');
            } else {
                setErrMsg('회원가입 실패. Registration Failed')
            }
            errRef.current.focus();
            // err 에 focus
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>성공!</h1>
                    <p>
                        <Link to="/Login">로그인 (Sign In)</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>회원가입 (Register)</h1>
                    <p> * 는 필수 영역입니다. </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            * 이름 (Username):
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote" // 부연설명
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 4-24 자 사이로 지정해주세요. <br />
                            문자로 시작해야 합니다.<br />
                            문자, 숫자, 기호는 -와 _ 만 허용됩니다.
                        </p>

                        <label htmlFor="email">
                            * E-mail:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emlnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            placeholder="abc@google.com"
                        />
                        <p id="emlnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            룰루렐렐
                        </p>

                        <label htmlFor="tel">
                            * 휴대폰 번호 (Telephone):
                            <FontAwesomeIcon icon={faCheck} className={validTel ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTel || !tel ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="tel"
                            id="tel"
                            autoComplete="off"
                            onChange={(e) => setTel(e.target.value)}
                            value={tel}
                            required
                            aria-invalid={validTel ? "false" : "true"}
                            aria-describedby="telnote"
                            onFocus={() => setTelFocus(true)}
                            onBlur={() => setTelFocus(false)}
                            placeholder="000-000-000"
                        />
                        <p id="telnote" className={telFocus && tel && !validTel ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            양식에 맞게 쓰새오
                        </p>

                        <label htmlFor="password">
                            * 비밀번호 (Password):
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 8-24 자 사이에서 지정해주세요.<br />
                            소문자, 대문자, 숫자, 기호 전부 포함해야 합니다.<br />
                            허용되는 기호 : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            * 비밀번호 확인 (Confirm Password):
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            위에 입력한 비밀번호와 동일해야 합니다.
                        </p>

                        <div className="mb-4"></div>  
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="region">
                            * 거주 지역 (Region):
                        </label>
                        <ProductBar>
                            <ProductSearch onChange={handleDropProduct} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker">
                            {REG_LIST.map(el => {
                                return (
                                <option defaultValue="123" key={el.id}>
                                    {el.value}
                                </option>
                                );
                            })}
                            
                            </ProductSearch>
                        </ProductBar>
                        <ShowingCode>{selectedDropValue}</ShowingCode>
                        
                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="url">
                            Github:
                            <FontAwesomeIcon icon={faCheck} className={validGit ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validGit || !git ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="url"
                            id="git"
                            autoComplete="off"
                            onChange={(e) => setGit(e.target.value)}
                            value={git}
                            // required
                            aria-invalid={validGit ? "false" : "true"}
                            aria-describedby="gitnote"
                            onFocus={() => setGitFocus(true)}
                            onBlur={() => setGitFocus(false)}
                            placeholder="https://.."
                        />
                        <p id="gitnote" className={gitFocus && git && !validGit ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            깃헙내놔
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch || !validEmail || !validTel ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        계정이 이미 있으신가요?<br />
                        {/* Already registered?<br /> */}
                        <span className="line">
                            <Link to="/">Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default AccountCreate

//aria : WAI-ARIA 로, 동적 환경에서 수준 높은 UX를 제공하는 웹 애플리케이션
// https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
// https://tech.lezhin.com/2018/04/20/wai-aria
// https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/forms/alerts
// https://bcp0109.tistory.com/348?category=967799
