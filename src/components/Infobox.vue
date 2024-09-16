<template>
    <div class="m-0 mb-2 row align-items-center  " :class="[sizeClass]">
        <div class="info-box justify-content-between" :class="[isFull?color:'']">
        <span class="info-box-icon col-2" :class="[!isFull?color:'']">
            <i :class="[icon,iconColor]"></i>
        </span>

        <div class="info-box-content col" >
            <span class="info-box-text">{{ title }}</span>
            <span v-if="typeof value === 'number'" class="info-box-number">{{ valueName }}: {{ value }}</span>
            <span v-else class="info-box-text">{{ valueName }}: {{ value }}</span>
        </div>

        <div v-if="maxValue" class="ms-auto col-4 align-self-center">
            <p>Tasso di {{ valueName.toLowerCase() }}</p>
            <div class="progress">
                <div class="progress-bar" :class="colorBar" :style="{ width: progressBar }"></div>
            </div>

            <span class="progress-description">
                {{ progressBar }} di {{ maxValue }}
            </span>
        </div>        
        <div v-if=isLoading class="overlay"><!-- segnaposto per grafica e condizione di attesa/caricamento -->
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    name: 'InfoboxSmall',
    data() {
        return {
            isLoading: false
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
            type: [String, Number]
        },
        valueName: {
            type: String,
            default: "Valore"
        },
        sizes: {
            type: [String, Number, Array],  //accetta un array di classi o una singola bootstrap, tolta la dicitura "col-", i.e.: ['11','sm-5','lg-3'],
            default: ['11',]
        },
        maxValue: {
            default: 0
        },
        isFull: false,
    },
    computed: {
        sizeClass(){
            if (typeof this.sizes === 'object') return this.sizes.map(size => "col-" + size).join(" ")
            else if (typeof this.sizes === "string" || typeof this.sizes === "number") return "col-" + this.sizes
            else return "col"
        },
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