<script setup>
import AccessoriesProductItem from '../product-display/AccessoriesProductItem.vue'
defineProps({
  accessories: Array
})
</script>
<template>
  <section class="accessories">
    <h2 class="accessories__heading section__heading heading heading-xl heading-center">
      Featured Accessories
    </h2>
    <div class="grid wide accessories__list">
      <div class="row">
        <AccessoriesProductItem
          v-for="(item, index) in accessories"
          :key="index"
          :heading="item.name"
          :price="item.price"
          :slug="item.slug"
        />
      </div>
    </div>
  </section>
</template>
