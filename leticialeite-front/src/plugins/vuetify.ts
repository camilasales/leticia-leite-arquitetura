import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import VueTheMask from 'vue-the-mask'

Vue.use(Vuetify);
Vue.use(VueTheMask);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
});
