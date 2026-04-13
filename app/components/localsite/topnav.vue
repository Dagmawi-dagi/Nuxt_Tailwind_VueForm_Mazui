<script setup>
const { setTheme } = use_set_theme()

</script>

<template>
  <nav>
    <div class="container">
      <img @click="$router.push('/')" src="/assets/images/rodas-logo.png" alt="logo" >
        <MazSwitch
          @click="setTheme"
        />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '/assets/style/scss/localsite/topnav.scss' as *;
</style>