<template>
    <div class="row m-0 mb-2 align-items-center" :class="sizeClass">
        <div class="small-box" :class="color">
            <div class="inner">
                <h3>{{ value }}</h3>
                <p>{{ description }}</p>
            </div>

            <div class="icon">
                <i :class="[icon, iconColor]"></i>
            </div>

            <a :href="linkAddress" class="small-box-footer">
                {{ linkDescription }} <i :class="linkIcon"></i>
            </a>
            <div v-if=isLoading class="overlay"><!-- segnaposto per grafica e condizione di attesa/caricamento -->
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
            </div>
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
            type: [String, Number],
            default: "placeholder"
        },
        description: {
            type: String,
            default: "segnaposto"
        },
        color: {
            type: String,
            default: "bg-primary"
        },
        sizes: {
            type: [String, Number, Array],
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
        sizeClass() {
            if (typeof this.sizes === 'object') return this.sizes.map(size => "col-" + size).join(" ")
            else if (typeof this.sizes === "string" || typeof this.sizes === "number") return "col-" + this.sizes
            else return "col"
        },
    },
}
</script>

<style scoped></style>