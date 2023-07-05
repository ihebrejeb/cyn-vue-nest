import { onMounted, ref } from 'vue';
import api from '../api';

const useProjects = () => {
  const projects = ref([]);

  onMounted(() => {
    api
      .getProjects()
      .then((response) => {
        projects.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return {
    projects,
  };
};

export default useProjects;
