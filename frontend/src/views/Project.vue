<template>
    <div v-if="project">
        <div class="card">
            <img :src="project.image" :alt="project.title" class="card-img-sm" />
            <div>
                <h6>{{ project.title }}</h6>
                <p>{{ project.description }}</p>
                <p>
                </p>
            </div>
           
        </div>
        <div class="mb mt">
                <button>
                    Add task +
                </button>
            </div>
        <div class="card mt" v-for="task in project.tasks">
            <div>
                <h6>{{ task.title }}</h6>
                <p>{{ task.description }}</p>
                <p>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useProject from '../hooks/useProject'
const route = useRoute()
const { project } = useProject(route.params.id)
</script>


<style scoped>
.card {
    pointer-events: none;
}

.mt {
    margin-top: 1rem;
}
.mb {
    margin-bottom: 1rem;
}

.card-img-sm {
    width: 100%;
    height: 100px;
    object-fit: cover;
}
</style>
