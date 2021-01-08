import  request from '../utils/request'

export function reqKeys() {
    return request({
        url: '/react/knowbase/keywords',
        method: 'get',
    })
}
export function reqSearch(data) {
    return request({
        url: '/react/knowbase/query',
        method: 'post',
        data
    })
}
export function reqMedExamList() {
    return request({
        url: '/react/knowbase/medExamList',
        method: 'get',
    })
}

export function reqDiseaseList() {
    return request({
        url: '/react/knowbase/diseaseList',
        method: 'get',
    })
}

export function reqDrugList() {
    return request({
        url: '/react/knowbase/drugList',
        method: 'get',
    })
}

export function reqItemList(data) {
    return request({
        url: '/react/knowbase/itemList',
        method: 'post',
        data: data
    })
}