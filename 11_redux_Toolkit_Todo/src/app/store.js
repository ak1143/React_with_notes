import {configureStore} from '@reduxjs/toolkit'
import Todoreducer from '../Features/Todo/TodoSclice'

export const store=configureStore({
    reducer:Todoreducer
});