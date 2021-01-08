import React, { useState, useEffect } from 'react'
import { Icon } from 'antd-mobile'
import './index.css'
import { reqKeys } from '../../api/index'
import KeyItems from './components/keywordItem'
import KnowledgeItems from './components/knowledgeItem'
import { Link } from 'react-router-dom'

export default function Home() {
    const [keyList, setKeyList] = useState([])
    const knowledgeList = [
        {
            category: 'knowledge',
            title: '体检知识库',
            imgSrc: '//weixin.ehm.pension.taikang.com/reactPage/knowledge/dist/img/channel-tijian.df3c08e.png'
        },
        {
            category: 'disease',
            title: '疾病知识库',
            imgSrc: '//weixin.ehm.pension.taikang.com/reactPage/knowledge/dist/img/channel-jibing.44b42d1.png'
        },
        {
            category: 'drug',
            title: '药品知识库',
            imgSrc: '//weixin.ehm.pension.taikang.com/reactPage/knowledge/dist/img/channel-yaopin.eb99467.png'
        },
        {
            category: 'question',
            title: '常见问题知识库',
            imgSrc: '//weixin.ehm.pension.taikang.com/reactPage/knowledge/dist/img/channel-wenti.183f782.png'
        },
    ]
    useEffect(() => {
        async function fetchData() {
            const { datas } = await reqKeys()
            if (datas) {
                setKeyList(datas)
            }
        }
        fetchData()
    }, [])

    let keywordsList = keyList.map((item) => {
        return <KeyItems info={item} key={item.id} />
    })
    let KnowledgeBoxList = knowledgeList.map((item, index) => {
        return <KnowledgeItems info={item} key={index} />
    })

    return (
        <div className="home-container">
            <div className="home-title">
                <Link to={{
                    pathname: '/search',
                }} style={{ color: 'black' }}>
                    <div className="title-search">
                        请输入相关信息搜索
                    <Icon type="search" size="md" className="ico-search" />
                    </div>
                </Link>
            </div>
            <div className="search-tag-list clearfix">
                {keywordsList}
            </div>
            <div className="knowledge-warpper">
                {KnowledgeBoxList}
            </div>
        </div>
    )
}