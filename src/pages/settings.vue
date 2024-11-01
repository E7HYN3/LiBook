<template>
  <f7-page name="settings">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>LiBook</f7-nav-title>
    </f7-navbar>
    <f7-list strong-ios dividers-ios outline-ios>
      <f7-list-input label="API сервер" info="Полный адрес локального или удаленного API инференса"
        placeholder="http://localhost:11434/api/chat" type="text" v-model:value="store.host" />
      <f7-list-input label="API Ключ" info="(Необязателен) Ключ внешнего API провайдера" type="password"
        v-model:value="store.API_KEY" />
      <f7-list-input label="LLM модель" info="Название LLM модели для сжатия текста" placeholder="gemma2:9b" type="text"
        v-model:value="store.model" />
      <f7-list-input label="Температура модели" info="Влияет на соответсвтие лексики входному тексту" type="number"
        step="0.1" min="0.1" max="2" v-model:value="store.temperature" />
    </f7-list>
  </f7-page>
</template>

<script setup>
import { useStore } from '../js/store.js'

const store = useStore()
</script>