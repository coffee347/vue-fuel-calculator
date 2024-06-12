import { createApp } from "vue";
import { createStore, mapActions }  from "vuex";
import App from './Main.vue';
import EventBus from './bus.js';

let app = createApp(App);

const store = createStore({
    state: {
        current: {
            mileage: '0',
            consumption: '0',            
            cost: '0',            
            emission: '0',
            cost_spent: '0',
            fuelwell_emission: '0',
            fuelwell_cost_spent: '0',
            currency: ''
        }
    },
    getters: {
        mileage: state => {
            return state.current.mileage;
        },
        consumption: state => {
            return state.current.consumption;
        },
        cost: state => {
            return state.current.cost;
        },
        cost_spent: state => {
            return state.current.cost_spent;
        },
        emission: state => {
            return state.current.emission;
        },
        fuelwell_cost_spent: state => {
            return state.current.fuelwell_cost_spent;
        },
        fuelwell_emission: state => {
            return state.current.fuelwell_emission;
        },
        currency: state => {
            return state.current.currency;
        }
    },
    mutations: {
        changeMileage(state, payload) {
            state.current.mileage = payload;
        },
        changeConsumption(state, payload) {
            state.current.consumption = payload;
        },
        changeCost(state, payload) {
            state.current.cost = payload;
        },
        changeCostSpent(state, payload) {
            state.current.cost_spent = payload;
        },
        changeEmission(state, payload) {
            state.current.emission = payload;
        },
        changeFuelWellCostSpent(state, payload) {
            state.current.fuelwell_cost_spent = payload;
        },
        changeFuelWellEmission(state, payload) {
            state.current.fuelwell_emission = payload;
        },
        changeCurrency(state, payload) {
            state.current.currency = payload;
        }
    },
    actions: {
        initialCalculation(payload) {
            EventBus.$emit('calculateCostSpent', payload);
            EventBus.$emit('updateResult', payload);
            console.log('initial calculation done');
        },
        changeMileage(context, payload) {
            context.commit('changeMileage', payload);
            EventBus.$emit('calculateCostSpent', payload);
            EventBus.$emit('updateResult', payload);
        },
        changeConsumption(context, payload) {
            context.commit('changeConsumption', payload);
            EventBus.$emit('calculateCostSpent', payload);
            EventBus.$emit('updateResult', payload);
        },
        changeCost(context, payload) {
            context.commit('changeCost', payload);
            EventBus.$emit('calculateCostSpent', payload);
            EventBus.$emit('updateResult', payload);
        },
        changeCostSpent(context, payload) {
            context.commit('changeCostSpent', payload);
            EventBus.$emit('updateResult', payload);
        },
        changeEmission(context, payload) {
            context.commit('changeEmission', payload);
            EventBus.$emit('updateResult', payload);
        },
        changeCurrency(context, payload) {
            context.commit('changeCurrency', payload);
            EventBus.$emit('calculateCostSpent', payload);
            EventBus.$emit('updateResult', payload);
        },
        changeFuelWellCostSpent(context, payload) {
            context.commit('changeFuelWellCostSpent', payload);
        },
        changeFuelWellEmission(context, payload) {
            context.commit('changeFuelWellEmission', payload);
        }
    },
});

app.use(store);
app.mount('body');