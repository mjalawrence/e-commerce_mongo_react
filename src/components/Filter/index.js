import {useEffect, useState} from "react";
import './Filter.scss'

const Filter = ({mode}) => {

    const [optionData, setOptionData] = useState({})
    const [title, setTitle] = useState('')

    const sidebar_title = {mode}.mode

    useEffect(() => {
        const help = {mode}.mode
        fetch(`http://localhost:3001/products/${sidebar_title}`)
            .then(response => response.json())
            .then(data => {
                setOptionData(data)
            })
    }, [])

    useEffect(() => {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        if (Object.keys(optionData).length !== 0) {
            let new_title = Object.keys(optionData)[0]
            console.log(Object.keys(optionData).length)
            let caps_title = capitalizeFirstLetter(new_title)
            console.log(caps_title)
            setTitle(caps_title)
        }

    }, [optionData])

    let filters = optionData[mode]?.map((option, index) => {
        return <div key={index}>
            <label>
            <input type="radio" name={title} value={option} />
            {option}</label>
        </div>
    })

    return (
        <div className="side_bar_text">
            <div className="title">
                {title}
            </div>
            {filters}
        </div>
    )
}

export default Filter