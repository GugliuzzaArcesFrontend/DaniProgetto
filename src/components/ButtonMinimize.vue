<template>
    <button @click="toggleCollapse" type="button" class="btn btn-tool">
        <i v-if="icon" :class="iconClass"></i>       
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
    props:{
        icon: {
            type: Boolean,
            default: true
        },
        iconClass: {
            type: String,
            default: "fas fa-minus"
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