<template>
    <form class="main-form">

        <div class="fieldset">
            <legend>FuelWell calculator</legend>
        </div>
        
        <div class="fieldset">
            <Currency />
            <Mileage />
            <Consumption />
            <Cost />
        </div>

        <div class="fieldset">
            <FuelwellCostSpent />
            <FuelwellEmission />
        </div>

        <div class="fieldset">
            <CostSpent />
            <Emission />
        </div>

        <RecalculateValues />        
    </form>

</template>

<script>
    import Currency from './res/currency';
    import Mileage from './res/mileage';
    import Emission from './res/emission';
    import Consumption from './res/consumption';
    import CostSpent from './res/cost-spent';
    import Cost from './res/cost';
    import FuelwellCostSpent from './res/fuelwell-cost-spent';
    import FuelwellEmission from './res/fuelwell-emission';
    import RecalculateValues from './res/recalculate-values';

    export default {
        name: 'App',
        components: {
            Mileage, Emission, Consumption, CostSpent, Currency, Cost, FuelwellCostSpent, FuelwellEmission, RecalculateValues
        },
        mounted() {
            this.$store.dispatch('initialCalculation');
        }
    }
</script>

<style>
    body {
        background: #CECECE;
    }

    body * {
        box-sizing: border-box;
    }

    .main-form {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 400px;
        min-width: 250px;
        margin: 20px auto;
        position: relative;
    }

    .main-form .fieldset {
        background-color:#F7F7F7;
    }

    .main-form label {
        padding: 15px 20px;
        margin: 5px auto;
        width: 100%;
        color: #460909;
        font-size: 0.5rem;
        font-style: italic;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
    }

    .main-form legend {
        text-align: center;
        background: #364351;
        width: 100%;
        padding: 30px 0;
        border-radius: 3px 3px 0 0;
        color: white;
        font-size: 2em;
    }

    .main-form .fieldset form {
        border: 1px solid #460909;
        margin: 0 auto;
        display: block;
        width: 100%;
        padding: 30px 20px;
        border-radius: 0 0 3px 3px;
    }


    .main-form input[type=text], .main-form select {
        padding: 15px 20px;
        border-radius: 1px;
        margin: 5px auto;
        background-color: #F7F7F7;
        border: 1px solid #CECECE;
        -webkit-box-shadow: inset 0 1px 5px rgba(0,0,0,0.2);
        box-shadow: inset 0 1px 5px rgba(0,0,0,0.2), 0 1px rgba(255,255,255,.8);
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition:background-color .5s ease;
        -moz-transition:background-color .5s ease;
        -o-transition:background-color .5s ease;
        -ms-transition:background-color .5s ease;
        transition:background-color .5s ease;
    }
    
    .main-form input[type=text]:active, .main-form input[type=text]:focus {
        outline: none;
        border-color: #460909;
        background-color: #FFFFFF;
    }

    .main-form input[type=submit] {
        position: relative;
        top: 0;        
        width: 100%;
        margin: unset;
        margin-top: 5px;
        padding: 10px;        

        font-family: 'Inter', sans-serif;
        text-transform: uppercase;
        outline: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;

        background-color: #5C8CA7;

        color: white;
        border: 1px solid #3498db;
        border-radius: 3px;
        font-size: 1.5em;
        font-weight: bold;

        cursor: pointer;

    }

    .main-form input[type=submit]:hover {
        background-color: #2980b9;
    }

    .main-form input[type=submit]:active {
        background: #5C8CA7;
    }

    ::-moz-focus-inner {
        border: 0;
    }

    ::-webkit-input-placeholder { text-shadow:1px 1px 1px white; font-weight:bold; }
    ::-moz-placeholder { text-shadow:0 1px 1px white; font-weight:bold; } /* firefox 19+ */
    :-ms-input-placeholder { text-shadow:0 1px 1px white; font-weight:bold; } /* ie */

</style>