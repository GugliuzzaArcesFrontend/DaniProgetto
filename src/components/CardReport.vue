<!-- dependency principale: adminlte -->
<template>
    <div class="card mt-0 " :class="[columnsClass, placeholder]">
        <div class="card-header" :class="placeholder2"><!--  -->
            <slot name="header">
                <h3 class="card-title">{{ title }}</h3>
            </slot>

            <div class="card-tools">
                <slot name="tools"></slot>
            </div>
        </div>

        <div class="card-body">
            <slot >
                Placeholder content
            </slot>
        </div>

        <slot name="footer">
            <div  class="card-footer"></div>
        </slot>
    </div>
</template>

<script>

export default {
    name: "CardReport",
    data() {
        return {
        }
    },
    props: {
        title: [String],
        placeholder: [String],
        placeholder2: [String],
        bsSize: [String],
        colNum: [String]
    },
    computed: {
        columnsClass() {
            if (this.colNum && this.bsSize) return `col-${this.bsSize}-${this.colNum}`
            else if (this.colNum) return `col-${this.colNum}`
            else return ""
        }
    }
}
</script>