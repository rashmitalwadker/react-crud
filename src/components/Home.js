import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();

    }, []);
    const loadUsers = async() => {
        const result = await axios.get('localhost:3003/users');
        console.log(result);
        setUser(result.data);
    }

    return ( <
        div >
        <
        h1 > This is the Home page < /h1> <
        table class = "table border shadow" >
        <
        thead class = "thead-dark" >
        <
        tr >
        <
        th scope = "col" > # < /th> <
        th scope = "col" > Id < /th> <
        th scope = "col" > title < /th> <
        th scope = "col" > completed < /th> < /
        tr > <
        /thead> <
        tbody > {
            users.map((user, index) => ( <
                tr > <
                th scope = "row" > key = { index + 1 } < /th> <
                td > { user.id } < /td> <
                td > { user.title } < /td><
                td > { user.completed } < /td> < /
                tr > ))
        }, <
        /tbody> < /
        table >

        <
        /
        div >
    );
}

export default Home;