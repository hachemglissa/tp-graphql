let tasks = [

  {
    id: '1',
    title: 'Front-end',
    description: 'Créer interface React',
    completed: false,
    duration: 5,
  },

  {
    id: '2',
    title: 'Back-end',
    description: 'Créer API Node',
    completed: false,
    duration: 8,
  },

];

const taskResolver = {

  Query: {

    task: (_, { id }) =>
      tasks.find(task => task.id === id),

    tasks: () => tasks,
  },

  Mutation: {

    addTask: (_, {
      title,
      description,
      completed,
      duration
    }) => {

      const task = {

        id: String(tasks.length + 1),
        title,
        description,
        completed,
        duration,
      };

      tasks.push(task);

      return task;
    },

    completeTask: (_, { id }) => {

      const task =
        tasks.find(task => task.id === id);

      if (task) {

        task.completed = true;
        return task;
      }

      return null;
    },

    changeDescription: (_, {
      id,
      description
    }) => {

      const task =
        tasks.find(task => task.id === id);

      if (task) {

        task.description = description;
        return task;
      }

      return null;
    },

    deleteTask: (_, { id }) => {

      const taskIndex =
        tasks.findIndex(task => task.id === id);

      if (taskIndex !== -1) {

        const deletedTask =
          tasks.splice(taskIndex, 1);

        return deletedTask[0];
      }

      return null;
    },
  },
};

module.exports = taskResolver;