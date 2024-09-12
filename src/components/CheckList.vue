<template>
    <div class="card">
        <div class="card-header ui-sortable-handle" style="cursor: move;">
            <h3 class="card-title">
                <i class="fas fa-clipboard-list mr-1"></i>
                To Do List
            </h3>
            <div class="card-tools">
                <ul class="pagination pagination-sm">
                    <li class="page-item"><a href="#" class="page-link">«</a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">»</a></li>
                </ul>
            </div>
        </div>

        <div class="card-body">
            <ul class="todo-list ui-sortable" data-widget="todo-list">
                <li v-for="(item, i) in list" :key="i">
                    <span class="handle ui-sortable-handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </span>

                    <div class="icheck-primary d-inline ml-2">
                        <input type="checkbox" :value="item.state" :name="item.todo" :id="item.id">
                        <label :for="item.todo"></label>
                    </div>

                    <span class="text">{{ item.task }} Scadenza:{{ item.dueDate }}</span>
                    <small class="badge badge-danger"><i class="far fa-clock"></i>{{ item.time }}</small>

                    <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-can"></i>
                    </div>
                </li>
                <li>
                    <span class="handle ui-sortable-handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </span>

                    <div class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo1" id="todoCheck1">
                        <label for="todoCheck1"></label>
                    </div>

                    <span class="text">Design a nice theme</span>
                    <small class="badge badge-danger"><i class="far fa-clock"></i> 2 mins</small>

                    <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-can"></i>
                    </div>
                </li>
                <li class="done">
                    <span class="handle ui-sortable-handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </span>
                    <div class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo2" id="todoCheck2" checked="">
                        <label for="todoCheck2"></label>
                    </div>
                    <span class="text">Make the theme responsive</span>
                    <small class="badge badge-info"><i class="far fa-clock"></i> 4 hours</small>
                    <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                    </div>
                </li>
                
            </ul>
        </div>

        <div class="card-footer clearfix">
            <button type="button" class="btn btn-primary float-right"><i class="fas fa-plus"></i> Add item</button>
        </div>
    </div>
</template>
<script>

export default {
    name: "CheckList",
    data() {
        return {
            
        }
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    computed:{

    },
    methods: {
    }
}
</script>
<style scoped></style>