<template>
  <section id="services" class="mb-16">
    <v-container>
      <div id="mobile" class="pt-16">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Мобильная разработка</h2>
            <h4 class="text-h4 mb-3">Разработка мобильных приложений с использованием технологии React Native</h4>
            <p class="tertiary--text text-h5">
              React Native ‒ это самый лучший выбор для быстрой разработки приложений для Android и iOS. Если вам нужно
              мобильное приложнение, то вы попали по адресу.
            </p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/mobile.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#webdev">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15">
              <v-img contain :src="require('~/assets/img/mobile.png')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div id="webdev" class="pt-16">
        <v-row>
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15">
              <v-img contain :src="require('~/assets/img/webdev.png')"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Разработка веб-приложений</h2>
            <h4 class="text-h4 mb-3">Разработка веб-приложений с использованием Vue.js и Python</h4>
            <p class="tertiary--text text-h5">
              Сайты сегодня это уже не набор скриптов на PHP, генерируемых HTML в перемешку с jQuery, как в середине
              нулевых, начале десятых. ‒ Это именно приложения со сложным интефейсом, что их роднит с десктопными и
              мобильными приложениями. Для разработки веб-приложений мы используем фреймворк Vue.js, который за долгие
              годы зарекомендовал себя как простой и надежный инструмент, с помощью которого можно создавать самые
              сложные пользовательские интерфейсы. Данный интерфейс принято называть фронтом. За фронтом всегда
              скрывается бэкенд, с которым фронт взаимодействует через API. API мы реализуем на языке программирования
              Python.
            </p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/webdev.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#support">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <div id="support" class="pt-16">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Техническая поддержка</h2>
            <h4 class="text-h4 mb-3">Оказываем услуги по поддержке уже имеющихся проектов</h4>
            <p class="tertiary--text text-h5">
              Услуги по развертыванию приложений и их технической поддержке с использованием Docker, Kubernetes.
              Поддерживаем только Linux сервера.
            </p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/support.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#portfolio">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15">
              <v-img contain :src="require('~/assets/img/support.png')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>
