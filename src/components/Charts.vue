<!-- link e script dependecies prese dal sorgente di https://adminlte.io/themes/v3/ -->
<template>
    <!-- Grafici ascisse/ordinate -->
    <!-- Grafico area -->
    <div class="card card-primary col-12">
        <div class="card-header">
            <h3 class="card-title">Area Chart</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="maximize">
                    <i class="fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <div class="card-body">
            <div class="chart">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <canvas id="areaChart"
                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block;"
                    width="371" height="250" class="chartjs-render-monitor"></canvas>
            </div>
        </div>
    </div>
    <!-- Grafico linea -->
    <div class="card card-info col-12">
        <div class="card-header">
            <h3 class="card-title">Line Chart</h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="maximize">
                    <i class="fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="card-body" style="display: block;">
            <div class="chart">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <canvas id="lineChart"
                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block;"
                    width="371" height="250" class="chartjs-render-monitor"></canvas>
            </div>
        </div>
    </div>
    <!-- Grafici a barre -->
    <!-- Grafico barre -->
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">Bar Chart</h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="maximize">
                    <i class="fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="chart">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <canvas id="barChart"
                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block;"
                    width="371" height="250" class="chartjs-render-monitor"></canvas>
            </div>
        </div>
    </div>
    <!-- Grafico barre impilate -->
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">Stacked Bar Chart</h3>
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
            <div class="chart">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <canvas id="stackedBarChart"
                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block;"
                    width="371" height="250" class="chartjs-render-monitor"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Charts'
}
</script>
<style scoped></style>