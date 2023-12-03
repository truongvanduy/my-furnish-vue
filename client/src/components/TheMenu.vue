<script setup>
import { onMounted, reactive } from 'vue'
import NavGroup from './mixins/NavGroup.vue'

const user = reactive({ example: 'example' })

onMounted(async () => {})
</script>
<template>
  <ul class="menu js-menu">
    <li class="menu__item tablet">
      <div class="search">
        <input class="search__input" type="text" />
        <button class="btn btn-primary btn-solid btn-sm search__btn">
          <img src="../assets/images/base/search.svg" alt="search" />
        </button>
      </div>
    </li>
    <li class="menu__item"><a class="menu__link text-lg color-heading">Home</a></li>
    <li class="menu__item"><a class="menu__link text-lg color-heading">Products</a></li>
    <li class="menu__item"><a class="menu__link text-lg color-heading">Cart</a></li>
    <li class="menu__item"><a class="menu__link text-lg color-heading">Order</a></li>
    <li class="menu__item mobile menu__nav-top"></li>
    <li
      v-if="user && user.role === 'admin'"
      a.menu__link.text-lg.color-heading
      href="manageProductLink"
    >
      Manage
    </li>
    <li class="menu__item mobile menu__nav-top">
      <template v-if="user">
        <NavGroup :src="'cart.svg'" :class-name="'nav-cart in-menu'"></NavGroup>
      </template>
      <!-- span.nav-cart-qty(data-name='nav-cart-qty')= "Cart (" + (cartQty ? cartQty : '') + ")" if
      (!user) +navGroup("Login", "user.svg", loginLink,"menu__nav-top-item in-menu") else
      +navGroup(user.fullName, "user.svg", loginLink,"menu__nav-top-item in-menu")
      +navGroup('Profile', "user.svg", userProfileLink,"menu__nav-top-item in-menu")
      +navGroup('Order', "", userOrderLink,"menu__nav-top-item in-menu")
      form.nav-group.menu__nav-top-item.in-menu(action='/sign-out', method='POST')
      button(type='submit').nav-action__text.color-danger Sign out
      +navGroup("duyb2005667@student.ctu.vn", "mail.svg", "mailto: duyb2005667@student.ctu.vn",
      "menu__nav-top-item mt-auto") +navGroup("(12345)67890", "phone.svg", "tel: (12345)67890",
      "menu__nav-top-item") -->
    </li>
  </ul>
</template>
