<script setup>
import BlogItem from '../mixins/BlogItem.vue'
</script>

<template>
  <section class="home-blog container" id="home-blog">
    <h2 class="home-blog__heading heading heading-xl heading-center section__heading">
      Latest Blog
    </h2>
    <div class="home-blog__list">
      <BlogItem
        :heading="'Top essential trends in 2022'"
        :author="'Wiro Sableng'"
        :date="'21 February, 2022'"
        :desc="'More off this less hello samlande lied much over tightly circa horse taped mightly'"
        :img-src="'http://localhost:3000/images/home/blog-1.png 2x'"
      />
      <BlogItem
        :heading="'Mixing Modern Furniture with Vintage Looks'"
        :author="'Athony Tran'"
        :date="'7 December, 2021'"
        :desc="'Introduce interest into your home that may mostly feature modern furniture.'"
        :img-src="'http://localhost:3000/images/home/blog-2.png 2x'"
      />
      <BlogItem
        :heading="'Transform your living room with SoHoConcept'"
        :author="'Harry Jeams'"
        :date="'12 May, 2022'"
        :desc="'We have some good ideas here at SohoConcept to change your house.'"
        :img-src="'http://localhost:3000/images/home/blog-3.png 2x'"
      />
    </div>
  </section>
</template>
