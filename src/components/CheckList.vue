<template>
    <div class="card card-outline card-info" :class="{ 'collapsed-card': isCollapsed }">
        <div class="card-header" >
            <h3 class="card-title">
                <i class="fas fa-clipboard-list mr-1"></i>
                To Do List
            </h3>
            <div class="card-tools d-flex">
                <ul class="pagination pagination-sm">
                    <li v-if="totalPages > 1 && currentPage > 1" class="page-item"><a @click.prevent="changePage(1)" class="page-link">««</a></li>
                    <li v-if="totalPages > 1 && currentPage > 1" class="page-item"><a @click.prevent="changePage(currentPage-1)" class="page-link">«</a></li>
                    <li v-for="page in totalPages" class="page-item">
                        <a v-if="page!=currentPage" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
                        <a v-else class="page-link">...</a>
                    </li>
                    <li v-if="currentPage < totalPages" class="page-item"><a @click.prevent="changePage(currentPage+1)" class="page-link">»</a></li>
                    <li v-if="currentPage < totalPages" class="page-item"><a @click.prevent="changePage(totalPages)" class="page-link">»»</a></li>
                </ul>
                <slot name="tools"></slot>
            </div>
        </div>

        <div class="card-body">
            <ul class="todo-list">
                <li v-for="(item, i) in paginatedList" :key="i" :id="'todo'+item.id" :class="{'done': item.status}">
                    <span class="">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </span>

                    <div class="icheck-primary d-inline ml-2">
                        <input type="checkbox" v-model="item.status" :name="item.todo" :value="item.todo" :id="'todoCheck' + item.id">
                        <label :for="'todoCheck' + item.id"></label>
                    </div>

                    <span class="text">{{ item.task }}</span>
                    <small class="badge " :class="badgeColor(item.dueDate)"><i class="far fa-clock"></i> {{
                        badgeText(item.dueDate,item.status) }}</small>
                    <div class="tools">
                        <button class="btn btn-link " @click="editItem(item)"><i class="fas fa-edit" ></i></button>
                        <button class="btn btn-link " @click="removeItem(i)"><i class="fas fa-trash-can"></i></button>
                    </div>
                </li>

                <!-- <li id="example-1">
                    <span class="handle ui-sortable-handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </span>

                    <div class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value=true name="todo2" id="todoCheck2" checked="">
                        <label for="todoCheck2"></label>
                    </div>

                    <span class="text">Make the theme responsive</span>
                    <small class="badge badge-info"><i class="far fa-clock"></i> 4 hours</small>
                    <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                    </div>
                </li> -->
            </ul>
        </div>

        <div class="card-footer clearfix">
            <button type="button" @click="showModal = true" class="btn btn-primary float-right"><i
                    class="fas fa-plus"></i> Aggiungi oggetto</button>
        </div>

        <!-- Modale -->
        <div v-if="showModal" @click.self="showModal = false" class="modal fade show d-block" id="addItemModal"
            tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addItemModalLabel">Modal title</h5>
                        <button type="button" @click="showModal = false" class="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label for="taskName">Nome mansione</label>
                            <input type="text" class="form-control" id="taskName" v-model="newItem.task">
                        </div>

                        <div class="form-group">
                            <label for="dueDate">Scadenza</label>
                            <input type="date" class="form-control" id="dueDate" v-model="newItem.dueDate">
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModal = false,resetNewItem">Chiudi</button>
                        <button type="button" class="btn btn-primary" @click="addItem">Salva</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="modal-backdrop fade show"></div>
    </div>
</template>
<script>

export default {
    name: "CheckList",
    components:{},
    data() {
        return {
            isExpanded: false,
            showModal: false,
            newItem: {
                id: 0,
                task: "",
                dueDate: "",
                todo: "",
                status: false
            },
            // localList: [...this.list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))],
            isCollapsed: false,
            currentPage: 1,
            page:0,
            
        }
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        itemsPage(){return this.isExpanded ? 20 : 5},
        localList(){return [...this.list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))]},
        totalPages() {
            return Math.ceil(this.localList.length / this.itemsPage);
        },
        paginatedList() {
            const start = (this.currentPage - 1) * this.itemsPage;
            const end = start + this.itemsPage;
            return this.localList.slice(start, end);
        }
    },
    provide() {
        return {
            collapseCard: this.collapseCard
        }
    },
    methods: {
        badgeColor(due) {
            const date = new Date();
            const dueDate = new Date(due);
            const dayDiff = Math.ceil((dueDate.getTime() - date.getTime())/(1000 * 60 * 60 * 24));

            if (dayDiff >= 3) return 'badge-info'
            else if (dayDiff < 3 && dayDiff > 0) return 'badge-warning'
            else return 'badge-danger'
        },
        badgeText(due,status) {
            const date = new Date();
            const dueDate = new Date(due);
            const dayDiff = Math.ceil((dueDate.getTime() - date.getTime() )/ (1000 * 60 * 60 * 24));

            if (status) return 'Completato';
            if (dayDiff >= 3) return `${due}`;
            else if (dayDiff < 3 && dayDiff > 0) return `In scadenza (${due})`;
            else return `Scaduto (${due})`;
        },
        addItem() {
            this.newItem.id = this.localList.length + 1;
            this.newItem.todo = `todo${this.localList.length + 1}`;  
            this.list.push({ ...this.newItem });
            this.resetNewItem();
            this.showModal = false;
        },
        editItem(item) {
            this.showModal = true;
            this.newItem = {...item};
            this.newItem.id = item.id;
            this.newItem.status = item.status;
            this.newItem.task = item.task;
            this.newItem.dueDate = item.dueDate;
        },
        resetNewItem() {
            this.newItem = {
                id: null,
                task: '',
                dueDate: '',
                todo: '',
                state: false
            };
        },
        removeItem(i) {
            this.localList.splice(i, 1);
        },
        collapseCard(isCollapsed) {
            this.isCollapsed = isCollapsed
        },
        changePage(page) {
            this.currentPage = page;
        },
    }
}
</script>
<style scoped></style>