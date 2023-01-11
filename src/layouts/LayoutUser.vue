<template>
  <div id="dashboard">
    <div id="">
      <header class="header">
        <div class="circle-blur-header"></div>
        <div class="header__container container d-flex justify-content-between align-items-center">
          <a href="/#" class="btn bg-primary text-white">
            DEVELOPER BLOG <span class=""></span>
          </a>
          <ul class="header__menu d-flex align-items-center">
            <li class="header__menu-item logo list-unstyled">
              <img alt="blog logo" srcset="./assets/images/logo/logo-w-name.png 2x">
            </li>

            <li class="header__menu-item list-unstyled">
              <a href="./" class="header__menu-link">Trang chủ</a>
            </li>
            <li class="header__menu-item list-unstyled">
              <a href="./service.html" class="header__menu-link">Dịch vụ</a>
            </li>
            <li class="header__menu-item list-unstyled">
              <a href="./about.html" class="header__menu-link">Giới thiệu</a>
            </li>
            <li class="list-unstyled "><DarkSwitch></DarkSwitch></li>
            <li class="header__menu-item login list-unstyled">
              <a @click="$router.push({name: 'auth.login'})" class="btn bg-primary text-white">
                Đăng nhập <span class="material-icons-round icon-ml"></span>
              </a>
            </li>

            <button class="menu__close">
              <span class="material-icons-round md-light md-24">close</span>
            </button>
          </ul>

          <button class="menu__toggle">
            <span class="material-icons-round md-light md-36">menu</span>
          </button>
        </div>
      </header>

      <slot></slot>

      <footer class="footer">
        <div class="footer__container container ">
          <div class="footer__inner row">
            <div class="footer__left col-8">
              <a href="./" class="footer__logo">
                Logo Blog
              </a>
              <div class="footer__newsletter">
                <p class="text-gray">Cập nhật tin tức mới từ chúng tôi</p>
                <form class="footer__form">
                  <input type="email" name="newsletter" class="footer__form-input" placeholder="Địa chỉ email">
                  <button class="footer__form-send">Send</button>
                </form>
              </div>
            </div>
            <div class="footer__right d-flex justify-content-between col-4">
              <ul class="footer__menu">
                <li class="footer__menu-item list-unstyled">
                  <p class="text-gray">Liên kết</p>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./" class="footer__menu-link">Trang chủ</a>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./service.html" class="footer__menu-link">Dịch vụ</a>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./about.html" class="footer__menu-link">Giới thiệu</a>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./login.html" class="footer__menu-link">Đăng nhập</a>
                </li>
              </ul>
              <ul class="footer__menu">
                <li class="footer__menu-item list-unstyled">
                  <p class="text-gray">Các chính sách</p>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./" class="footer__menu-link">Quyền riêng tư</a>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./" class="footer__menu-link">Chính sách bảo mật</a>
                </li>
                <li class="footer__menu-item list-unstyled">
                  <a href="./" class="footer__menu-link">Điều khoản dịch vụ</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__copyright ">
            <p class="text-gray">© 2022 Blog. All rights reserved.</p>
            <div class="footer__socials">
              <a href="./" class="footer__socials-link"><i class="fa-brands fa-facebook"></i></a>
              <a href="./" class="footer__socials-link"><i class="fa-brands fa-twitter"></i></a>
              <a href="./" class="footer__socials-link"><i class="fa-brands fa-youtube"></i></a>
              <a href="./" class="footer__socials-link"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarPart from "@/layouts/partsAdmin/SidebarPart.vue"
import DarkSwitch from "./partsAdmin/DarkSwitch.vue"
import { onBeforeUnmount } from 'vue'
// @ts-ignore
import { removeSidebar } from "@/lib/mazer/js/components/sidebar.js"

onBeforeUnmount(() => {
  removeSidebar()
})
</script>
