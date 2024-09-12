<template>
    <div class="card" :class="[cardClass, cardSize, { 'collapsed-card': isCollapsed }]">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <span v-if="label" :class="labelClass">{{ label }}</span>
                <slot name="tools"></slot>
            </div>
        </div>

        <div class="card-body row justify-content-center justify-content-md-between">
            <slot></slot>
        </div>

        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
        <div v-if=isLoading class="overlay"><!-- segnaposto per grafica e condizione di attesa/caricamento -->
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            isCollapsed: false,
            isLoading: false
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
            default: ""
        },
        cardSizes: [String, Number, Array], //accetta un array di classi o una singola bootstrap, tolta la dicitura "col-", i.e.: ['11','sm-5','lg-3']
        cardType: "", //cases: "","outline","bg","gradient"
        cardColor: "",
    },
    computed: {
        cardClass() {
            switch (this.cardType) {

                case "outline":
                    return `card-outline card-${this.cardColor}`;

                case "bg":
                    return `bg-${this.cardColor}`;

                case "gradient":
                    return `bg-gradient-${this.cardColor}`;

                default:
                    return `${this.cardColor ? "card-" + this.cardColor : ""}`;
            }
        },
        cardSize() {
            if (typeof this.cardSizes === 'object') return this.cardSizes.map(size => "col-" + size).join(" ")
            else if (typeof this.cardSizes === "string" || typeof this.cardSizes === "number") return "col-" + this.cardSizes
            else return "col"
        },
        labelClass() {
            return `badge badge-${this.labelColor}`
        },
    },
    provide() {
        return {
            collapseCard: this.collapseCard
        }
    },
    methods: {
        collapseCard(isCollapsed) {
            this.isCollapsed = isCollapsed
        }
    }
}
</script>