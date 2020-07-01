export function setLesson(module, lesson) {
    return {
        type: 'SET_LESSON_ACTIVE',
        module,
        lesson,
    }
}