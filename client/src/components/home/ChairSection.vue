<script setup>
import { defineProps, defineEmits, ref, onMounted, onUpdated } from 'vue'
import TopProductItem from '../product-display/TopProductItem.vue'

const { chairs } = defineProps(['chairs'])
const emit = defineEmits('topProductEl')

const topProducts = ref([])

defineExpose({ topProducts })

const emitTopProductRef = () => {
  emit('topProductEl', topProducts)
}

onMounted(() => {
  emitTopProductRef()
})

onUpdated(() => {
  emitTopProductRef()
})
</script>

<template>
  <section class="product-top">
    <h2 class="product-top__heading section__heading heading heading-xl heading-center">
      Top Chairs
    </h2>

    <div class="grid wide">
      <div class="row">
        <!-- Loop through chairs and render TopProductItem components -->
        <TopProductItem
          v-for="(chair, index) in chairs"
          :key="index"
          :ref="(el) => (topProducts[index] = el)"
          :heading="chair.name"
          :price="'$' + chair.price"
          :slug="chair.slug"
        />
      </div>
    </div>
  </section>
</template>
