<!-- dependency principale: adminlte -->
 <template>
    <button type="button" class="btn btn-tool" @click="toggleMaximize"><!-- data-card-widget="maximize" -->
        <i v-if="icon" :class="iconClass"></i>
    </button>
</template>

<script>

export default {
    name: 'ButtonMaximize',
    data(){
        return {
            isMaximized: false,
        }
    },
    props:{
        icon: {
            type: Boolean,
            default: true
        },
        iconClass: {
            type: String,
            default: "fas fa-expand"
        }
    },
    inject: ['maximizeCard'],
    methods: {
        toggleMaximize() {
            this.isMaximized = !this.isMaximized;
            this.maximizeCard(this.isMaximized);
        }
    }
}
</script>
<style scoped></style>