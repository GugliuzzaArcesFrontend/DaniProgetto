<template>
    <div class="card bg-gradient-info">
        <div class="card-header border-0 ui-sortable-handle" style="cursor: move;">
            <h3 class="card-title">
                <i class="fas fa-th mr-1"></i>
                Sales Graph
            </h3>
            <div class="card-tools">
                <button type="button" class="btn bg-info btn-sm" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn bg-info btn-sm" data-card-widget="remove">
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
            <canvas class="chart chartjs-render-monitor" id="line-chart"
                style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 397px;"
                width="397" height="250"></canvas>
        </div>

        <div class="card-footer bg-transparent">
            <div class="row">
                <div class="col-4 text-center">
                    <div style="display:inline;width:60px;height:60px;"><canvas width="60" height="60"></canvas><input
                            type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                            data-fgcolor="#39CCCC" readonly="readonly"
                            style="width: 34px; height: 20px; position: absolute; vertical-align: middle; margin-top: 20px; margin-left: -47px; border: 0px; background: none; font: bold 12px Arial; text-align: center; color: rgb(57, 204, 204); padding: 0px; appearance: none;">
                    </div>
                    <div class="text-white">Mail-Orders</div>
                </div>

                <div class="col-4 text-center">
                    <div style="display:inline;width:60px;height:60px;"><canvas width="60" height="60"></canvas><input
                            type="text" class="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                            data-fgcolor="#39CCCC" readonly="readonly"
                            style="width: 34px; height: 20px; position: absolute; vertical-align: middle; margin-top: 20px; margin-left: -47px; border: 0px; background: none; font: bold 12px Arial; text-align: center; color: rgb(57, 204, 204); padding: 0px; appearance: none;">
                    </div>
                    <div class="text-white">Online</div>
                </div>

                <div class="col-4 text-center">
                    <div style="display:inline;width:60px;height:60px;"><canvas width="60" height="60"></canvas><input
                            type="text" class="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                            data-fgcolor="#39CCCC" readonly="readonly"
                            style="width: 34px; height: 20px; position: absolute; vertical-align: middle; margin-top: 20px; margin-left: -47px; border: 0px; background: none; font: bold 12px Arial; text-align: center; color: rgb(57, 204, 204); padding: 0px; appearance: none;">
                    </div>
                    <div class="text-white">In-Store</div>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "GraphLine"
}
</script>