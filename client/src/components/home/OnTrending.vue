<script setup>
import OnTrendingItem from '../product-display/OnTrendingItem.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <section class="on-trending">
    <div class="on-trending__title heading heading-xl heading-center section__heading">
      On Trending
    </div>
    <div class="grid wide">
      <div class="row">
        <div class="col col-6 xl-6 lg-12 md-12 sm-12 overflow-hidden">
          <div class="row">
            <div class="col col-12 xl-12 lg-7 md-12 sm-12 obs-transition slide-half-right fade">
              <OnTrendingItem
                :type="'lg'"
                :name="products[0].name"
                :price="'$' + products[0].price"
                :slug="products[0].slug"
                :data-index="products[0].id"
              />
            </div>
            <div class="col col-12 xl-12 lg-5 md-12 sm-12">
              <div class="row">
                <div
                  class="col col-6 xl-6 lg-12 md-6 sm-12 obs-transition obs-delay-quarter slide-half-up fade"
                >
                  <OnTrendingItem
                    :type="'md'"
                    :name="products[1].name"
                    :price="'$' + products[1].price"
                    :slug="products[1].slug"
                    :data-index="products[1].id"
                  />
                </div>
                <div class="col col-6 xl-6 lg-12 md-6 sm-12 obs-transition slide-half-up fade">
                  <OnTrendingItem
                    :type="'md'"
                    :name="products[2].name"
                    :price="'$' + products[2].price"
                    :slug="products[2].slug"
                    :data-index="products[2].id"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-6 xl-6 lg-12 md-12 sm-12 overflow-hidden">
          <div class="row">
            <div class="col col-12 xl-12 lg-5 md-12 sm-12">
              <div class="row">
                <div class="col col-6 xl-6 lg-12 md-6 sm-12 obs-transition slide-half-down fade">
                  <OnTrendingItem
                    :type="'md'"
                    :name="products[3].name"
                    :price="'$' + products[3].price"
                    :slug="products[3].slug"
                    :data-index="products[3].id"
                  />
                </div>
                <div
                  class="col col-6 xl-6 lg-12 md-6 sm-12 obs-transition obs-delay-quarter slide-half-down fade"
                >
                  <OnTrendingItem
                    :type="'md'"
                    :name="products[4].name"
                    :price="'$' + products[4].price"
                    :slug="products[4].slug"
                    :data-index="products[4].id"
                  />
                </div>
              </div>
            </div>
            <div class="col col-12 xl-12 lg-7 md-12 sm-12 obs-transition slide-half-left fade">
              <OnTrendingItem
                :type="'lg'"
                :name="products[5].name"
                :price="'$' + products[5].price"
                :slug="products[5].slug"
                :data-index="products[5].id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
