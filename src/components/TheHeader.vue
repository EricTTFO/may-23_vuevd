<template>
  <div class="header">
    <div class="logo">
      <i class="back"/>
    </div>
    <div class="tabs">
      <div class="item">
        <RouterLink to="/recommend">首页</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/category">分类</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/rank">榜单</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/search">搜索</RouterLink>
      </div>
    </div>
    <div class="user" @click="$router.push('/user')">
      <i class="iconfont icon-user"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
 
</style>
