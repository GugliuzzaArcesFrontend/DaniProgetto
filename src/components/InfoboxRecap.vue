<template>

    <div class="m-1 row justify-content-around justify-content-md-between ">
        <CardReport colNum="12" title="Report settimanale" placeholder="card-primary">
            <template #body>
                <InfoboxSmall class="col-11 col-md-5 col-xl-3" icon='fas fa-suitcase' color="bg-success" title="Titolo infobox"
                    :value="14" :maxValue="50" />

                <InfoboxSmall class="col-11 col-md-5 col-xl-3" isFull=true color="bg-danger" title="Titolo infobox2"
                    :value="'Cavoli amari'" />

                <InfoboxSmall class="col-11 col-md-5 col-xl-3" icon='fas fa-suitcase' color="bg-info" title="Segnaposto numero caratteri alto blablablabla"
                    :value="25" />

                <InfoboxSmall class="col-11 col-md-5 col-xl-3" icon='fas fa-suitcase' color="bg-success" title="Quarta infobox"
                    isFull=true :value="'Info breve'" />
            </template>

            <template #tools>
                <ButtonMinimize />
                <ButtonMaximize />
            </template>
        </CardReport>


        <CardReport placeholder="card-danger mb-0" placeholder2="bg-secondary m-1 mt-0" colNum="6" title="Wall-e regna">
            <template #body> Placeholder body con slot
                <div class="row justify-content-between">
                    <CardReport colNum="6">
                        <template #tools>
                            <ButtonClose />
                        </template>
                    </CardReport>

                    <CardReport colNum="4">
                        <template #tools>
                            <ButtonMinimize />
                            <ButtonClose />
                        </template>
                    </CardReport>
                </div>
            </template>

            <!-- non si possono affiggere attributi all'elemento template #destinazione -->
            <template #footer ></template>

            <template #tools>
                <ButtonMinimize />
                <ButtonMaximize />
                <ButtonRefresh />
                <ButtonClose />
            </template>
        </CardReport>

        <CardReport placeholder="card-warning" placeholder2="card-info" colNum="3" bsSize="sm" title="I hold the place">
            <template #tools>
                <ButtonClose />
            </template>
        </CardReport>
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