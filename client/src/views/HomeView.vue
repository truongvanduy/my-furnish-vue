<script setup>
import { onMounted, ref } from 'vue'
import BannerSale from '../components/home/BannerSale.vue'
import OnTrending from '../components/home/OnTrending.vue'
import HomeService from '@/services/HomeService.js'

const { getHomeProducts } = HomeService

const products = ref({
  trendings: [{}],
  chairs: [{}],
  accessories: [{}]
})

onMounted(async () => {
  try {
    const homeProducts = await getHomeProducts()
    products.value.trendings = [...homeProducts.trendings]
    products.value.chairs = [...homeProducts.chairs]
    products.value.accessories = [...homeProducts.accessories]
  } catch (e) {
    console.error('Error fetching home products: ', e)
    throw e
  }
})
</script>

<template>
  <main class="home-main">
    <BannerSale />
    <OnTrending :products="products.trendings" />
  </main>
</template>
