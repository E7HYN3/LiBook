<template>
  <f7-page name="LiBook">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>LiBook</f7-nav-title>
    </f7-navbar>
    <f7-block>
      <f7-card>
        <f7-card-content
          :class="store.isFinished ? '' : store.isLoading ? 'skeleton-text skeleton-effect-wave' : 'skeleton-text'">{{
            store.response
          }}</f7-card-content>
      </f7-card>
    </f7-block>
    <f7-block>
      <f7-button v-if="store.isFinished" fill @click="copy(store.response); showToastIcon()">Копировать</f7-button>
    </f7-block>
  </f7-page>
</template>

<script setup>
import { useStore } from '../js/store.js'
import { useClipboard } from '@vueuse/core'
import { f7, theme } from 'framework7-vue';

const store = useStore()
const { text, copy, copied, isSupported } = useClipboard()

function showToastIcon() {
  const self = this;
  // Copy to clipboard toast
  if (!self.toastIcon) {
    self.toastIcon = f7.toast.create({
      icon: theme.ios
        ? '<i class="f7-icons">doc_on_clipboard</i>'
        : '<i class="material-icons">content_copy</i>',
      text: "Скопировано!",
      position: 'center',
      closeTimeout: 2000,
    });
  }
  // Open toast
  self.toastIcon.open();
}
</script>