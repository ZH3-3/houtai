<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTag from "../components/CommonTag.vue";

export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
};
</script>

<style lang="scss" scoped>
// @import "~@/assets/scss/reset"
.el-header {
  background-color: rgb(88, 88, 87);
}
.el-main {
  padding-top: 0;
}
</style>
