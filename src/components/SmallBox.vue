<template>
    <div class="small-box m-0 mb-2" :class="[boxColor,sizeClass]">
        <div class="inner">
            <h3>{{ value }}</h3>
            <p>{{ description }}</p>
        </div>

        <div class="icon">
            <i :class="[icon,iconColor]"></i>
        </div>

        <a :href="linkAddress" class="small-box-footer">
            {{ linkDescription }} <i :class="linkIcon"></i>
        </a>
        <div v-if=isLoading class="overlay"><!-- segnaposto per grafica e condizione di attesa/caricamento -->
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "SmallBox",
    data() {
        return {
            isLoading: false
        }
    },
    props: {
        value: {
            type: String,
            default: "placeholder"
        },
        description: {
            type: String,
            default: "segnaposto"
        },
        boxColor: {
            type: String,
            default: "bg-primary"
        },
        boxSizes: {
            type: [String,Number,Array],
            default: "col-6"
        },
        icon: {
            type: String,
            default: "fas fa-envelope"
        },
        iconColor: {
            type: String,
            default: ""
        },
        linkAddress: {
            type: String,
            default: "#"
        },
        linkDescription: {
            type: String,
            default: "Redirect"
        },
        linkIcon: {
            type: String,
            default: "fas fa-arrow-circle-right"
        }
    },
    computed: {
        sizeClass(){
            if (typeof this.boxSizes === 'object') return this.boxSizes.map(size => "col-" + size).join(" ")
            else if (typeof this.boxSizes === "string" || typeof this.boxSizes === "number") return "col-" + this.boxSizes
            else return "col"
        },
    },
}
</script>

<style scoped></style>