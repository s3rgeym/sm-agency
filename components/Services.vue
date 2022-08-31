<template>
  <section id="services" class="mb-16">
    <v-container>
      <div id="mobile" class="pt-16">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Мобильная разработка</h2>
            <h4 class="text-h4 mb-3">Разработка мобильных приложений с использованием технологии React Native</h4>
            <p class="tertiary--text text-h5">
              React Native ‒ это самый лучший выбор для быстрой разработки приложений для Android и iOS. Когда люди
              слышат про мобильную разработку под мобильные платформы, то она у них ассоциируется с Java/Kotlin. Но
              данные языки остаются не удел, когда заходит речь про React, который уже завоевал Web, а теперь покорил и
              мобильные платформы. И причина тому проста: скорость разработки на React выше в 3 раза, а время ‒ это
              деньги.
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
              Сайты сегодня это уже не набор скриптов на PHP, генерирующих HTML в перемешку с jQuery, как в середине
              нулевых, начале десятых. ‒ Это именно приложения со сложным интефейсом, что их роднит с десктопными и
              мобильными приложениями. Для разработки веб-приложений мы используем фреймворк Vue.js, который за долгие
              годы зарекомендовал себя как простой, но надежный инструмент с помощью которого можно создавать самые
              сложные пользовательские интерфейсы. За интерфейсом скрывается пользовательская часть сайта, которая
              называется фронтендом. Фронтенд взаимодействует с бекендом для передачи данных на сервер через API. API мы
              реализуем на языке программирования Python. Этот язык идеально подходит для написания любых серверных
              приложений благодаря понятному и лаконичному синтаксису, обилию фреймворков и библиотек.
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
            <h4 class="text-h4 mb-3">Оказываем услуги по поддержке уже имеющихся проектов, услуги DevOps</h4>
            <p class="tertiary--text text-h5">
              Услуги по развертыванию приложений и их технической поддержке с использованием Docker, Kubernetes на
              серверах под управлением Linux. У вас есть проект, Вам нужем надежный партнер, но нет лишних 240к чтобы
              нанять девопс-инженера на фуллтайм либо считаете не рациональным содержать "специалиста", который 95%
              времени сидит на Пикабу, так как реальный объем требуемой работы не превышает 10 часов в месяц? ‒ Вы
              можете отдать проект на обслуживание нам, мы побзаботимся о нем.
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
