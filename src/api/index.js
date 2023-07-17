import {post, get} from '../utils/request';


/**
 * 获取导航数据
 * @param {*} params
 * @return {*}
 */
export const getNavList = (params) => get('/webapi/websitenavigation/selectColumnListByCode', params);
/**
 * getData
 * @param {*} params
 * @return {*}
 */
export const getData = (params) => get('/webapi/websitenavigation/selectColumnListByCode', params);