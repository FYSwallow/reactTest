import axios from 'axios'
import { Toast } from 'antd-mobile'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        console.log(config)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 0) {
            Toast.fail('获取数据失败', 1500)
        }
        return res.data
    },
    error => {
        Toast.fail('加载数据出错', 1500)
        return Promise.reject(error)
    }
)

export default service