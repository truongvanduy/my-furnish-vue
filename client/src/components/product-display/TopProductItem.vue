<script setup>
defineProps({
  heading: String,
  price: String,
  slug: String
})
</script>

<template>
  <div class="col col-3 xl-6 lg-6 md-6 sm-12">
    <figure class="product-top-item product-item action-rounded obs-transition fade side-half-up">
      <div class="product-top-item__top product-item__top">
        <a :href="'/products/' + slug" class="product-top-item__img product-item__img">
          <img :srcSet="'http://localhost:3000/images/products/' + slug + '.png'" :alt="heading" />
        </a>
      </div>
      <div class="product-top-item__bottom product-item__bottom">
        <figcaption
          class="product-top-item__heading heading heading-xs heading-center font-primary"
        >
          {{ heading }}
        </figcaption>
        <span class="product-top-item__price text text-md text-center color-heading">{{
          price
        }}</span>
      </div>
    </figure>
  </div>
</template>
