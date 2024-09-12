<template>
    <div class="info-box mx-0 row justify-content-between col-11 col-md-5 col-xl-3" :class="[isFull ? color : '']">
        <span class="info-box-icon col-2" :class="[!isFull ? color : '']">
            <i :class="[icon,iconColor]"></i>
        </span>

        <div class="info-box-content col" >
            <span class="info-box-text">{{ title }}</span>
            <span v-if="typeof value === 'number'" class="info-box-number">{{ valueName }}: {{ value }}</span>
            <span v-else class="info-box-text">{{ valueName }}: {{ value }}</span>
        </div>

        <div v-if="maxValue" class="ms-auto col-4 align-self-center">
            <p>Tasso di {{ valueName.toLowerCase() }}</p>
            <div class="progress ">
                <div class="progress-bar" :class="colorBar" :style="{ width: progressBar }"></div>
            </div>

            <span class="progress-description">
                {{ progressBar }} di {{ maxValue }}
            </span>
        </div>        
    </div>
</template>

<script>

export default {
    name: 'InfoboxSmall',
    data() {
        return {
        }
    },
    props: {
        color: {
            type: String,
            default: "",
        },
        colorBar: {
            type: String,
            default: "bg-dark",
        },
        title: {
            type: String,
            default: "Default message",
        },
        icon: {
            type: String,
            default: "fas fa-envelope",
        },
        iconColor:{
            type: String,
            default: ""},
        value: {
            type: [String, Number],
            default: ""
        },
        valueName: {
            type: String,
            default: "Valore"
        },
        maxValue: {
            default: 0
        },
        isFull: false,
    },
    computed: {
        progressBar() {
            return `${Math.floor(this.value / this.maxValue * 100)}%`
        },
        valueType() {
            return typeof this.value
        },
        
    }
}
</script>

<style scoped>
</style>