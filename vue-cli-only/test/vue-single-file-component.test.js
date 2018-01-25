import Fizzbuzz from '../main/Fizzbuzz.vue'
import Contract from '../../test/contract.test';
import Vue from "vue";

new Contract(Vue.extend(Fizzbuzz)).run();