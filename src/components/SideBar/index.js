import {useEffect, useState} from "react"

const SideBar = () => {

    const [optionData, setOptionData] = useState({})

    useEffect(() => {
        fetch("http://localhost:3001/products/categories")
            .then(response => response.json())
            .then(data => {
                setOptionData(data)
            })
    }, [])

    let title = Object.keys(optionData)[0]
    // console.log(optionData)
    let characterOptionData = optionData.categories?.map((option) => {
        return <p>{option}</p>
    })

    return (
        <h5>
            {title}
            {characterOptionData}
        </h5>
    )
}

export default SideBar