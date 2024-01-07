<script setup>
import { onMounted, ref, defineEmits } from 'vue'
defineProps({
  title: String,
  caption: String,
  desc: String,
  imgSrc: String,
  btnText: {
    type: String,
    default: 'view all products'
  },
  alt: {
    type: String,
    default: 'Furniture'
  }
})

const content = ref(null)
const img = ref(null)

const emit = defineEmits('bannerStickEl', { content, img })

onMounted(() => {
  // Emit the refs to the parent component
  emit('bannerStickEl', { content, img })
})
</script>

<template>
  <section class="banner-stick container">
    <div ref="content" class="banner-stick__content font-primary obs-transition fade">
      <h3 class="banner-stick__title">{{ title }}</h3>
      <p class="banner-stick__caption">{{ caption }}</p>
      <p class="banner-stick__desc font-secondary">{{ desc }}</p>
      <a href="poplink" class="banner-stick__cta btn btn-md btn-solid btn-primary">{{ btnText }}</a>
    </div>
    <div ref="img" class="banner-stick__img">
      <img :src="imgSrc" loading="lazy" :alt="alt" />
    </div>
  </section>
</template>
