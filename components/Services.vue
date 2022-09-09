<template>
  <v-container id="services" class="align-content-center text-center" fill-height>
    <v-row>
      <v-col>
        <h2 class="text-h2 font-weight-bold">{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="(item, index) in items" :key="index" cols="12" md="3">
        <v-card flat>
          <v-card-title class="justify-center">{{ item.title }}</v-card-title>
          <v-card-text v-html="item.text" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Services',
  data: () => ({
    title: 'Наши услуги',
    items: [
      {
        title: 'Веб-программирование',
        text: `<p>Создание веб-приложений с использованием Vue.js и FastAPI.</p>`,
      },
      {
        title: 'Мобильная разработка',
        text: `<p>Создание мобильных приложений с использованием React Native.</p>`,
      },
      {
        title: 'Услуги DevOps',
        text: `<p>Разворачивание серверных приложений с помощью Docker и Kubernetes.</p>`,
      },
    ],
  }),
}
</script>
