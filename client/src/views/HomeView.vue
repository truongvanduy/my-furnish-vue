<script setup>
import { onMounted, ref } from 'vue'
import BannerSale from '../components/home/BannerSale.vue'
import OnTrending from '../components/home/OnTrending.vue'
import HomeService from '@/services/HomeService.js'
import NostalgiaSection from '../components/home/NostalgiaSection.vue'
import ChairSection from '../components/home/ChairSection.vue'
import BannerSide from '../components/home/BannerSide.vue'
import AccessoriesSection from '../components/home/AccessoriesSection.vue'
import ModernFarmhouse from '../components/home/ModernFarmhouse.vue'
import BlogSection from '../components/home/BlogSection.vue'
import { createObserver } from '../utils/observer'

const { getHomeProducts } = HomeService

const products = ref({
  trendings: [],
  chairs: [],
  accessories: []
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

// Animation
const options = {
  rootMargin: '0px 0px -30% 0px',
  threshold: 0
}
const productOptions = {
  rootMargin: '0px 0px -20% 0px',
  threshold: 0
}

const observer = createObserver(options, false)
const productObserver = createObserver(productOptions, false)

function bannerStickObserve({ content, img }) {
  observer.observe(content.value)
  observer.observe(img.value)
}

function bannerSideObserve({ content, image }) {
  observer.observe(content.value)
  observer.observe(image.value)
}

function onTrendProductObserve(items) {
  items.forEach((item) => {
    productObserver.observe(item.value)
  })
}

function topProductObserve(topProducts) {
  topProducts.value.forEach((item) => {
    /**
     * Each item is a TopProductItem component
     * Each item.$el is a TopProductItem DOM element (column element in this case)
     * Observe the product DOM el using item.$el.childNodes[0]
     */
    productObserver.observe(item.$el.childNodes[0])
  })
}

function accesssoriesObserve(accesssoriesItems) {
  accesssoriesItems.value.forEach((item) => {
    productObserver.observe(item.childNodes[0])
  })
}

function blogObserve(blogRefs) {
  console.log(blogRefs.value)
  blogRefs.value.forEach((item) => {
    productObserver.observe(item.$el)
  })
}
</script>

<template>
  <main class="home-main">
    <BannerSale />
    <OnTrending @ontrendProductEl="onTrendProductObserve" :products="products.trendings" />
    <NostalgiaSection @bannerStickEl="bannerStickObserve" />
    <ChairSection @topProductEl="topProductObserve" :chairs="products.chairs" />
    <BannerSide @bannerSideEl="bannerSideObserve" />
    <AccessoriesSection
      @accesssoriesItemsList="accesssoriesObserve"
      :accessories="products.accessories"
    />
    <ModernFarmhouse @bannerStickEl="bannerStickObserve" />
    <BlogSection @blogList="blogObserve" />
  </main>
</template>
