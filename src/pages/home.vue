<template>
  <f7-page name="LiBook">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>LiBook</f7-nav-title>
    </f7-navbar>

    <!-- Page content-->
    <f7-list strong-ios dividers-ios outline-ios>
      <f7-list-input type="textarea" resizable maxlength="1000" label="Текст для сжатия"
        :info="`Использовано символов: ${store.text.length}/1000`" placeholder="Введите текст"
        v-model:value="store.text"></f7-list-input>
      <f7-list-input v-model:value="store.summarySize" label="Степень сжатия" type="select">
        <option>Сильное сжатие</option>
        <option>Слабое сжатие</option>
      </f7-list-input>
    </f7-list>
    <f7-block>
      <button class="button button-round button-fill" @click="sendRequest()">Отправить</button>
    </f7-block>
  </f7-page>
</template>

<script setup>
import { useStore } from '../js/store.js'
import { f7 } from 'framework7-vue';

const store = useStore()

const sendRequest = async () => {
  try {
    store.response = "Nec dubitamus multa iter quae et nos invenerat. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Phasellus laoreet lorem vel dolor tempus vehicula. Cras mattis iudicium purus sit amet fermentum."
    store.isFinished = false
    store.isLoading = true
    f7.tab.show('#view-catalog', '#result-tab-link', true)
    const { data } = await store.requestToLLM()
    store.isLoading = false
    store.isFinished = true
    store.response = data.value["choices"][0]["message"]["content"]
  } catch (error) {
    if (error.response) {
      if (error.response.status == 500) {
        f7.dialog.alert(error + "<br>" + 'Проверьте указанный API сервер.').setTitle('Ошибка запроса');
      } else if (error.response.status == 401) {
        f7.dialog.alert(error + "<br>" + 'Проверьте указанный API ключ.').setTitle('Ошибка запроса');
      } else {
        f7.dialog.alert(error + "<br>" + 'Проверьте название настройки модели.').setTitle('Ошибка запроса');

      }
    } else {
      f7.dialog.alert(error).setTitle('Неизвестная ошибка');
    }
  }

}

</script>