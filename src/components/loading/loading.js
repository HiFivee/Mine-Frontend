import { useEffect } from 'react';

function Loading({ history }) {

    useEffect(() => {
        // userId 토큰이 존재한다면 자동 로그인
        
        // 토큰이 존재하지 않는다면 로그인 화면으로 Re-route

    }, []);

    return (
        <div className="loading-wrapper component">
            <h1 id="loading_text">loading...</h1>
        </div>
    );
}

export default Loading