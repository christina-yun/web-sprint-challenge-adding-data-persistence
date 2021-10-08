const tasks = [
  {
    task_description: "Doing a task",
    task_notes: "random notes",
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: "Two tasks one stone",
    task_notes: null,
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "Two tasks one stone",
    task_notes: null,
    task_completed: 0,
    project_id: 2,
  },
];

exports.seed = function (knex) {
  return knex("tasks").insert(tasks);
};
