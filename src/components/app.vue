<template>
  <f7-app v-bind="f7params">

    <!-- Left panel with cover effect-->
    <f7-panel left cover dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="LiBook"></f7-navbar>
          <f7-block>Github: <a href="https://github.com/E7HYN3/sirius_ai2024">E7HYN3/sirius_ai2024</a></f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar icons bottom>
        <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:chat_bubble_fill"
          icon-md="material:chat_bubble_fill" text="Главная"></f7-link>
        <f7-link tab-link="#view-catalog" icon-ios="f7:checkmark" icon-md="material:checkmark" text="Результат"
          id="result-tab-link"></f7-link>
        <f7-link tab-link="#view-settings" icon-ios="f7:gear" icon-md="material:settings" text="Настройки"></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <f7-view id="view-catalog" name="catalog" tab url="/catalog/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>

    </f7-views>

  </f7-app>
</template>
<script>
import { f7, f7ready } from 'framework7-vue';

import routes from '../js/routes.js';

export default {
  setup() {

    // Framework7 Parameters
    const f7params = {
      name: 'LiBook', // App name
      theme: 'auto', // Automatic theme detection
      darkMode: 'auto',

      // App routes
      routes: routes,
    };

    return {
      f7params,
    }
  }
}
</script>