<script setup>
defineProps({
  heading: String,
  author: String,
  date: String,
  desc: String,
  imgSrc: String
})
</script>

<template>
  <figure class="home-blog-item obs-transition fade">
    <div class="home-blog-item__img">
      <img :srcSet="imgSrc" loading="lazy" :alt="heading" />
    </div>
    <div class="home-blog-item__info text text-sm color-heading font-primary color-heading">
      <div class="home-blog-item__info-group">
        <img src="http://localhost:3000/images/home/sign.svg" loading="lazy" alt="sign" />
        <span class="home-blog-item__author">{{ author }}</span>
      </div>
      <div class="home-blog-item__info-group">
        <img
          src="http://localhost:3000/images/home/date.svg"
          loading="lazy"
          alt="calendar"
          class="home-blog-item__date-img"
        />
        <time :datetime="date" class="home-blog-item__time">{{ date }}</time>
      </div>
    </div>
    <div class="home-blog-item__content">
      <figcaption class="home-blog-item__heading text text-lg color-heading font-primary">
        {{ heading }}
      </figcaption>
      <p class="home-blog-item__desc text text-md font-secondary">{{ desc }}</p>
      <a href="" class="home-blog-item__cta text text-md font-secondary color-heading">Read more</a>
    </div>
  </figure>
</template>
