import Fizzbuzz from '../main/Fizzbuzz.vue'
import Contract from '../../test/contract';
import Vue from "vue";

Vue.config.productionTip = false;

new Contract(Vue.extend(Fizzbuzz)).run();