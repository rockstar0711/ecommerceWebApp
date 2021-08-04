<template>
  <v-app>
    <Header />
    <v-main>
      <child />
    </v-main>
    <MoBottomNav v-if="$isMobile()" />
  </v-app>
</template>

<script>
import MoBottomNav from '~/components/MoBottomNav'
import Header from '~/components/Header'
export default {
  name: 'BasicLayout',

  components: {
    MoBottomNav,
    Header
  }
}
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
