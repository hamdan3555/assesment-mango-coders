<script setup>
import {ref} from 'vue'
  function LoginFunction() {
  console.log('Login Function Callled');
  //API CALL 
}

const loginDetails = ref({
  email: '',
  password: ''
})

</script>

<template>
    <div class="container h-100 login-view-padd">
        <div >
            <div >  
                <h4 style="font-size: 20px; font-weight: bold;"> Login .. </h4>
                <h5 style="font-size: 20px; font-weight: bold;"> Welcome Back </h5>
                <div style="margin-top: 20px;">
              <p >Email  </p>
               <input 
               v-model="loginDetails.email"
                      type="email"
                      placeholder="Enter your email"
                      aria-describedby="addon-wrapping">
                </div>
                <div style="margin-top: 5px;">
                  <p >Password  </p>
               <input 
               v-model="loginDetails.password"
                      type="password"
                      placeholder="Enter password"
                      aria-describedby="addon-wrapping">
                </div>
                <div style="margin-top: 20px;">
                  <button @click="LoginFunction()" color="primary">Login</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style>
body {
    background-color: rgb(250 245 243);
}

.brutalism-head1 {
    font-weight: 900;
    font-size: 60px;
}

.brutalism-head2 {
    font-weight: 900;
    font-size: 40px;
}

.login-view-padd {
    padding-top: 14vh;
}

hr {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 1.5px;
    background-color: black;
}
</style>