// 引入 css
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

import _ from 'lodash'

const sumRes = sum(10, 20)
// console.log('ENV', ENV)
console.log('sumRes', sumRes)

// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }

// 懒加载
// setTimeout(()=>{
//     import('./dynamic-data').then((res)=>{
//         console.log(res.default.message);
//     })
// },2000)
