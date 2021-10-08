const db = require('./../../data/dbConfig');

async function getProjects(){
    const projectsNoBoolean = await db('projects').select('*')

    const projectsWithBoolean = projectsNoBoolean.map(project => {
        if(!project.project_completed){
            return {
                ...project,
                project_completed: false
            }
        } else {
            return {
                ...project,
                project_completed: true
            }
        }        
    });
    return projectsWithBoolean;
}

async function getProjectById(project_id){
    const projectNoBool = await db('projects').select('*').where('project_id', project_id).first();
    if(!projectNoBool.project_completed){
        return {
            ...projectNoBool,
            project_completed: false
        }
    } else {
        return {
            ...projectNoBool,
            project_completed:true
        }
    }
}

//this test isn't passing for some reason
async function createProject(newProject){
    const addBool = !newProject.project_completed === null
        ?  { ...newProject, project_completed: false }
        : { ... newProject, project_completed: true };
        
    const newId = await db('projects').insert(addBool);

    const createdProject = await getProjectById(newId)

    console.log(createdProject)
    return createdProject;
}

module.exports = {
    getProjects,
    getProjectById,
    createProject
}
