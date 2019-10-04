<template>
    <div class="poplist">
        <!-- <div class="poplist u-right" v-for="item3,i in popData">
                                <div class="goods-subcate-block tags">
                                    <h3>帮你选机</h3>
                                    <div class="subcate-items">
                                        <p>
                                            <a target="_blank" href="#" v-for="item4 in item3[0]">{{item4}}</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="goods-subcate-block hot">
                                    <h3>热门型号</h3>
                                    <div class="subcate-items">
                                        <a href="#" v-for="item5 in item3[1]">
                                            <img :src="item5.pic">
                                            <span>{{item5.title}}</span>
                                        </a>
                                    </div>
                                </div>
                            </div> -->
        <!-- 第一个 -->
        <div class="u-right" v-show="popData[0]">
            <div class="goods-subcate-block tags">
                <h3>帮你选机</h3>
                <div class="subcate-items">
                    <p>
                        <a target="_blank" href="#">年度重磅新品</a>
                        <a target="_blank" href="#">以旧换新</a>
                        <a target="_blank" href="#">热销爆款</a>
                        <a target="_blank" href="#">视觉导航新品</a>
                        <a target="_blank" href="#">高性价比</a>
                        <a target="_blank" href="#">规划扫拖</a>
                        <a target="_blank" href="#">毛发克星</a>
                    </p>
                </div>
            </div>
            <div class="goods-subcate-block hot">
                <h3>热门型号</h3>
                <div class="subcate-items">
                    <a href="#"><img src="../assets/imgs/shouye/a-1.png">
                        <span>T5 Max</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/a-2.png">
                        <span>DJ65</span>
                    </a>
                    <a href="hotSall.html"><img src="../assets/imgs/shouye/a-3.png">
                        <span>DJ35</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/a-4.png">
                        <span>DG70</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- 第二个 -->
        <div class="u-right" v-show="popData[1]">
            <div class="goods-subcate-block tags">
                <h3>帮你选机</h3>
                <div class="subcate-items">
                    <p>
                        <a target="_blank" href="#">年度新品</a>
                        <a target="_blank" href="#">热销爆款</a>
                        <a target="_blank" href="#">好评推荐</a>
                        <a target="_blank" href="#">高层必备</a>
                        <a target="_blank" href="#">规划擦窗</a>
                        <a target="_blank" href="#">可擦门窗</a>
                    </p>
                </div>
            </div>
            <div class="goods-subcate-block hot">
                <h3>热门型号</h3>
                <div class="subcate-items">
                    <a href="#"><img src="../assets/imgs/shouye/u-info1.png">
                        <span>W880</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info2.png">
                        <span>W836</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info3.png">
                        <span>W950</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- 第3个 -->
        <div class="u-right" v-show="popData[2]">
            <div class="goods-subcate-block tags">
                <h3>帮你选机</h3>
                <div class="subcate-items">
                    <p>
                        <a target="_blank" href="#">智能除霾</a>
                        <a target="_blank" href="#">人气推荐</a>
                        <a target="_blank" href="#">移动净化</a>
                        <a target="_blank" href="#">规划净化</a>
                        <a target="_blank" href="#">APP智控</a>
                        <a target="_blank" href="#">有效除甲醛</a>
                    </p>
                </div>
            </div>
            <div class="goods-subcate-block hot">
                <h3>热门型号</h3>
                <div class="subcate-items">
                    <a href="#"><img src="../assets/imgs/shouye/u-info3-1.png">
                        <span>W880</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info3-2.png">
                        <span>W836</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- 第4个 -->
        <div class="u-right" v-show="popData[3]">
            <div class="goods-subcate-block tags">
                <h3>帮你选机</h3>
                <div class="subcate-items">
                    <p>
                        <a target="_blank" href="#">智能管家</a>
                        <a target="_blank" href="#">实时监控</a>
                        <a target="_blank" href="#">规划清扫</a>
                        <a target="_blank" href="#">净化空气</a>
                        <a target="_blank" href="#">家庭安防</a>
                        <a target="_blank" href="#">家电遥控</a>
                    </p>
                </div>
            </div>
            <div class="goods-subcate-block hot">
                <h3>热门型号</h3>
                <div class="subcate-items">
                    <a href="#"><img src="../assets/imgs/shouye/u-info4-1.png">
                        <span>W880</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info4-2.png">
                        <span>W836</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- 第5个 -->
        <div class="u-right" v-show="popData[4]">
            <div class="goods-subcate-block tags">
                <h3>帮你选机</h3>
                <div class="subcate-items">
                    <p>
                        <a target="_blank" href="#">地宝配件</a>
                        <a target="_blank" href="#">窗宝配件</a>
                        <a target="_blank" href="#">沁宝配件</a>
                        <a target="_blank" href="#">管家配件</a>
                        <a target="_blank" href="#">家电遥控</a>

                    </p>

                </div>
            </div>
            <div class="goods-subcate-block hot">
                <h3>热门型号</h3>
                <div class="subcate-items">
                    <a href="#"><img src="../assets/imgs/shouye/u-info5-1.png">
                        <span>边刷</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info5-2.png">
                        <span>抹布</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info5-3.png">
                        <span>滚刷</span>
                    </a>
                    <a href="#"><img src="../assets/imgs/shouye/u-info5-4.png">
                        <span>滤材</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from "vuex"
export default {
    props: ["popData"],
    // computed: {
    //     ...mapState(["popLists"])
    // }
}
</script>

<style>
/*右边详情列表*/

.poplist .u-right {
    position: absolute;
    top: 0px;
    left: 290px;
    width: 720px;
    background: #e8eaec;
    padding: 20px 50px;
    height: 360px;
    /* display: none; */
    border: 1px solid red;
}






/* .poplist.u-right {
    top: -72px;
}

.poplist.u-right {
    top: -144px;
}

.poplist.u-right {
    top: -216px;
}

.poplist.u-right {
    top: -288px;
} */

.poplist .u-right .tags h3,
.poplist .u-right .hot h3 {
    font-size: 16px;
    color: #ee0a3b;
    padding-bottom: 20px;
    border-bottom: 1px solid #dadbdd;
    margin: 0px;
}

.poplist .u-right .tags a {
    display: inline-block;
    color: #747577;
    font-size: 16px;
    margin: 15px 45px 0px 0px
}

.poplist .u-right .tags p {
    padding-top: 15px;
    padding-bottom: 0px;
}

.poplist .u-right .tags a:hover {
    color: #ee0a3b;
    text-decoration: none;
}

.poplist .u-right .hot h3 {
    padding-top: 20px;
    margin-bottom: 20px;
}

.poplist .u-right .hot a {
    display: inline-block;
    color: #727375;
    font-size: 14px;
    text-align: center;
    width: 90px;
    margin-right: 60px;
}

.poplist .u-right .hot a>img {
    margin-bottom: 10px;
}

.poplist .u-right .hot a:hover {
    color: #ee0a3b;
    text-decoration: none;
}

.poplist .u-right .hot a:last-child {
    margin-right: 0px;
}
</style>
