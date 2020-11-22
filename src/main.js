import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'primevue/resources/themes/bootstrap4-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Dialog from 'primevue/dialog';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Chart from 'primevue/chart';
import ProgressBar from 'primevue/progressbar';


Vue.config.productionTip = false
Vue.component('DataTable', DataTable)
Vue.component('Column', Column);
Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Menubar', Menubar);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('MultiSelect', MultiSelect);
Vue.component('Chart', Chart);
Vue.component('ProgressBar', ProgressBar);
Vue.component('Dataview', DataView);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
