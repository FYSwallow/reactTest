import React, {useEffect, useState} from 'react'
import './index.css'
import { reqItemList } from '../../api/index'
import ListItem from './../../components/listItem'

export default function List(props) {
    const [listData, setListData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const id = props.location.query.keyword
        const result = await reqItemList({classId: id})
        setListData(result.datas)
    }

    const renderList = listData.map((item) => {
        return <ListItem content={item} key={item.id}/>
    })

    return (
        <div className="list-container">
            {renderList}
        </div>
    )
}