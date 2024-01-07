<script setup>
import { onMounted, ref } from 'vue'

const content = ref(null)
const image = ref(null)

const emit = defineEmits('bannerSideEl', { content, image })

onMounted(() => {
  emit('bannerSideEl', { content, image })
})
</script>

<template>
  <section class="banner-side container">
    <div ref="image" class="banner-side__img">
      <img src="http://localhost:3000/images/home/download-3.png" loading="lazy" alt="room" />
    </div>
    <div ref="content" class="banner-side__content obs-transition fade slide-half-left">
      <h3 class="banner-side__title heading heading-2xl">CLASSIC & TRADITIONAL</h3>
      <p class="banner-side__desc text font-secondary">
        The classics never go out of style. Make yourself at home with elegant furnishings, tasteful
        tones, and timeless touches.
      </p>
      <a href="" class="banner-side__cta btn btn-outline btn-primary btn-xl">Explore</a>
    </div>
  </section>
</template>
