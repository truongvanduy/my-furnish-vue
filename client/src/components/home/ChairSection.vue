<script setup>
import TopProductItem from '../product-display/TopProductItem.vue'
defineProps({
  chairs: Array
})
</script>
<template>
  <section class="product-top">
    <h2 class="product-top__heading section__heading heading heading-xl heading-center">
      Top Chairs
    </h2>
    <div class="grid wide">
      <div class="row">
        <TopProductItem
          v-for="(chair, index) in chairs"
          :key="index"
          :heading="chair.name"
          :price="'$' + chair.price"
          :slug="chair.slug"
        />
      </div>
    </div>
  </section>
</template>
