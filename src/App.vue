<template>
  <div id="app">
    <nav>
      <router-link to="/">Names</router-link> |
      <router-link to="/random-jokes">Random Jokes</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles/App.scss" />
