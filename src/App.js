import './App.css';
import Navigation from "./Navigation/Navigation";
import Posts from "./Posts/Posts";
import Filter from "./Filter/Filter";
import Login from './Login/Login';
import {useState} from "react";
import Profile from "./Profile/Profile";

//TODO Dark theme
//TODO Implement more colours and add more styling

function App() {
    const [filterState, setFilterState] = useState({
        sport: true,
        science: true,
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    return (
        <div className="App">
            <div className="sidewindow">
                <Filter filterState={filterState} setFilterState={setFilterState}/>
            </div>
            <div className="mainwindow">
                <Posts filterState={filterState}/>
                <Navigation/>
            </div>
            <div className="sidewindow">{loggedIn ? <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} username={username} setUsername={setUsername} /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} username={username} setUsername={setUsername} /> }</div>
        </div>
    );
}

export default App;
