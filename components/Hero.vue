<template>
  <video-background
    id="hero"
    :src="require('@/assets/clip.webm')"
    :poster="require('@/assets/cover.jpg')"
    style="width: 100%; height: 100vh"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
  >
    <v-container fill-height>
      <v-row>
        <v-col cols="12" offset-md="3" md="6">
          <h4 class="text-h4 font-weight-light pb-6">Наши услуги</h4>
          <h3 class="text-h3 font-weight-bold pb-6">Веб-программирование</h3>
          <h3 class="text-h3 font-weight-bold pb-6">Мобильная разработка</h3>
          <h3 class="text-h3 font-weight-bold pb-6">Услуги DevOps</h3>
        </v-col>
      </v-row>
    </v-container>
  </video-background>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
