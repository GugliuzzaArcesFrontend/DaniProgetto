<template>
    <div class="card m-0 mb-2" :class="[cardClass, cardSize, { 'collapsed-card': isCollapsed, 'maximized-card': isMaximized }]">
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
            isMaximized: false,
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
        sizes: [String, Number, Array], //accetta un array di classi o una singola bootstrap, tolta la dicitura "col-", i.e.: ['11','sm-5','lg-3']
        cardType: "", //cases: "","outline","bg","gradient"
        color: "",
    },
    computed: {
        cardClass() {
            switch (this.cardType) {

                case "outline":
                    return `card-outline card-${this.color}`;

                case "bg":
                    return `bg-${this.color}`;

                case "gradient":
                    return `bg-gradient-${this.color}`;

                default:
                    return `${this.color ? "card-" + this.color : ""}`;
            }
        },
        cardSize() {
            if (typeof this.sizes === 'object') return this.sizes.map(size => "col-" + size).join(" ")
            else if (typeof this.sizes === "string" || typeof this.sizes === "number") return "col-" + this.sizes
            else return "col"
        },
        labelClass() {
            return `badge badge-${this.labelColor}`
        },
    },
    provide() {
        return {
            maximizeCard: this.maximizeCard,
            collapseCard: this.collapseCard,
        }
    },
    
    methods: {
        collapseCard(isCollapsed) {
            this.isCollapsed = isCollapsed;
            if (this.isCollapsed == true) this.isMaximized = false;
        },
        maximizeCard(isMaximized) {
            this.isMaximized = isMaximized;
            if (this.isMaximized == true) this.isCollapsed = false;
        },
    }
}
</script>