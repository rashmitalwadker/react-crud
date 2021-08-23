import React from 'react'

const Room = () => {
    return ( <
        div >
        <
        h1 className = "heading1" > Here are the List of ROOMS < /h1> <
        select className = "room-type" >
        <
        option > single(sleeps1, adult) < /option> <
        option > double(sleeps2, adult) < /option> <
        option > twin(sleeps2, adult) < /option> <
        option > triple(sleeps3, adult) < /option> <
        option > quad(sleeps4, adult) < /option> < /
        select >
        <
        /
        div >
    )
}

export default Room