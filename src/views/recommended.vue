<template>
  <div>
    <!-- 头部导航条 -->
    <header-nav></header-nav>
    <!--排序-->
    <div class="container g-sorting">
      <ul>
        <li>
          <a href="#">综合</a>
        </li>
        <li>
          <a href="#">评分↑</a>
        </li>
        <li>
          <a href="#">销量↑</a>
        </li>
        <li>
          <a href="#">价格↑</a>
        </li>
        <li>
          <a href="#">上架时间↑</a>
        </li>
      </ul>
    </div>
    <!-- 内容 -->
    <div class="container g-suolueTu3">
      <div class="row">
        <div class="col-xs-6 col-md-3 m-left">
          <img src="../assets/imgs/shouye/index_img_15646239672151.jpg" />
        </div>
        <div class="col-xs-6 col-md-9 m-right">
          <div class="row">
            <div class="col-xs-6 col-md-3 f-info" v-for="item,index in indexThumbnail3">
              <p>
                <!-- <router-link :to="'/detail/'+item.id"> -->
                <router-link :to="'/detail/'+item.id">
                  <img :src="item.pic" alt="" />
                </router-link>
              </p>
              <p>
                <a href="#">{{item.title}}</a>
              </p>
              <p>{{item.descp}}</p>
              <p>
                <i>￥</i>{{item.price}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import { mapState } from "vuex"

export default {
  components: {
    HeaderNav
  },
  computed: {
    ...mapState(["indexThumbnail3"])
  }
}
</script>

<style scoped>
.g-sorting {
  border: 1px solid #dfdfdf;
  background: #f5f5f5;
  padding-left: 0px;
  margin-bottom: 40px;
  margin-top: 40px;
}

.g-sorting li {
  font-size: 17px;
  color: #333333;
  float: left;
  padding: 15px 20px;
}

.g-sorting li a {
  color: #333333;
  text-decoration: none;
}

.g-sorting li:hover {
  background: white;
}

.g-sorting li:hover a {
  color: #ee0a3b;
}

.g-suolueTu3 .m-left img {
  width: 100%;
  height: 615px;
}

.g-suolueTu3 .m-right .f-info {
  width: 23%;
  height: 300px;
  background: white;
  margin-right: 17px;
  margin-bottom: 15px;
}

.g-suolueTu3 .m-right .f-info:last-child {
  margin-right: 0px;
}

.g-suolueTu3 .m-right .f-info p {
  text-align: center;
}

.g-suolueTu3 .m-right .f-info p img {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
}

.g-suolueTu3 .m-right .f-info p:nth-child(2) a {
  margin-bottom: 12px;
  font-size: 15px;
  color: #263746;
}

.g-suolueTu3 .m-right .f-info p:nth-child(3) {
  font-size: 15px;
  color: #828282;
  margin-bottom: 25px;
}

.g-suolueTu3 .m-right .f-info p:nth-child(4) {
  font-size: 15px;
  color: #ee0a3b;
}

.g-suolueTu3 .m-right .f-info p:nth-child(4) i {
  font-style: normal;
}

.g-suolueTu3 .m-right .f-info:hover {
  box-shadow: 0px 0px 10px #cac7c7;
  transform: translateY(-5px);
  transition: 0.3s linear;
}
</style>
