<template>
  <v-main>
    <Hero />
    <Services />
    <Contacts />
  </v-main>
</template>

<script>
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contacts from '@/components/Contacts'

export default {
  name: 'Index',
  components: { Hero, Services, Contacts },
}
</script>

<style lang="sass">
// Грязный хук
// С height=100% неправильно работает
.fill-height
  height: 100vh !important
</style>
