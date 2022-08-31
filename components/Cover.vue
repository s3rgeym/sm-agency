<template>
  <section class="d-flex justify-center align-center page-cover">
    <video-background
      :src="require('@/assets/bg.webm')"
      :poster="require('@/assets/cover.jpg')"
      overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
      style="width: 100%; height: 100vh"
    >
      <v-container>
        <div class="text-h1 text-md-h2 font-weight-light cover font-weight-bold">
          <div>
            <a style="font-size: 18px; letter-spacing: 1.5px" href="#design" class="font-weight-light">Наши услуги</a>
          </div>
          <div class="mb-6"><a href="#mobile">Мобильная разработка</a></div>
          <div class="mb-6"><a href="#webdev">Создание веб-приложений</a></div>
          <div class="mb-6"><a href="#support">Техническая поддержка</a></div>
        </div>
      </v-container>
    </video-background>
  </section>
</template>
<style lang="sass" scoped>
.cover
  margin: auto
  width: fit-content
  a
    color: #fff
    text-decoration: none
</style>
