<script setup>
defineProps({
  title: String,
  caption: String,
  desc: String,
  imgSrc: String,
  btnText: {
    type: String,
    default: 'view all products'
  },
  alt: {
    type: String,
    default: 'Furniture'
  }
})
</script>
<template>
  <section class="banner-stick container">
    <div class="banner-stick__content font-primary obs-transition fade">
      <h3 class="banner-stick__title">{{ title }}</h3>
      <p class="banner-stick__caption">{{ caption }}</p>
      <p class="banner-stick__desc font-secondary">{{ desc }}</p>
      <a href="poplink" class="banner-stick__cta btn btn-md btn-solid btn-primary">{{ btnText }}</a>
    </div>
    <div class="banner-stick__img"></div>
    <img :src="imgSrc" loading="lazy" :alt="alt" />
  </section>
</template>
