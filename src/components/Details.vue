<script setup>
import {useUserStore} from '../stores/user'
const store =useUserStore()
function LogOutFunction() {
  console.log('Log Out Function Callled');
  //API CALL 
}
</script>

<template>
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20%;">
    <div>
      <h2>USER DETAILS</h2>
      <div style="margin-top: 30px;">
          <p>User Email : {{store.email}}</p>
          <p style="margin-top: 5px;">User Password : You can not see password</p>
          <div style="margin-top: 10px;">
                  <button @click="LogOutFunction()" color="primary">Log Out</button>
                </div>
      </div>
    </div>
</div>
</template>
