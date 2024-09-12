<template>

    <div class="row ">
        <CardReport colNum="12" title="Report settimanale" colorCard="card-primary">
            <template #body>
                <InfoboxSmall icon='fas fa-suitcase' title="Report contatti" :value="14" valueName="Conversioni"
                    :maxValue="32" />

                <InfoboxSmall isFull=true color="bg-danger" title="Titolo infobox2" valueName="Situazione"
                    :value="'Cavoli amari'" hasFooter=true />

                <InfoboxSmall color="bg-info" title="Segnaposto numero caratteri alto blablablabla"
                    valuename="Caratteri" :value="Infinity" />

                <InfoboxSmall icon='fas fa-gear' color="bg-success" title="Altra informativa" valueName="Informazione"
                    :isFull=true :value="'Info'" />
            </template>

            <template #tools>
                <ButtonMinimize />
                <ButtonMaximize />
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
import InfoboxSmall from './Infobox.vue';

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