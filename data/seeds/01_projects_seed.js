const projects = [
  {
    project_name: "My first project",
    project_description: "something",
    project_completed: 0,
  },
  {
    project_name: "Second project",
    project_description: null,
    project_completed: 0,
  },
  { project_name: "Third", project_description: 0, project_completed: 1 },
];

exports.seed = function (knex) {
  return knex("projects").insert(projects);
};
