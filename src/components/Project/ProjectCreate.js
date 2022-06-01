import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../utils/api/axios';
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const FIELD_LIST = [
    { id: null, value: '분야를 선택하세요.' },
    { id: 'F0', value: '프론트엔드' },
    { id: 'F1', value: '백엔드/서버' },
    { id: 'F2', value: '웹' },
    { id: 'F3', value: '데스크톱' },
    { id: 'F4', value: '모바일' },
    { id: 'F5', value: '그래픽' },
    { id: 'F6', value: '게임' },
    { id: 'F7', value: '데이터분석' },
    { id: 'F8', value: '빅데이터' },
    { id: 'F9', value: '보안' },
];

const REG_LIST = [
    { id: null, value: '거주 지역' },
    { id: 'R0', value: '서울특별시' },
    { id: 'R1', value: '부산광역시' },
    { id: 'R2', value: '인천광역시' },
    { id: 'R3', value: '대구광역시' },
    { id: 'R4', value: '광주광역시' },
    { id: 'R5', value: '대전광역시' },
    { id: 'R6', value: '울산광역시' },
    { id: 'R7', value: '경기도' },
    { id: 'R8', value: '강원도' },
    { id: 'R9', value: '충청북도' },
    { id: 'R10', value: '충청남도' },
    { id: 'R11', value: '경상북도' },
    { id: 'R12', value: '경상남도' },
    { id: 'R13', value: '전라북도' },
    { id: 'R14', value: '전라남도' },
    { id: 'R15', value: '제주도' },
];

const PNAME_REGEX = /^[ㄱ-ㅎ|가-힣|A-z0-9-_]{3,23}$/;
const PHC_REGEX = /^[0-9]{0,9}$/;

const REGISTER_URL = '/api/account';

const ProjectCreate = () => {
    const ProjectCreate = () => {
        const userRef = useRef();
        const errRef = useRef();
    
        const [pid, setPid] = useState(0);
        setPid(1);
        console.log(pid);
    
        const [pname, setPname] = useState('');
        const [validPname, setValidPname] = useState(false);
        const [PnameFocus, setPnameFocus] = useState(false);
    
        const [phc, setPhc] = useState(0);
        const [validPhc, setValidPhc] = useState(false);
        const [PhcFocus, setPhcFocus] = useState(false);
    
        const [pfield, setPfield] = useState('');
        const [selectedDropField, setSelectedDropField] = useState('');
        
        const [preg, setPreg] = useState('');
        const [selectedDropReg, setSelectedDropReg] = useState('');
    
        const [errMsg, setErrMsg] = useState('');
        const [success, setSuccess] = useState(false);
    
        useEffect(() => {
            userRef.current.focus();
        }, [])
    
        useEffect(() => {
            setValidPname(PNAME_REGEX.test(pname));
        }, [pname])
    
        useEffect(() => {
            setValidPhc(PHC_REGEX.test(phc));
        }, [phc])
    
        useEffect(() => {
            setErrMsg('');
        }, [pname, phc ])
    
        const handleDropReg = e => {
            const { value } = e.target;
            setSelectedDropReg(REG_LIST.filter(el => el.value === value)[0].id);  
        };
    
        const handleDropField = e => {
            const { value } = e.target;
            setSelectedDropField(FIELD_LIST.filter(el => el.value === value)[0].id);  
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const v1 = PNAME_REGEX.test(pname);
            const v2 = PHC_REGEX.test(phc);
    
            if (!v1 || !v2) {
    
                setErrMsg("잘못된 접근입니다. Invalid Entry"); 
                return;
            }
            try {
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify({ pid, pname, phc, pfield, preg }),
                    {
                        headers: { 'Content-Type': 'application/json'},
                        withCredentials: false
                    }
                );
    
                console.log(JSON.stringify(response?.data));
    
                setSuccess(true);
                setPname('');
                setPhc('');
    
    
            } catch (err) {
                if (!err?.response) { 
                    setErrMsg('서버 응답 없음. No Server Response');
                } else if (err.response?.status === 409) {
                    setErrMsg('이미 있는 이름입니다. Project Name Taken');
                } else {
                    setErrMsg('프로젝트 생성 실패. Failed')
                }
                errRef.current.focus();
            }
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>프로젝트 생성 성공!</h1>
                    <p>
                        <Link to="/"> Home </Link>
                    </p>
                </section>
            ) : (
                <section>
                    <div className="mb-10"></div>
                    <div className="sm:text-center lg:text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline mb-10">프로젝스 생성</span>
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className="mx-auto max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="mb-4"></div>
                        <div className="mb-4" />

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            * 프로젝트명 :
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
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 4-24 자 사이로 지정해주세요. <br />
                            문자로 시작해야 합니다.<br />
                            문자, 숫자, 기호는 -와 _ 만 허용됩니다.
                        </p>
                        
                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="emlnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            이메일 똑바로 쓰새오
                        </p>

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="tel">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="telnote" className={telFocus && tel && !validTel ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            양식에 맞게 쓰새오
                        </p>

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        {//<p className="text-red text-xs italic">Please choose a password.</p>    
                        }
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 8-24 자 사이에서 지정해주세요.<br />
                            소문자, 대문자, 숫자, 기호 전부 포함해야 합니다.<br />
                            허용되는 기호 : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> 
                            <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="cpassword">
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

                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />

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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="gitnote" className={gitFocus && git && !validGit ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            깃헙내놔
                        </p>
                        
                        <div className="mb-6"></div>
                        <div className="flex items-center justify-between">
                            <button disabled={!validName || !validPwd || !validMatch || !validEmail || !validTel ? true : false}
                            className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                                Sign Up
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Already registered?
                            <Link to="/"> Sign In</Link>
                            </a>
                        </div>
                    </form>

                </section>
            )}
        </>
    )
}

export default ProjectCreate;
