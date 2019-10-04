<template>
  <div>
    <!-- 头部导航条 -->
    <header-nav></header-nav>
    <!-- 内容 -->
    <div class="container g-main1">
      <!-- 网页路径 -->
      <div class="m-rood-nav">
        <p>您当前的位置：</p>
        <ol class="breadcrumb">
          <li>
            <a href="index.html">首页</a>
          </li>
          <li>
            <a href="hotSall.html">地宝(扫地机器人)</a>
          </li>
          <li class="active">视觉导航DJ35</li>
        </ol>
      </div>
      <!-- 商品展示区 -->
      <detail-info></detail-info>
      <!-- 分享到 -->
      <de-share></de-share>
      <!-- 关联商品推荐 -->
      <de-about></de-about>
    </div>
    <!-- 标签页 -->
    <div class="container g-main3">
      <div class="row">
        <div class="col-md-9 col-xs-9 g-left-side">
          <!-- <div> -->
            <detail-switch></detail-switch>
            <!-- Nav tabs -->
            <!-- <ul class="nav nav-tabs" role="tablist">
              <li role="presentation">
                <router-link to="/detail" active-class="activeClass" exact>商品详情</router-link>
              </li>
              <li role="presentation">
                <router-link to="/detail/two" active-class="activeClass">详细参数</router-link>
              </li>
              <li role="presentation">
                <router-link to="/detail/three" active-class="activeClass">商品评论</router-link>
              </li>
              <li role="presentation">
                <router-link to="/detail/four" active-class="activeClass">商品咨询</router-link>
              </li>
            </ul> -->
            <!-- 子路由切换 -->
            <!-- <div class="tab-content">
              <router-view/>
            </div> -->
          <!-- </div> -->
        </div>
        <de-right></de-right>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import DetailInfo from '../components/detail/detailinfo'
import DeShare from '../components/detail/deShare'
import DeAbout from '../components/detail/deAbout'
import DetailSwitch from '../components/detail/detailSwitch'
import DeRight from '../components/detail/deRight'
export default {
  components: {
    HeaderNav,
    DetailInfo,
    DeShare,
    DeAbout,
    DetailSwitch,
    DeRight
  },
}
</script>

<style>
/*路径导航*/
.g-main1 .m-rood-nav {
  overflow: hidden;
  font-size: 16px;
  padding-top: 20px;
}

.g-main1 .m-rood-nav p {
  float: left;
  margin-top: 8px;
}

.g-main1 .m-rood-nav ol {
  float: left;
}

.g-main1 .m-rood-nav ol li a {
  color: #333333;
}

.g-main1 .breadcrumb {
  background: transparent;
}


</style>
