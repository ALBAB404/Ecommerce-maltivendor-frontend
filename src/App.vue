<script setup>

  import { headerpart, NavBar, cartSideBar, mobileManu, newsLetter, footer } from '@/components';


</script>


<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>
    
    <!-- header part -->
    <headerpart />
    <!-- Nav Bar -->
    <NavBar />

  
    <!-- Cart Side Bar -->
    <cartSideBar /> 
     <!-- Mobile Manu -->
     <mobileManu />

    <!-- login modal -->
    

    <router-view></router-view>

    <!-- News Latter -->
    <newsLetter />


    <footer />


  </div>
</template>
