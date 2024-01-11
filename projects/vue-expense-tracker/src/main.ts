import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './style.css';
import App from './App.vue';

const app = createApp(App);
app.use(Toast);
app.mount('#app');

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        app.unmount();
    });
}
