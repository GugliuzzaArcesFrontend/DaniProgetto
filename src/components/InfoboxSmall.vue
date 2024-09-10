<template>
    <div class="info-box" :class="[isFull ? color : '']">
        <span class="info-box-icon col-2" :class="[!isFull ? color : '']">
            <i :class="icon"></i>
        </span>

        <div class="info-box-content col-12" :class="infoBoxSize">
            <span class="info-box-text">{{ title }}</span>
            <span v-if="typeof value === 'number'" class="info-box-number">Valore: {{ value }}</span>
            <span v-else class="info-box-text">Valore non numerico: {{ value }}</span>
        </div>

        <div v-if="maxValue" class="col-6">
            <div class="progress">
                <div class="progress-bar bg-info" :style="{ width: progressBar }"></div>
            </div>

            <span class="progress-description">
                {{ progressBar }}% di {{ maxValue }}
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
            default: "bg-info",
        },
        title: {
            type: String,
            default: "Default message",
        },
        icon: {
            type: String,
            default: "fas fa-envelope",
        },
        value: {
            default: 0
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
        infoBoxSize(){
            return this.maxValue?'col-lg-4':'col-lg-10'
        }
    }
}
</script>

<style scoped></style>