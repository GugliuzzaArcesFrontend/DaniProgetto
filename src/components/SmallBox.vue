<template>
    <div class="small-box" :class="'card-warning'">
        <div class="inner">
            <h3>{{ value }}</h3>
            <p>{{ description }}</p>
        </div>

        <div class="icon">
            <i :class="icon"></i>
        </div>

        <a :href="linkAddress" class="small-box-footer">
            {{ linkDescription }} <i :class="linkIcon"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: "SmallBox",
    props: {
        value: {
            type: String,
            default: "placeholder"
        },
        description: {
            type: String,
            default: "segnaposto"
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
    }
}
</script>

<style scoped></style>