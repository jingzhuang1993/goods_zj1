<template>
    <div class="g-buynow">

        <h3 class="title">核对订单信息</h3>

        <div class="content">
            <div>
                <span>商品名称</span>
                <span>单价</span>
                <span>数量</span>
                <span>小计</span>
            </div>
            <div v-for="item,index in carData">
                <span>{{item.title}}</span>
                <span>￥{{item.price}}</span>
                <span>
                    {{item.count}}
                </span>
                <span>￥{{item.price*item.count}}</span>
            </div>

        </div>
        <div class="m-footer">
            <div>
                <p>订单金额
                    <span>￥{{buyNowPrice}}</span>
                </p>
            </div>
            <p>(免运费)</p>
            <div class="m-footbtn">
                <input type="button" value="返回购物车" @click="reshopCar" />
                <input type="button" value="立即下单" @click="settlement" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(["carData"]),
        ...mapGetters(["buyNowPrice"])
    },
    methods: {
        reshopCar() {
            this.$router.push("/shopCar");
        },
        settlement() {
            this.$store.dispatch("settlementAction")
        }
    }
}
</script>

<style scoped>
.g-buynow {
    width: 100%
}

.g-buynow .title {
    width: 70%;
    margin: 0px auto;
}

.g-buynow .content {
    width: 76%;
    margin: 20px auto
}

.g-buynow .content div {
    margin-bottom: 20px
}

.g-buynow .content div span {
    display: inline-block;
    width: 20%;
    text-align: center;
    font-size: 14px;
}

.g-buynow .content div span:first-of-type {
    width: 30%;
}

.g-buynow .m-footer {
    width: 76%;
    margin: 10px auto 35px;
    padding: 30px 0px 15px;
}

.g-buynow .m-footer p {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: right;
}

.g-buynow .m-footer p:first-of-type span {
    font-size: 24px;
    color: #ee0a3b;
}

.g-buynow .m-footer .m-footbtn {
    text-align: right;
}

.g-buynow .m-footer .m-footbtn input {
    display: inline-block;
    margin-top: 20px;
    box-sizing: border-box;
    width: 140px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 16px;
}

.g-buynow .m-footer .m-footbtn input:nth-of-type(1) {
    color: #333;
    border: 1px solid #ddd;
    background-color: #fff;
    margin-right: 15px;
}

.g-buynow .m-footer .m-footbtn input:nth-of-type(2) {
    background-color: #ee0a3b;
    color: #fff;
    border: 0;
}
</style>
