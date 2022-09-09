<template>
  <v-form>
    <v-container id="contacts" fill-height>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.trim="form.firstName"
            :counter="31"
            label="Имя"
            @blur="$v.form.firstName.touch()"
            @input="$v.form.firstName.touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.trim="form.lastName"
            :counter="31"
            label="Фамилия"
            @blur="$v.form.lastName.touch()"
            @input="$v.form.lastName.touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.trim="form.email"
            label="Эл. почта"
            @blur="$v.form.email.touch()"
            @input="$v.form.email.touch()"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Contacts',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
      },
    }
  },
  validations: {
    form: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
    },
  },
}
</script>
