<!-- dependency principale: adminlte -->
 <template>
    <button type="button" class="btn btn-tool" @click="toggleMaximize"><!-- data-card-widget="maximize" -->
        <i class="fas fa-expand"></i>
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