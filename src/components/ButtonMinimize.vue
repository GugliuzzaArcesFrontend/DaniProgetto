<template>
    <button @click="toggleCollapse" type="button" class="btn btn-tool">
        <i class="fas fa-minus"></i>        
    </button>
</template>
<script>
export default {
    name: "ButtonMinimize",
    data() {
        return {
            isCollapsed: false
        }
    },
    inject: ['collapseCard'],
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed
            this.collapseCard(this.isCollapsed);
        }
    },

}
</script>
<style scoped></style>