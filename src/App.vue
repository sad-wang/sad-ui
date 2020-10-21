<template>
  <div>Nav
    <router-link to="/">index</router-link> |
    <router-link to="/kepler">kepler</router-link>
  </div>

  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>
