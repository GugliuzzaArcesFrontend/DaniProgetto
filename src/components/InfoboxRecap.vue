<template>

    <div class="row ">
        <CardReport colNum="12" title="Report settimanale" colorCard="card-primary">
            <template #body>
                <InfoboxSmall icon='fas fa-suitcase' color="bg-success"
                    title="Report contatti" :value="14" valueName="Conversioni" :maxValue="32" />

                <InfoboxSmall isFull=true color="bg-danger" title="Titolo infobox2"
                    valueName="Situazione" :value="'Cavoli amari'" hasFooter=true />

                <InfoboxSmall color="bg-info"
                    title="Segnaposto numero caratteri alto blablablabla" valuename="Caratteri" :value="NaN" />

                <InfoboxSmall icon='fas fa-gear' color="bg-success"
                    title="Altra informativa" valueName="Informazione" :isFull=true :value="'Info'" />
            </template>

            <template #tools>
                <ButtonMinimize />
                <ButtonMaximize />
            </template>
        </CardReport>

        <!-- <CardReport colorCard="card-danger mb-0" placeholder2="bg-secondary m-1 mt-0" colNum="6" title="Wall-e regna">
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

            <template #tools>
                <ButtonMinimize />
                <ButtonMaximize />
                <ButtonRefresh />
                <ButtonClose />
            </template>
        </CardReport>

        <CardReport colorCard="card-warning" placeholder2="card-info" colNum="3" bsSize="sm" title="I hold the place">
            <template #tools>
                <ButtonClose />
            </template>
        </CardReport> -->
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