<template>
    <div class="row justify-content-center">
        <CardReport placeholder="card-danger" placeholder2="card-success" colNum="6" title="Wall-e rocks">
            <template class="justify-content-center" #body>Placeholder body con slot<CardReport colNum="8"/></template>
            <template #footer></template>
        </CardReport> 
        <CardReport placeholder="card-warning" placeholder2="card-info" colNum="3" bsSize="sm" 
            title="I hold the place" />
    </div>
</template>

<script>
import CardReport from './CardReport.vue';

export default {
    name: "InfoboxRecap",
    components: { CardReport }
}
</script>
<style scoped></style>