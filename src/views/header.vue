<template>
  <div class="header">
    <router-link to="/">HOME</router-link>
    <router-link to="/cat2">cat2</router-link>
    <router-link to="/cat3">cat3</router-link>
    <router-link to="/catAll">catAll</router-link>
    <p>header</p>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border: solid;
  &:hover {
    background-color: rgb(164, 162, 255);
  }
}  
</style>