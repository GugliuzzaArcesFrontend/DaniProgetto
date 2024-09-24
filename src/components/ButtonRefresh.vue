<!-- dependency principale: adminlte -->
 <template>
    <button type="button" class="btn btn-tool" data-card-widget="card-refresh" :data-source="dataTarget"
        :data-source-selector="sourceSelector" :data-load-on-init="dataLoadOnInit">
        <i v-if="icon" :class="iconClass"></i>
    </button>
</template>
<script>
export default{
    name:"ButtonRefresh",
    props:{
        dataTarget: String,
        sourceSelector : String,
        dataLoadOnInit: {
            type: Boolean,
            default: true
        },
        icon: {
            type: Boolean,
            default: true
        },
        iconClass: {
            type: String,
            default: "fas fa-sync-alt"
        }
    }
}
</script>
<style scoped></style>