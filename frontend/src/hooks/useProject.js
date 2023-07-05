import { onMounted, ref } from 'vue';
import api from '../api';

const useProject = (id) => {
  const project = ref(null);

  onMounted(() => {
    api
      .getProjectById(id)
      .then((response) => {
        project.value = response.data;
        api.getTasksByProjectId(id).then((response) => {
          project.value.tasks = response.data;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return {
    project,
  };
};

export default useProject;
