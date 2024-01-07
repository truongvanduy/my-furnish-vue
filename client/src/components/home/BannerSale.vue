<script setup>
import { onMounted, ref } from 'vue'
import { createObserver } from '@/utils/observer.js'

const containerRef = ref(null)
const headingRef = ref(null)
const descRef = ref(null)
const ctaRef = ref(null)

onMounted(() => {
  // Sale Banner Container
  const containerOptions = {
    rootMargin: '-45% 0px 0px 0px',
    threshold: 0
  }
  const containerObserver = createObserver(containerOptions, true)
  containerObserver.observe(containerRef.value)

  // Sale Banner Contents
  const contentOptions = {
    rootMargin: '-30% 0px 0px 0px',
    threshold: 0
  }
  const contentObserver = createObserver(contentOptions, true)

  contentObserver.observe(headingRef.value)
  contentObserver.observe(descRef.value)
  contentObserver.observe(ctaRef.value)
})
</script>

<template>
  <section class="banner-sale">
    <div ref="containerRef" class="banner-sale__container obs-transition slide-left fade">
      <div class="banner-sale__content">
        <h2
          ref="headingRef"
          class="banner-sale__heading heading heading-2xl heading-center fade obs-transition slide-half-left"
        >
          Spring Summer
        </h2>
        <p
          ref="descRef"
          class="banner-sale__desc font-secondary fade obs-transition slide-half-left"
        >
          Get 30% off for your first purchase
        </p>
        <a
          ref="ctaRef"
          class="banner-sale__cta btn btn-primary btn-outline btn-xl fade obs-transition slide-half-left"
          >Save 30%</a
        >
      </div>
    </div>
  </section>
</template>
