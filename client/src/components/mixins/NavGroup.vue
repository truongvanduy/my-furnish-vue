<script setup>
defineProps({
  text: String,
  src: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  imgClassName: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <a :href="href" :class="className"></a>
  <img
    v-if="src !== ''"
    :class="'nav-action__icon' + className + imgClassName"
    :src="'/images/base/' + src"
    :alt="text"
  />
  <span nav-action__text>{{ text }}</span>
  <slot></slot>
</template>
