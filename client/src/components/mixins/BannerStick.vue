<script setup></script>
<template>
  mixin bannerStick(title, caption, desc, imgSrc, btnText= "view all products", alt= "Furniture")
  <section class="banner-stick container">
    <div class="banner-stick__content font-primary obs-transition fade">
      h3.banner-stick__title= title p.banner-stick__caption= caption
      p.banner-stick__desc.font-secondary= desc a(href=
      POPLink).banner-stick__cta.btn.btn-md.btn-solid.btn-primary= btnText .banner-stick__img
    </div>
    <div class="banner-stick__img"></div>
    <img src="imgSrc" loading="lazy" alt="alt" />
  </section>
</template>
