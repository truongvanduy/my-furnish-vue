<script setup>
defineProps({
  type: String,
  name: String,
  price: String,
  slug: String,
  dataIndex: Number
})
</script>
<template>
  <figure
    :class="'product-item on-trending-item on-trending-item--' + type"
    :data-index="dataIndex"
  >
    <figcaption class="on-trending-item__name font-secondary">{{ name }}</figcaption>
    <a class="on-trending-item__img product-item__img" href="/products/undefined"
      ><img :src="'/src/assets/images/products/' + slug + '.png'" alt="a chair" /></a
    ><span class="on-trending-item__price">{{ price }}</span>
  </figure>
</template>
