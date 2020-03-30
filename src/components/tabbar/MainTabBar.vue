<template>
  <div class="MainTabBar">
      <tab-bar>
      <tab-bar-item path="/home">
        <div slot="icon" class="el-icon-thumb"></div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <div slot="icon" class="el-icon-female"></div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <div slot="icon" class="el-icon-eleme"></div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div slot="icon" class="el-icon-edit"></div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./TabBar"
import TabBarItem from "./TabBarItem"

export default {
  name: 'MainTabBar',
  components: {
      TabBar,
      TabBarItem
  }
 }
</script>

<style scoped>
  
</style>