<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheMenu from './components/TheMenu.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-top">
        <div class="container nav__container">
          <div class="nav-contact">
            <a class="nav-group" href="mailto: duyb2005667@student.ctu.edu.vn">
              <i class="fa-regular fa-envelope" style="color: #ffffff"></i
              ><span class="nav-contact__text">duyb2005667@student.ctu.edu.vn</span></a
            ><a class="nav-group" href="tel: (12345)67890">
              <i class="fa-solid fa-mobile-screen" style="color: #ffffff"></i
              ><span class="nav-contact__text">(12345)67890</span></a
            >
          </div>
          <div class="nav-action"></div>
        </div>
      </div>
      <div class="nav-bottom">
        <div class="container nav__container">
          <TheMenu />
          <div class="overlay tablet"></div>
          <a class="heading heading-lg logo header__logo"
            ><img src="./assets/images/logo3.svg" alt="logo"
          /></a>
          <button class="toggle-menu btn btn-sm mobile js-toggle-menu">
            <div class="toggle-menu__bars">
              <div class="toggle-menu__line"></div>
              <div class="toggle-menu__line"></div>
              <div class="toggle-menu__line"></div>
            </div>
          </button>
          <form class="search above-tablet" action="/products/search">
            <input class="search__input" type="text" name="keyword" />
            <button class="btn btn-primary btn-solid btn-sm search__btn" type="submit">
              <img src="./assets/images/base/search.svg" alt="search" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
  <TheFooter></TheFooter>
</template>

<style scoped></style>
