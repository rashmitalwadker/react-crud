import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link, to } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
        return ( < div >
            <
            nav class = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <
            div class = "container-fluid" >
            <
            Link className = "navbar-brand"
            to = "#" > Navbar < /Link> <
            button class = "navbar-toggler"
            type = "button"
            data bs toggle = "collapse"
            data bs target = "#navbarSupportedContent"
            aria controls = "navbarSupportedContent"
            aria expanded = "false"
            aria label = "Toggle navigation" >
            <
            span className = "navbar-toggler-icon" > < /span> < /
            button > <
            div className = "collapse navbar-collapse"
            id = "navbarSupportedContent" >
            <
            ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
            <
            li className = "nav-item" >
            <
            Link className = "nav-link active"
            aria current = "page"
            to = "/" > Home < /Link> < /
            li > <
            li class = "nav-item" >
            <
            Link className = "nav-link"
            to = "/Rooms" > Room < /Link> < /
            li > <
            li class = "nav-item dropdown" >
            <
            Link className = "nav-link dropdown-toggle"
            to = "#"
            id = "navbarDropdown"
            role = "button"
            data bs toggle = "dropdown"
            aria expanded = "false" >
            Dropdown <
            /Link> <
            ul class = "dropdown-menu"
            aria labelledby = "navbarDropdown" >
            <
            li > < Link className = "dropdown-item"
            to = "#" > Action < /Link></li >
            <
            li > < Link className = "dropdown-item"
            href = "#" > Another action < /Link></li >
            <
            li > < hr class = "dropdown-divider" / > < /li> <
            li > < Link className = "dropdown-item"
            to = "#" > Something
            else here < /Link></li >
                <
                /ul> < /
            li > <
            li class = "nav-item" >
            <
            Link className = "nav-link disabled"
            to = "#"
            tabindex = "-1"
            aria disabled = "true" > Disabled < /Link> < /
            li > <
            /ul> <
            form className = "d-flex" >
            <
            input className = "form-control me-2"
            type = "search"
            placeholder = "Search"
            aria label = "Search" / >
            <
            button className = "btn btn-outline-success"
            type = "submit" > Search < /button> < /
            form > <
            /div> < /
            div > <
            /nav>






            <
            /div >);
        }
        export default Navbar;