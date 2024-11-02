import { defineStore } from "pinia";
import { ref, toRaw } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

// Прокси сервер для обхода ошибок CORS при отправке запроса
// const corsProxy = "http://localhost:3000/";
const corsProxy = "https://chestnut-orchid-alloy.glitch.me/";

export const useStore = defineStore(
  "store",
  () => {
    // Параметры запроса к LLM
    const text = ref("");
    const summarySize = ref("Сильное сжатие");

    // Параметры ответа LLM
    const response = ref(
      "Nec dubitamus multa iter quae et nos invenerat. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Phasellus laoreet lorem vel dolor tempus vehicula. Cras mattis iudicium purus sit amet fermentum."
    );
    const isLoading = ref(false);
    const isFinished = ref(false);

    // Параметры модели
    const host = ref("http://localhost:11434/api/chat");
    const API_KEY = ref("");
    const model = ref("gemma2:9b");
    const temperature = ref(0.1);

    // Отправка к LLM
    async function requestToLLM() {
      return useAxios(`${corsProxy}${host.value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY.value}`,
          Accept: "application/json",
        },
        data: {
          model: model.value,
          messages: [
            {
              role: "system",
              content: `Используя ${summarySize.value.toLowerCase()} предоставь сжатый вариант текста пользователя рамзером ${
                summarySize.value == "Сильное сжатие"
                  ? "от одного до двух простых и кратких предложений."
                  : "в один небольшой абзац текста."
              } В ответе должен быть исключительно результат сокращения текста.`,
            },
            { role: "user", content: text.value },
          ],
          max_tokens: 512,
          temperature: parseFloat(temperature.value),
          stream: false,
        },
      });
    }

    return {
      text,
      summarySize,
      response,
      isLoading,
      isFinished,
      host,
      API_KEY,
      model,
      temperature,
      requestToLLM,
    };
  },
  {
    persist: true,
  }
);
