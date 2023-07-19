import {post, get} from '../utils/request';


/**
 * 获取导航数据
 * @param {*} params
 * @return {*}
 */
export const getNavList = (params) => get('/webapi/websitenavigation/selectNavigationColumnList', params);
/**
 * getData
 * @param {*} params
 * @return {*}
 */
export const getData = (params) => get('/webapi/websitenavigation/selectColumnListByCode', params);

/**
 * 获取左侧导航类目
 * @param {*} params
 * @return {*}
*/
export const getLeftNavList = (params) => get('/webapi/websitenavigation/selectLeftWebsitenavigationList', params);

/**
 * 根据类目和显示数量获取文章
 * @param {*} params
 * @return {*}
*/
export const getArticleList = (params) => get('/webapi/websitenavigation/selectArticleList', params);
