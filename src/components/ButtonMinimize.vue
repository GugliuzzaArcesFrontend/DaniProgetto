<template>
    <button type="button" class="btn btn-tool" data-card-widget="collapse">
        <i class="fas fa-minus"></i>
    </button>
</template>
<script>
export default {
    name: "ButtonMinimize"
    , methods: {
        minimizeCard(){
            
        }
    },
    mounted() {
    // Avvia il plugin AdminLTE per gestire la card
    $('[data-card-widget="collapse"]').CardWidget();
  }
}
</script>
<style scoped></style>