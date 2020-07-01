import { modules } from "../../objects/modules";

const ESTADO_INICIAL = {
    activeLesson: {},
    activeModule: {},
    modules: modules
};

export default function course(state = ESTADO_INICIAL, action) {
    if (action.type === 'SET_LESSON_ACTIVE') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }
    return state;
}