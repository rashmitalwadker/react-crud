import React, { useState } from 'react';
//import '. / App.css ';
import List from './components/List';
//import ListOfHotels from './components/ListOfHotels';
//import Room from './components/Room';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';

function App() {
    const [user, setUser] = useState([{
        "name": "Bissau Palace Hotel Devigarh Udaipur "
    }, {
        "name": "Lake Palace Udaipur "
    }, { "name": "Lalgarh Palace Bikaner" }, {
        "name": "Laxmi Niwas Palace Bikaner "
    }, ]);
    const adduser = () => {
        alert("you r registered successfully");
        console.log(adduser);
    };

    return ( < div >


        {
            user.map((title) => {
                return ( < > <
                    li > {
                        title.name
                    } < /li> <
                    select className = "room-type" >
                    <
                    option > single(sleeps1, adult) < /option> <
                    option > double(sleeps2, adult) < /option> <
                    option > twin(sleeps2, adult) < /option> <
                    option > triple(sleeps3, adult) < /option> <
                    option > quad(sleeps4, adult) < /option> < /
                    select >

                    <
                    span > <
                    button onClick = {
                        (e) => {
                            adduser(e.target.value)
                        }
                    } > ADDUSER < /button> < /
                    span > < / >
                );



            })
        }






        <
        /div >
    );
}

export default App;