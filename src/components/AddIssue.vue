<template>
  <div id="app1" class="hero">
    <h1 class="vue-title">Share Your Problem</h1>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Select Category</label>
      <select id="category" name="category" class="form-control" type="text" v-model="category">
        <option value="null" selected disabled hidden>Choose category</option>
        <option value="Art">Art</option>
        <option value="Academy">Academy</option>
        <option value="Business">Business</option>
        <option value="Science">Science</option>
        <option value="LifeTrivia">LifeTrivia</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.text.$error }">
      <label class="form-control-label" name="text">Issue Body</label>
      <input class="form__input" type="text" v-model="text"/>
    </div>
    <div class="error" v-if="!$v.text.required">Body is Required</div>
    <div class="error" v-if="!$v.text.minLength">Body must have at least {{$v.text.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Submit</button>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your sharing!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
  </form>
  </div>
</template>

<script>
import IssueService from '@/services/IssueService'
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import { required, minLength } from 'vuelidate/lib/validators'
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)
export default {
  name: 'AddIssue',
  data () {
    return {
      category: 'Art',
      text: '',
      submitStatus: null
    }
  },
  validations: {
    text: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var issue = {
            category: this.category,
            text: this.text,
            status: false,
            solutions: []
          }
          this.issue = issue
          this.submitIssue(this.issue)
        }, 500)
      }
    },
    submitIssue: function (issue) {
      console.log('submitIssue!')
      console.log(issue)
      IssueService.postIssue(issue)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 60px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 50%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }

  label {
    display: inline-block;
    width: 200px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
    text-align: center;
  }
  p {
    margin-top: 20px;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }
  .error:focus {
    outline-color: #ffa519;
  }
</style>
