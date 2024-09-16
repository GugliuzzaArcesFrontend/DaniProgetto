<template>
    <ul v-show="totalPages > 1 && !isCollapsed" class="pagination pagination-sm">
        <li v-if="totalPages > 1 && currentPage > 1" class="page-item">
            <a @click="changePage(1)" class="page-link">««</a>
        </li>
        <!-- <li v-if="totalPages > 1 && currentPage > 1" class="page-item">
                        <a @click="changePage(currentPage - 1)" class="page-link">«</a>
                    </li> -->
        <li v-for="page in totalPages" class="page-item">
            <Void v-if="page > currentPage - 3 && page < currentPage + 3">
                <a v-if="page != currentPage" @click="changePage(page)" class="page-link">{{ page }}</a>
                <a v-else class="page-link">...</a>
            </Void>
        </li>
        <!-- <li v-if="currentPage < totalPages" class="page-item">
                        <a @click="changePage(currentPage + 1)" class="page-link">»</a>
                    </li> -->
        <li v-if="currentPage < totalPages" class="page-item">
            <a @click="changePage(totalPages)" class="page-link">»»</a>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'PageNavigator',
    props: {
        totalPages: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        isCollapsed: {
            type: Boolean,
            required: true
        },
        changePage: {
            type: Function,
            required: true
        }
    }
}
</script>