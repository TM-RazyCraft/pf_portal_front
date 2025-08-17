import "./styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
const moutApp = () => {
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount("#app");
}
console.log(import.meta);
if (location.hostname === "localhost") {
  moutApp();
} else {
  const password = prompt(`パスワードを入力してください:`);
  if ( password !== "a74ece5f395175e8638e93dda00273167ffc6bd8015b99332c57cfa27cff4c54" ) {
    alert("パスワードが間違っています。");
    throw new Error("Invalid password");
  } else {
    moutApp();
  }
}
