<template>
  <div>
    this is menu real
    <div @click="router.push({name: 'page1'})">page 1</div>
    <div @click="router.push({name: 'page2'})">page 2</div>
    <div @click="router.push({name: 'page3'})">page 3</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MenuContainer'
}
</script>

<style>

</style>