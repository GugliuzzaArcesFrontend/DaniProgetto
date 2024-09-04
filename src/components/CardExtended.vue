<template>
    <div class="row">
        <div class="col-md-3">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Card Refresh</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="card-refresh"
                            data-source="widgets.html" data-source-selector="#card-refresh-content">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>

                </div>

                <div class="card-body">
                    The body of the card after card refresh
                </div>

            </div>

            <div class="d-none" id="card-refresh-content">
                The body of the card after card refresh
            </div>
        </div>

        <div class="col-md-3">
            <div class="card card-success">
                <div class="card-header">
                    <h3 class="card-title">All together</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="card-refresh"
                            data-source="widgets.html" data-source-selector="#card-refresh-content"
                            data-load-on-init="false">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="maximize">
                            <i class="fas fa-expand"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                </div>

                <div class="card-body">
                    The body of the card
                </div>

            </div>

        </div>

        <div class="col-md-3">
            <div class="card card-warning">
                <div class="card-header">
                    <h3 class="card-title">Loading state</h3>
                </div>
                <div class="card-body">
                    The body of the card
                </div>


                <div class="overlay">
                    <i class="fas fa-2x fa-sync-alt"></i>
                </div>

            </div>

        </div>

        <div class="col-md-3">
            <div class="card card-danger">
                <div class="card-header">
                    <h3 class="card-title">Loading state (dark)</h3>
                </div>
                <div class="card-body">
                    The body of the card
                </div>


                <div class="overlay dark">
                    <i class="fas fa-2x fa-sync-alt"></i>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: 'CardExtended',
    props: {}
}
</script>