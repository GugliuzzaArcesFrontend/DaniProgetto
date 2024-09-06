<!-- dependency principale: adminlte -->
<template>
    <div class="card mt-0 " :class="[columnsClass,placeholder]">
        <div class="card-header":class="placeholder2" ><!--  -->
            <slot>
                <h3 class="card-title">{{ title }}</h3>
            </slot>
            <div class="card-tools">
                <ButtonMinimize />
                <ButtonMaximize />
                <ButtonRefresh />
                <ButtonClose />
            </div>
        </div>

        <div class="card-body">
            <slot name="body">
                Placeholder content
            </slot>
        </div>

        <slot name="footer">
            <div class="card-footer"></div>
        </slot>

    </div>
</template>
<script>
import ButtonClose from './ButtonClose.vue';
import ButtonMaximize from './ButtonMaximize.vue';
import ButtonMinimize from './ButtonMinimize.vue';
import ButtonRefresh from './ButtonRefresh.vue';

export default {
    name: "CardReport",
    data() {
        return {            
        }
    },
    components: {
        ButtonClose,
        ButtonMaximize,
        ButtonMinimize,
        ButtonRefresh,
    },
    props:{
        title:[String],
        placeholder:[String],
        placeholder2:[String],
        bsSize:[String],
        colNum:[String]
    },
    computed:{
        columnsClass(){
            if (this.colNum&&this.bsSize) return `col-${this.bsSize}-${this.colNum}`
            else if(this.colNum) return `col-${this.colNum}`
            else return ""
        }
    }
}
</script>