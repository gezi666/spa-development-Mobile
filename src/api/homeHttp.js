import { get,post } from './api'
export const HomeHttp = {
    /* 测试 */
    queryList(params){
        return get('mob/query/list', params);
    },
};
