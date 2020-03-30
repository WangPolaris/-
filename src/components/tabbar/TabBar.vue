<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  /* x偏移量 y偏移量 模糊程度 颜色  */
}
</style>
