import React, { useEffect, useState } from 'react'
import './index.css'
import { reqDrugList } from '../../api/index'
import TabLeftList from '../../components/tab/tableftList'
import TabRightList from '../../components/tab/tabrightList'
import TabContainer from '../../components/tab/tabContainer'

export default function Drug() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [listData, setlistData] = useState([])
    const [activeRightListData, setActiveRightListData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await reqDrugList()
        setlistData(result.datas)
        setActiveRightListData(result.datas[activeIndex].drugItems)
    }

    const handleClick = (data) => {
        const { index } = data
        setActiveIndex(index)
        setActiveRightListData(listData[index].drugItems)
    }

    let leftList = listData.map((item, index) => {
        return (
            <TabLeftList activeIndex={activeIndex} index={index} content={item} handleClick={handleClick} key={index}></TabLeftList>
        )
    })
    let rightList = activeRightListData.map((item, index) => {
        return (
            <TabRightList key={item.id} content={item}></TabRightList>
        )
    })
    return (
        <div className="drug-container">
            <TabContainer
                renderLeft={leftList}
                renderRight={rightList}
            />
        </div>
    )
} 