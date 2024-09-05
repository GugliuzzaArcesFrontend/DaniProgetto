<template>
    <!-- Grafico area -->
    <div class="card card-primary col-6" :class="cardSize">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <button type="button" @click="minimizeChart()" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" @click="maximizeChart()" class="btn btn-tool" data-card-widget="maximize">
                    <i class="fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <div class="card-body" :style="cardStyle">
            <div class="chart">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <span>Placeholder</span>
                <canvas id="areaChart"
                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block;"
                    width="371" height="250" class="chartjs-render-monitor"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ChartArea',
    data() {
        return {
            cardStyle: String,
            cardSize:String 
        }
    },
    methods: {
        minimizeChart() {
            if (this.cardStyle != 'display:none')
                this.cardStyle = 'display:none';
            else this.cardStyle = 'display:block'
        },
        maximizeChart(){
            if(this.cardSize!="maximized-card")
                this.cardSize="maximized-card"
            else this.cardSize=""
        }
    },
    props: {
        title: String
    }


}

</script>
<style scoped></style>