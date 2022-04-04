import { Header } from './components/common/Header';
import { Visual } from './components/Visual';
import { List } from './components/List';
import { Banner } from './components/Banner';

function App() {
    return (
        <div className="wrapper w-full bg-slate-600">
            <Header />
            <Visual />
            <List />
            <Banner />
        </div>
    );
}

export default App;
