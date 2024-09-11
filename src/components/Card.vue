<template>
    <div class="card" :class="cardClass">
        <div class="card-header" :class="headerClasses">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <span v-if="label" class="badge" :class="labelColor">{{ label }}</span>
                <slot name="tools"></slot>
            </div>
        </div>

        <div class="card-body row justify-content-center justify-content-md-around" >
            <slot></slot>
        </div>

        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            headerClasses:[
            ]
        }
    },
    props: {
        title: "",
        label: {
            type: String,
            default: ""
        },
        labelColor: {
            type: String,
            default: "badge-primary"
        },
        cardClass: {
            type: String,
            default: ""
        }
    },
    computed: {
        cardColor(){
        }
    }
}
</script>