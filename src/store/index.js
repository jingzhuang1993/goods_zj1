import Vue from "vue"
import Vuex from "vuex"
import { pops, indexCarousel, indexThumbnail1, indexThumbnail2, indexThumbnail3, indexThumbnail4, oldCarousel, oldJumu3List, oldJumu6List, reAboutList, reRightList, reSwitch1, reSwitch2List, sortList } from '../datas/goodsdata'
Vue.use(Vuex);

let store = new Vuex.Store({
    // 存储数据
    state: {
        pops,

        indexCarousel,
        indexThumbnail1,
        indexThumbnail2,
        indexThumbnail3,
        indexThumbnail4,
        oldCarousel,
        oldJumu3List,
        oldJumu6List,
        reAboutList,
        reRightList,
        reSwitch1,
        reSwitch2List,
        sortList,
        // isnameShow: false,
        // loginName: "",
        carData: [],
        numsel: 0,
        isMallShow: false,
        showHeadernav: false,
        buyNowData: []
    },
    mutations: {
        // 加入购物车
        addCart(state, data) {
            // 如果商品存在购物车中，加数量，如果商品不再购物车中，加种类
            let boff = true;
            state.carData.forEach((goods) => {
                if (goods.id == data.onegoods.id) {
                    goods.count += data.num;
                    boff = false;
                }
            })
            if (boff) {
                let goodsData = data.onegoods;
                // 手动添加
                Vue.set(goodsData, "count", data.num);
                Vue.set(goodsData, "flag", false);
                state.carData.push(goodsData);
            }
        },
        // 修改购物车数据
        changeNum(state, data) {
            if (data.flag == 1) {
                state.carData[data.index].count--;
                if (state.carData[data.index].count < 1) {
                    state.carData.splice(data.index, 1);
                }
            } else if (data.flag == 2) {
                state.carData[data.index].count++;
            }
        },
        // 删除商品
        delGood(state, data) {
            state.carData.splice(data.index, 1);
        },
        // 清空购物车
        delAll(state) {
            state.carData = []
        },
        // 全选
        seleAll(state) {
            state.isMallShow = !state.isMallShow
            for (let item of state.carData) {
                item.flag = state.isMallShow;
            }
            state.numsel = state.carData.filter(item => item.flag == true).length;
        },
        // 单选
        seleOne(state, data) {
            state.carData[data.index].flag = !state.carData[data.index].flag;
            state.numsel = state.carData.filter(item => item.flag == true).length;
            if (state.numsel == state.carData.length) {
                state.isMallShow = true;
            } else {
                state.isMallShow = false;
            }
        },
        // 结算
        settleAll(state) {
            state.carData = [];
            state.isMallShow = false;
        }
    },
    actions: {
        addAction(context, data) {
            context.commit("addCart", data)
        },
        changeAction(context, data) {
            context.commit("changeNum", data)
        },
        delAction(context, data) {
            context.commit("delGood", data)
        },
        delAllAction(context) {
            context.commit("delAll")
        },
        selectallAction(context) {
            context.commit("seleAll")
        },
        selectOneAction(context, data) {
            context.commit("seleOne", data)
        },
        settlementAction(context) {
            context.commit("settleAll")
        }

    },
    getters: {
        totalCount(state) {
            return state.carData.filter(item => item.flag == true).reduce((sum, item) => sum + item.count, 0)
        },
        totalPrice(state) {
            return state.carData.filter(item => item.flag == true).reduce((totalPri, item) => totalPri + item.count * item.price, 0)
        },
        buyNowPrice(state) {
            return state.carData.reduce((totalPri, item) => totalPri + item.count * item.price, 0)
        }
    }

})
export default store