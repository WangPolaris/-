<template>
    <div class="tab-bar-item" @click="itemClick()">
        <div :style="activeStyle">
            <slot name="icon"></slot>
        </div>
        <div  :style="activeStyle">
            <slot name="item-text"></slot>
            <!-- 插槽是替换模式 在插槽外边都加一层div，添加属性-->
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: "red"
        }
    },
    //传给父组件
    data(){
        return{
            //isActive: true,
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
            //indexOf返回某个指定的字符串值在字符串中首次出现的位置,如果要检索的字符串值没有出现，则该方法返回 -1。
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
       toggleClick: function(){
           this.isActive = !this.isActive;
       },
       itemClick: function(){
           this.$router.replace(this.path);
           //console.log("itemClick");       
       } 
    },
}
</script>

<style scoped>
    .tab-bar-item{
    text-align: center;
    flex: 1;
    height: 49px;
    font-size: 14px;
    /* line-height:49px; */
  }
  /* .active{
      color: red;

  } */


</style>
// 注意图片下面就会有3个像素的，用vertical-align:middle去掉