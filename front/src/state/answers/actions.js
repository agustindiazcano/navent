import { createAction} from '@reduxjs/toolkit';

export const addAnswer = createAction('ADD_ANSWER')

export const resetAnswers = createAction('RESET_ANSWER')

export const wrongAnswered = createAction('WRONG_ANSWERS')

export const clear = createAction('CLEAR')

