<template>

    <div class="info-box" :class="isFull ? colorClass : ''">
        <span class="info-box-icon" :class="!isFull ? colorClass : ''">
            <i :class="iconClass"></i>
        </span>

        <div class="info-box-content">
            <span class="info-box-text">{{ title }}</span>
            <span v-if="valueType === 'number'" class="info-box-number">Valore: {{ value }}</span>
            <span v-else class="info-box-text">Valore non numerico: {{ value }}</span>
        </div>

        <div v-if="maxValue" >
            <div class="progress">
                <div class="progress-bar bg-info" :style="{ width: progressBar }"></div>
            </div>

            <span class="progress-description">
                {{ progressBar }}% Increase in 30 Days
            </span>

        </div>

        <!-- <div class="card-tools" style="float: right; display: block">
            <slot name="tools"></slot>
        </div> -->
        <!-- <button @click="console.log('debug:' + typeof value + ' ' + value)">debug</button> -->

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
            type: [Number, String],
            default: () => 0
        },
        maxValue: {
            default: () => 0
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
            return `${(this.value / this.maxValue).toFixed(2) * 100}%`
        },
        valueType() {
            return typeof this.value
        }

    }
}
</script>

<style scoped></style>