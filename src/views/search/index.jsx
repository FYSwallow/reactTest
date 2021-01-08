import React, { useEffect, useState } from 'react'
import { Icon, ListView } from 'antd-mobile'
import SearchItem from './searchItem'
import './index.css'

import { reqSearch } from '../../api/index'

let initPageNo = 1, initPageSize = 10


export default function Search(props) {
    let initSearch = ''
    if (props.location.query && props.location.query.keyword) {
        initSearch = props.location.query.keyword
    }
    const [hasMore, setHasMore] = useState(true)
    const [searchKeyword, setSearchKeyword] = useState(initSearch)
    const [pageNo, setPageNo] = useState(initPageNo)
    const [searchList, setSearchList] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCnt, setPageCnt] = useState(0)
    const ds = new ListView.DataSource({
        rowHasChanged: () => true,
    })
    const [dataSource, setDataSource] = useState(ds)


    useEffect(() => {
        fetchData(initPageNo)
    }, [])

    useEffect(() => {
        setDataSource(dataSource.cloneWithRows(searchList))
        if (pageCnt === searchList.length) {
            setHasMore(false)
        } else {
            setHasMore(true)
        }
    }, [searchList])

    const onEndReached = (event) => {
        if (!loading && !hasMore) return
        fetchData((pageNo + 1))
    }
    const fetchData = async (paramPage) => {

        setLoading(true);
        const params = {
            keyword: searchKeyword,
            pageNo: paramPage || pageNo,
            pageSize: initPageSize
        }
        const result = await reqSearch(params)
        setLoading(false);
        setPageNo(params.pageNo)
        setPageCnt(result.cnt)

        if (paramPage === 1) {
            setSearchList([...[], ...result.datas])
        } else {
            setSearchList([...searchList, ...result.datas])
        }

    }

    const handlerChange = (event) => {
        setPageNo(initPageNo)
        setSearchKeyword(event.target.value)
    }
    const row = (rowData, sectionID, rowID) => {
        return <SearchItem info={rowData} key={rowID} />
    };

    return (
        <div className="search-container">
            <div className="search-title">
                <div className="title-search">
                    <input type="text" placeholder='请输入相关信息搜索' value={searchKeyword} onChange={(e) => handlerChange(e)} />
                    <Icon type="search" size="md" className="ico-search" onClick={() => fetchData(initPageNo)} />
                </div>
            </div>
            <div className="search-bd">
                <ListView
                    loading={loading}
                    dataSource={dataSource}
                    renderFooter={() => (<div style={{ padding: '0.15rem', textAlign: 'center' }}>
                        {loading ? '加载中...' : '已全部加载'}
                    </div>)}
                    renderRow={row}
                    initialListSize={10}
                    pageSize={10}
                    onEndReached={event => {
                        onEndReached()
                    }}
                    onEndReachedThreshold={10}
                    style={{
                        height: "100%",
                    }}
                />
                {/* <div className="search-list">
                    {searchItem}
                </div> */}
            </div>

        </div>

    )

}