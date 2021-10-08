const db = require("./../../data/dbConfig");

async function getProjects() {
  const projectsNoBoolean = await db("projects").select("*");

  const projectsWithBoolean = projectsNoBoolean.map((project) => {
    if (!project.project_completed) {
      return {
        ...project,
        project_completed: false,
      };
    } else {
      return {
        ...project,
        project_completed: true,
      };
    }
  });
  return projectsWithBoolean;
}

async function getProjectById(project_id) {
  const projectNoBool = await db("projects")
    .select("*")
    .where("project_id", project_id)
    .first();
  if (!projectNoBool.project_completed) {
    return {
      ...projectNoBool,
      project_completed: false,
    };
  } else {
    return {
      ...projectNoBool,
      project_completed: true,
    };
  }
}

async function createProject(newProject) {
  const newId = await db("projects").insert(newProject);

  const createdProject = await getProjectById(newId);

  const addBool = !createdProject.project_completed
    ? { ...createdProject, project_completed: false }
    : { ...createdProject, project_completed: true };

  return addBool;
}

module.exports = {
  getProjects,
  getProjectById,
  createProject,
};
