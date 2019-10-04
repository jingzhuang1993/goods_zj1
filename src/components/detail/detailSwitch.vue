<template>
    <!-- <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation">
                                            <span active-class="activeClass" exact>商品详情</span>
                                        </li>
                                        <li role="presentation">
                                            <span active-class="activeClass">详细参数</span>
                                        </li>
                                        <li role="presentation">
                                            <span active-class="activeClass">商品评论</span>
                                        </li>
                                        <li role="presentation">
                                            <span active-class="activeClass">商品咨询</span>
                                        </li>
                                    </ul> -->
    <div>
        <span>商品详情</span>
        <span>详细参数</span>
        <span>商品评论</span>
        <span>商品咨询</span>

        <de-switch1></de-switch1>
        <de-switch2></de-switch2>
        <de-switch3></de-switch3>
        <de-switch4></de-switch4>

    </div>
</template>

<script>
import DeSwitch1 from './deSwitch1'
import DeSwitch2 from './deSwitch2'
import DeSwitch3 from './deSwitch3'
import DeSwitch4 from './deSwitch4'
export default {
    data() {
        return {
            // isShow: false,
            // idx: 0,
            // list: [
            //     { "id": 1, title: "商品详情" },
            //     { "id": 2, title: "详细参数" },
            //     { "id": 3, title: "商品评论" },
            //     { "id": 4, title: "商品咨询" }
            // ]
        }
    },
    methods: {
        // handle(index) {
        //     this.idx = index
        // }
    },
    components: {
        DeSwitch1,
        DeSwitch2,
        DeSwitch3,
        DeSwitch4
    }
}
</script>

<style scoped>
.nav-tabs>li .activeClass {
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
}
</style>
