import reverseString from './reverse-str.vue'

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("reverseString", reverseString);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

reverseString.install = install;

export default reverseString;