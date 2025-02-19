import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

// me trae todas las preguntas para el user de un test
export const allQuestions = createAsyncThunk('GET_QUESTIONS', (id) => {
  return axios
    .get(`http://localhost:3001/api/test/${id}`)
    .then((test) => test.data)
    .catch((err) => console.log(err));
});

export const allTests = createAsyncThunk('GET_TESTS', (id) => {
  return axios
    .get(`http://localhost:3001/api/test/`)
    .then((test) => test.data)
    .catch((err) => console.log(err));
});

export const setDisabled = createAction('SET_DISABLED');

export const setIndexQuestion = createAction('SET_INDEX_QUESTION')

export const resetQuestions = createAction('RESET_QUESTIONS')

