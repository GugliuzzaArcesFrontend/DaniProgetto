<!-- link e script dependecies prese dal sorgente di https://adminlte.io/themes/v3/ -->
<template>
    <!--     <div class="card-header">
        
    </div>
     -->
    <div class="info-box" :class="isFull ? colorClass : ''">
        <span class="info-box-icon" :class="!isFull ? colorClass : ''">
            <i :class="iconClass"></i>
        </span>

        <div class="info-box-content">
            <span class="info-box-text">{{ title }}</span>
            <span v-if="valueType == 'number'" class="info-box-number">Valore: {{ value }}</span>
            <span v-else class="info-box-text">Valore non numerico: {{ value }}</span>
        </div>
        
        <div v-if="maxValue" class="row">
            <div class="progress">
                <div class="progress-bar bg-info" :style="{ width: progressBar }"></div>
            </div>

            <span class="progress-description">
                {{ value / maxValue * 100 }}% Increase in 30 Days
            </span>
        </div>
        <button @click="console.log('debug:' + typeof value + ' ' + value)">debug</button>
        <div class="card-tools">
            <slot name="tools"></slot>
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
            default: () => "info",
        },
        title: {
            type: String,
            default: () => "Default message",
        },
        icon: {
            type: String,
            default: () => "envelope",
        },
        value: {
            type: Number,
            default: () => 0
        },
        maxValue: {
            default: () => null
        },
        isFull: false,
    },
    computed: {
        iconClass() {
            return `fas fa-${this.icon}`
        },
        colorClass() {
            return `bg-${this.color}`
        },
        progressBar() {
            return `${this.value / this.maxValue * 100}%`
        },
        valueType() {
            if (typeof this.value === 'number') return 'number'
        }

    }
}
</script>

<style scoped></style>