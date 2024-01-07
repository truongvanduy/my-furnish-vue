<script setup>
import { onUpdated, ref } from 'vue'
import AccessoriesProductItem from '../product-display/AccessoriesProductItem.vue'
defineProps({
  accessories: Array
})

const accesssoriesItems = ref([])

defineExpose({ accesssoriesItems })

const emiProducts = () => {
  emit('accesssoriesItemsList', accesssoriesItems)
}

const emit = defineEmits('accesssoriesItemList')

onUpdated(() => {
  emiProducts()
})
</script>
<template>
  <section class="accessories">
    <h2 class="accessories__heading section__heading heading heading-xl heading-center">
      Featured Accessories
    </h2>
    <div class="grid wide accessories__list">
      <div class="row">
        <div
          v-for="(item, index) in accessories"
          :key="index"
          ref="accesssoriesItems"
          class="col col-4 xl-4 lg-6 md-6 sm-12"
        >
          <AccessoriesProductItem :heading="item.name" :price="item.price" :slug="item.slug" />
        </div>
      </div>
    </div>
  </section>
</template>
