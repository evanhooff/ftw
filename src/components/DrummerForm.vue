<template>
  <form
    class="needs-validation"
    :class="{ 'was-validated': validated }"
    novalidate
    @submit.prevent="sendForm"
  >
    <div class="form-row">
      <div class="col-md-3 mb-3">
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formData.name"
          required
          :class="{ 'input-filled': formData.name != '' }"
        >
        <label class="form-label" for="name">naMe</label>
      </div>
      <div class="col-md-3 mb-3">
        <input
          type="text"
          class="form-control"
          id="age"
          v-model="formData.age"
          :class="{ 'input-filled': formData.age != '' }"
        >
        <label class="form-label" for="age">Age</label>
      </div>
      <div class="col-md-4 mb-3">
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            :class="{ 'input-filled': formData.email != '' }"
            id="email"
            v-model="formData.email"
            aria-describedby="inputGroupPrepend"
            required
          >
          <label class="form-label" for="email">emAil</label>
          <div
            v-if="!$v.formData.email.invalid && !$v.formData.email.email"
            class="invalid-feedback"
          >Please provide a valid email address.</div>
        </div>
      </div>
      <div class="col-md-2">
        <button class="btn btn-light btn-block" type="submit" @click.prevent="sendForm">Go!</button>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";
import { simpleParser } from "mailparser";

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        age: "",
        email: ""
      },
      validated: false
    };
  },
  methods: {
    convertToFormData(data) {
      let formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    isValidForm() {
      this.$v.$touch();
      this.validated = true;
      if (this.$v.$invalid) {
        return false;
      }
      return true;
    },
    sendForm() {
      if (this.isValidForm() === true) {
        this.validated = false;
        const options = {
          method: "POST",
          headers: { "content-type": "application/form-data" },
          data: this.convertToFormData(this.formData),
          url: "/static/services/send-form.php"
        };
        axios(options)
          .then(response => {
            this.$router.push({ path: "thankyou" });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  validations: {
    formData: {
      name: {
        required
      },
      email: {
        required,
        email
      }
    }
  }
};
</script>
