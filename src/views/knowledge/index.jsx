import React, { useEffect, useState } from 'react'
import './index.css'
import { reqMedExamList } from '../../api/index'
import  TabLeftList from '../../components/tab/tableftList'
import  TabRightList from '../../components/tab/tabrightList'
import TabContainer from '../../components/tab/tabContainer'

export default function Knowledge() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [leftListData, setLeftListData] = useState([])
    const [allRightListData, setAllRightListData] = useState([])
    const [activeRightListData, setActiveRightListData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await reqMedExamList()
        setLeftListData(result.depts)
        setAllRightListData(result.orgs)
        setActiveRightListData(filterOrgsList(result.orgs, result.depts[activeIndex].id))
    }

    const filterOrgsList = (data, id) => {
        return data.filter((item) => {
            return item.deptid === id
        })
    }
    const handleClick = (data) => {
        const {index, id} =data
        setActiveIndex(index)
        setActiveRightListData(filterOrgsList(allRightListData, id))
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
        <div className="knowledge-container">
            <TabContainer
                renderLeft = {leftList}
                renderRight = {rightList}
            />
        </div>
    )
} 