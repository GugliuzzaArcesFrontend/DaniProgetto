<template>
    <div class="card" :class="[cardClass, cardSize sized]">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <span v-if="label" :class="labelClass">{{ label }}</span>
                <slot name="tools"></slot>
            </div>
        </div>

        <div class="card-body row justify-content-center justify-content-md-around">
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
            sized: {
                'collapsed-card': false
            }
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
                    return `card-outline card-${this.cardColor} ${this.sizeString}`;

                case "bg":
                    return `bg-${this.cardColor} ${this.sizeString}`;

                case "gradient":
                    return `bg-gradient-${this.cardColor} ${this.sizeString}`;

                default:
                    return `${this.cardColor ? "card-" + this.cardColor : ""} ${this.sizeString}`;
            }
        },
        cardSize() {
            if (typeof this.cardSizes === 'array') return this.cardSizes.map(size => "col-" + size).join(" ")
            else if (typeof this.cardSizes === "string" || typeof this.cardSizes === "number") return "col-" + this.cardSizes
            else return "col"
        },
        labelClass(){
            return `badge badge-${this.labelColor}`
        }
    }
}
</script>