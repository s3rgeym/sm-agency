<template>
  <v-app-bar fixed>
    <v-toolbar-title>
      <v-btn plain to="/" nuxt>SM Agency</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="(link, index) in links" :key="index" text :to="link.to">
        {{ link.label }}
      </v-btn>
    </v-toolbar-items>
    <v-menu>
      <template #activator="{ on }">
        <v-btn icon class="hidden-md-and-up" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" text :to="link.to">
          {{ link.label }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      links: [
        { to: '#hero', label: 'О нас' },
        { to: '#services', label: 'Услуги' },
        { to: '#contacts', label: 'Контакты' },
      ],
    }
  },
}
</script>
