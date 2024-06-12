import { createApp } from "vue";
import emitter from 'tiny-emitter/instance'
const eventBus = createApp();

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
};