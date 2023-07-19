<template>
    <div>
        <form action="review-form" @submit.prevent="onSubmit"></form>
      <h3>HELP</h3>
      <label for="h" >Name:</label>
      <input id="h" v-model="h">
  
      <label for="review"></label>
      <textarea  v-model="review"  id="review"></textarea>
    
  
      <input class="button" type="submit" value="Submit">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return{
        h: '',
        review: ' ',
  
      }
    },
    methods: {
     onSubmit() {
      let prodReview = {
        h: this.h,
        review: this.review,
  
      }
      this.$emit('rew-sub',prodReview)
      this.h =''
      this.review = ''
     }
    }
  };
  </script>
  
  <style>
 
  
  </style>