<template>

    <div class="card card-warning">
        <div class="card-header">
            <h3 class="card-title">Pie Chart</h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
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

import { donutData, pieOptions } from '../assets/chartPie';
import { Chart } from 'https://cdnjs.cloudflare.com/ajax/libs/vue-chartjs/5.3.1/index.js'

export default {
    name: 'ChartPie',
    data(){
        return{
            chart:null
        }
    },
    methods:{
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
    }
}
</script>
<style scoped></style>