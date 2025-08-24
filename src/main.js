// Type declaration for Vite env variables
// (Removed custom ImportMetaEnv and ImportMeta interfaces to use Vite's built-in types)
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
};
console.log(import.meta.env.VITE_HASH);
if (location.hostname === "localhost") {
    moutApp();
}
else {
    const hash = import.meta.env.VITE_HASH;
    const password = prompt(`パスワードを入力してください:`);
    if (password !== hash) {
        alert("パスワードが間違っています。");
        throw new Error("Invalid password");
    }
    else {
        moutApp();
    }
}
//# sourceMappingURL=main.js.map