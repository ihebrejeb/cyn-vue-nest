import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000';

export default {
  getProjects() {
    return axios.get(`${BACKEND_URL}/project/`);
  },
  getProjectById(id) {
    return axios.get(`${BACKEND_URL}/project/${id}`);
  },
  getTasksByProjectId(projectId) {
    return axios.get(`${BACKEND_URL}/tasks/project/${projectId}`);
  },
  createTask(task) {
    /*
     * task = {
     *   title: 'Task name',
     *   description: 'Task description',
     *   projectId: 1,
     * }
     *
     * */
    return axios.post(`${BACKEND_URL}/tasks/`, task);
  },
};
