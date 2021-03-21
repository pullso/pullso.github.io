<template lang="pug">
  .container
    .row.justify-content-center
      .col-md-8
        .card
          h3 Login
          .card-body
            .error--text(v-if='error') {{error}}

            v-form(action='#' @submit.prevent='submit')
              v-row
                .col-md-6
                  v-text-field#email.form-control(
                    type='email'
                    name='email'
                    label='Email'
                    value
                    required autofocus
                    v-model='form.email'
                  )

              v-row
                .col-md-6
                  v-text-field#password.form-control(
                    label='Password'
                    type='password'
                    name='password' required
                    v-model='form.password'
                  )

              v-row
                v-btn.primary.ml-2(type='submit') Login
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: 'Home' });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
