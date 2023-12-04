<script setup>
import { ref } from 'vue'
import BannerSale from '../components/home/BannerSale.vue'
import OnTrending from '../components/home/OnTrending.vue'
import HomeService from '@/services/HomeService.js'
import NostalgiaSection from '../components/home/NostalgiaSection.vue'
import ChairSection from '../components/home/ChairSection.vue'
import BannerSide from '../components/home/BannerSide.vue'
import AccessoriesSection from '../components/home/AccessoriesSection.vue'
import ModernFarmhouse from '../components/home/ModernFarmhouse.vue'
import BlogSection from '../components/home/BlogSection.vue'

const { getHomeProducts } = HomeService

const products = ref({
  trendings: [{}],
  chairs: [{}],
  accessories: [{}]
})

;(async function fetchProducts() {
  try {
    const homeProducts = await getHomeProducts()
    products.value.trendings = [...homeProducts.trendings]
    products.value.chairs = [...homeProducts.chairs]
    products.value.accessories = [...homeProducts.accessories]
  } catch (e) {
    console.error('Error fetching home products: ', e)
    throw e
  }
})()
</script>

<template>
  <main class="home-main">
    <BannerSale />
    <OnTrending :products="products.trendings" />
    <NostalgiaSection />
    <ChairSection :chairs="products.chairs" />
    <BannerSide />
    <AccessoriesSection :accessories="products.accessories" />
    <ModernFarmhouse />
    <BlogSection />
  </main>
</template>
