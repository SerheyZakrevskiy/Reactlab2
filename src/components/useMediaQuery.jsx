import {useState, useEffect} from 'react'
import React from 'react';


const UseMediaQuery = () => {

    // const [width, setWidth] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // })

    if (window.innerWidth < 1200) {
        console.log('Екран Змінився')
    }
    else {
        console.log("Екран НЕ змінився")
    }

}

export default UseMediaQuery;