import './App.css';
import Navigation from "./Navigation/Navigation";
import Posts from "./Posts/Posts";
import Filter from "./Filter/Filter";
import Login from './Login/Login';
import {useState} from "react";

function App() {
    const [filterState, setFilterState] = useState({
        sport: true,
        science: true,
    });
    return (
        <div className="App">
            <div className="sidewindow">
                <Filter filterState={filterState} setFilterState={setFilterState}/>
            </div>
            <div className="mainwindow">
                <Posts filterState={filterState}/>
                <Navigation/>
            </div>
            <div className="sidewindow"><Login /></div>
        </div>
    );
}

export default App;
