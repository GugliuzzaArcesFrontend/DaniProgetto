<!-- dependency principale: adminlte -->
 <template>
    <button type="button" class="btn btn-tool" data-card-widget="remove">
        <i v-if="icon" :class="iconClass"></i>
    </button>
</template>
<script>
export default {
    name: "ButtonClose",
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
            default: "fas fa-times"
        }
    }
}
</script>
<style scoped></style>