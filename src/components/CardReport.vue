<!-- dependency principale: adminlte -->
<template>
    <div class="card mt-0 mb-0" :class="placeholder">
        <div class="card-header" :class="placeholder2">
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

        <slot name=footer>
            <div class="card-footer">
                
            </div>
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
            placeholder: "",
            placeholder2: "",
            title: "Placeholder"
        }
    },
    components: {
        ButtonClose,
        ButtonMaximize,
        ButtonMinimize,
        ButtonRefresh,
    }
}
</script>