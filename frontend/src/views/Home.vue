<template>
    <h3>Projects - {{ projects.length }}</h3>
    <div class="grid">
        <project-card v-for="project in projects" :key="project.id" :project="project" />

    </div>
</template>


<script setup>
import useProjects from '../hooks/useProjects'
import ProjectCard from '../components/ProjectCard.vue'
const { projects } = useProjects()

</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

</style>