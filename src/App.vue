<script setup>


</script>

<template>
  <div>
    <ul class="menu">
      <li><RouterLink to="/weditor" class="">w-editor</RouterLink></li>
      <li><RouterLink to="/editorjs" class="">editorjs</RouterLink></li>
    </ul>
  </div>
<router-view></router-view>
</template>

<style scoped>
.menu {
  display: flex;
  direction: 'row';  
  background-color: beige;
}
.menu > li {
  margin: 0 20px;
}
</style>