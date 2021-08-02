<template>
  <v-app>
    <v-main>
      <child />
    </v-main>
    <MoBottomNav v-if="$isMobile()" />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import MoBottomNav from '~/components/MoBottomNav'

export default {
  name: 'MainLayout',

  components: {
    Navbar,
    MoBottomNav
  }
}
</script>
