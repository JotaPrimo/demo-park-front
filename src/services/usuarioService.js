import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/usuarios',
});

export const getUsuarios = () => api.get('');
export const getUsuario = (id) => api.get(`${id}`);
export const createUsuario = (usuario) => api.post(`/${usuario}`);
export const updateUsuario = (id, usuario) => api.put(`/${id}`, usuario);
export const deleteUsuario = (id) => api.delete(`/${id}`);