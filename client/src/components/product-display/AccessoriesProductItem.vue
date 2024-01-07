<script setup>
defineProps({
  heading: String,
  price: Number,
  slug: String
})
</script>

<template>
  <figure class="accessories-item product-item action-horizontal obs-transition fade side-half-up">
    <div class="accessories-item__top product-item__top">
      <a :href="'/products/' + slug" class="accessories-item__img product-item__img">
        <img
          :srcSet="'http://localhost:3000/images/products/' + slug + '.png'"
          loading="lazy"
          :alt="heading"
        />
      </a>
    </div>
    <div class="accessories-item__bottom product-item__bottom">
      <figcaption
        class="accessories-item__heading text text-lg text-center color-heading font-secondary"
      >
        {{ heading }}
      </figcaption>
      <div class="accessories-item-price text text-sm text-center color-heading">
        <span class="accessories-item-price__new">{{ '$' + price }}</span>
      </div>
    </div>
  </figure>
</template>
