<template>

    <div class="row justify-content-between">
        <InfoboxSmall class="col-12 col-md-5" icon='suitcase' color="success" title="Titolo infobox" value=37.5
            maxValue=50 >
        <template #tools><ButtonClose /></template>
        </InfoboxSmall>
        <InfoboxSmall class="col-12 col-md-5" isFull=true  color="danger" title="Titolo infobox2"
            value="Cavoli amari" />
        <CardReport placeholder="card-danger" placeholder2="card-success" colNum="6" title="Wall-e regna">
            <template class="justify-content-center">Placeholder body con slot
                <div class="row justify-content-between">

                    <!-- <CardReport colNum="6"><template #tools><ButtonClose /></template></CardReport>
<CardReport colNum="4"><template #tools><ButtonMinimize /><ButtonClose /></template></CardReport> -->

                </div>
            </template>

            <!-- non si possono affiggere attributi all'elemento template #destinazione -->
            <template #footer class="test"></template>

            <template #tools>
                <ButtonMinimize />
                <ButtonMaximize />
                <ButtonRefresh />
                <ButtonClose />
            </template>

        </CardReport>
        <CardReport placeholder="card-warning" placeholder2="card-info" colNum="3" bsSize="sm"
            title="I hold the place" />
    </div>
</template>

<script>
import ButtonClose from './ButtonClose.vue';
import ButtonMaximize from './ButtonMaximize.vue';
import ButtonMinimize from './ButtonMinimize.vue';
import ButtonRefresh from './ButtonRefresh.vue';
import CardReport from './CardReport.vue';
import InfoboxSmall from './InfoboxSmall.vue';

export default {
    name: "InfoboxRecap",
    components: {
        InfoboxSmall,
        CardReport,
        ButtonMinimize,
        ButtonMaximize,
        ButtonRefresh,
        ButtonClose
    }
}
</script>
<style scoped></style>