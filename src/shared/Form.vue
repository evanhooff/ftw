<template>
<form class="needs-validation" :class="{ 'was-validated': validated }" novalidate @submit.prevent="sendForm">
  <div class="form-row">
    <div class="col-md-3 mb-3">
      <input type="text" class="form-control" id="name" v-model="formData.name" required>
      <label class="form-label" for="name">Name</label>
    </div>
    <div class="col-md-2 mb-3">
      <input type="text" class="form-control" id="age" v-model="formData.age">
      <label class="form-label" for="age">Age</label>
    </div>
    <div class="col-md-4 mb-3">
      <div class="input-group">
        <input type="email" class="form-control" id="email" v-model="formData.email" aria-describedby="inputGroupPrepend" required>
        <label class="form-label" for="email">Email</label>
        <div v-if="!$v.formData.email.invalid && !$v.formData.email.email" class="invalid-feedback">
          Please provide a valid email address.
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <button class="btn btn-primary" type="submit" @click.prevent="sendForm">GO!</button>
    </div>
  </div>
</form>
</template>
<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';
export default {
  name: 'ContactForm',
  data() {
      return {
          formData: {
              name: '',
              age: '',
              email: ''
          },
          validated: false
      }
  },
  methods: {
      convertToFormData(data) {
        let formData = new FormData();
        for(let key in data) {
            formData.append(key, data[key]);
        }
        return formData;
      },
      sendForm() {
        this.$v.$touch();
        this.validated = true;
        
        if (this.$v.$invalid) {
          console.log('error');
        } else {
          this.validated = false;
          const options = {
            method: 'POST',
            headers: { 'content-type': 'application/form-data' },
            data: this.convertToFormData(this.formData),
            url: '/static/services/send-form.php',
          };
          axios(options)
            .then((response) => {
                console.log('gelukt', response);
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
      age: {
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

<style>
label {
  display: block;
}

select,
textarea,
input {
  max-width: 100%;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
}

input[type="submit"] {
  border: none;
  cursor: pointer;
}

.form-label {
  position: absolute;
  top: 6px;
  left: 20px;
  color: #999;
  cursor: text;
  transition: all 0.15s ease-in-out 0s;
}

.form-control:focus ~ .form-label,
.was-validated .form-control:valid ~ .form-label {
  top: -1.5em;
  left: 0;
  font-size: 0.8em;
  color: inherit;
  cursor: pointer;
}
</style>
