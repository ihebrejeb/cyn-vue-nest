<template>
    <div class="card">
        <img
          :src="project.image"
          :alt="project.title"
          class="card-img"
        />
        <div >
          <h6 >{{project.title}}</h6>
          <p >{{project.description}}</p>
          <p>
          <small>
            tasks: {{project.tasksCount}}
          </small>
        </p>
        </div>
    </div>

</template>

<script setup>
 const {project} = defineProps(['project'])

</script>
