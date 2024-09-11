<!-- dependency principale: adminlte -->
 <template>
    <button type="button" class="btn btn-tool" data-card-widget="maximize">
        <i class="fas fa-expand"></i>
    </button>
</template>

<script>
export default {
    name: 'ButtonMaximize',
    mounted() {
    // Avvia il plugin AdminLTE per gestire la card
    $('[data-card-widget="collapse"]').CardWidget();
  }
}
</script>
<style scoped></style>