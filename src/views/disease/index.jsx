import React, { useEffect, useState } from 'react'
import './index.css'
import { reqDiseaseList } from '../../api/index'
import TabLeftList from '../../components/tab/tableftList'
import TabRightList from '../../components/tab/tabrightList'
import TabContainer from '../../components/tab/tabContainer'

export default function Disease() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [leftListData, setLeftListData] = useState([])
    const [allRightListData, setAllRightListData] = useState([])
    const [activeRightListData, setActiveRightListData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await reqDiseaseList()
        setLeftListData(result.types)
        setAllRightListData(result.disease)
        setActiveRightListData(filterRightListData(result.disease, result.types[activeIndex].id))
    }

    const filterRightListData = (data, id) => {
        return data.filter((item) => {
            return item.type === id
        })
    }
    const handleClick = (data) => {
        const {index, id} =data
        setActiveIndex(index)
        setActiveRightListData(filterRightListData(allRightListData, id))
    }

    let leftList = leftListData.map((item, index) => {
        return (
            <TabLeftList activeIndex={activeIndex} index={index} content={item} handleClick={handleClick} key={item.id}></TabLeftList>
        )
    })
    let rightList = activeRightListData.map((item, index) => {
        return (
            <TabRightList key={item.id} content={item}></TabRightList>
        )
    })
    return (
        <div className="disease-container">
            <TabContainer
                renderLeft={leftList}
                renderRight={rightList}
            />
        </div>
    )
} 