import { Header } from './components/common/Header';
import { Visual } from './components/Visual';
import { List } from './components/List';
import { Banner } from './components/Banner';
import { useEffect, useState } from 'react';

function App() {
    const [scroll, setScroll] = useState(0);
    const [offsetTop, setOffsetTop] = useState(0);

    let timeout;

    // 스크롤 상하 이동 체크
    function handleScroll(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setScroll(e.deltaY);
            setOffsetTop(window.scrollY);
        }, 10);
    }

    return (
        <div
            className="wrapper w-full bg-slate-600"
            onWheel={e => handleScroll(e)}
        >
            <Header isScroll={{ scroll, offsetTop }} />
            <Visual main={true} active={true} />
            <List sweet={true} />
            <Visual active={false} />
            <List />
            <Banner />
        </div>
    );
}

export default App;
