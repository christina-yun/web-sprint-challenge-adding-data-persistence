const db = require('./../../data/dbConfig');

async function getTasks(){
    const tasksNoBool = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id' )    
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')

    const tasksBool = tasksNoBool.map(task => {
        if(!task.task_completed){
            return {
                ...task, 
                task_completed: false
            }
        } else {
            return {
                ...task,
                task_completed: true
            }
        }
    })
    return tasksBool;
}

async function getTaskById(task_id){
    const tasksNoBool = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
        .where('task_id', task_id)
        .first()

    const taskBool = !tasksNoBool
        ? { ...tasksNoBool, task_completed: false}
        : { ...tasksNoBool, task_completed: true }

    return taskBool;
}

async function createTask(newTask){
    const newId = await db('tasks').insert(newTask);
    const createdTask = await db('tasks').select('*').where('task_id', newId).first()

    const changeToBoolean = !createdTask.task_completed
        ? { ...createdTask, task_completed: false }
        : { ...createdTask, task_completed: true}

    return changeToBoolean;
}

module.exports = {
    getTasks,
    getTaskById,
    createTask
}
