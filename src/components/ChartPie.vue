<template>

    <div class="card " :class="'card-warning'">
        <div class="card-header">
            <h3 class="card-title">Pie Chart</h3>
            <div class="card-tools">
                <ButtonMinimize/>
                <ButtonMaximize/>
                <ButtonClose/>
            </div>
        </div>
        <div class="card-body">
            <div class="chartjs-size-monitor">
                <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                </div>

                <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                </div>
            </div>
            <canvas ref="pieChart" id="pieChart"
                style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 409px;"
                width="409" height="250" class="chartjs-render-monitor"></canvas>
        </div>

    </div>
</template>
<script>

/* import { donutData, pieOptions } from '../assets/chartPie';
import { Chart } from 'chart.js'; */
import ButtonClose from './ButtonClose.vue';
import ButtonMaximize from './ButtonMaximize.vue';
import ButtonMinimize from './ButtonMinimize.vue';

export default {
    name: 'ChartPie',
    components:{
        ButtonMaximize,
        ButtonMinimize,
        ButtonClose
    },
    data(){
        return{
            chart:null
        }
    },
    /* methods:{
        renderChart(){
            const canvas=this.$refs.pieChart.getContext('2d')
            this.chart= new Chart(canvas,{
                type:'pie',
                data:donutData,
                options:pieOptions
            })
        },
        beforeDestroy(){
            if(this.chart)this.chart.destroy()
        }
    },
    mounted(){
        this.renderChart()
    } */
}
</script>
<style scoped></style>