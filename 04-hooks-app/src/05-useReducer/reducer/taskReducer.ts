import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("task-state");

  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }
  // validar mediante Zod
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);

    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  return result.data;
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      const newState = {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.length++,
        pending: state.pending++,
      };

      return newState;
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      const completed = updatedTodos.filter((todo) => todo.completed).length;
      const pending = updatedTodos.length - completed;

      const newState = {
        ...state,
        todos: updatedTodos,
        completed,
        pending,
      };
      return newState;
    }

    case "DELETE_TODO": {
      const newTodo = state.todos.filter((todo) => todo.id != action.payload);

      const completed = newTodo.filter((todo) => todo.completed).length;

      const pending = newTodo.length - completed;

      const newState = {
        ...state,
        todos: newTodo,
        length: newTodo.length,
        completed,
        pending,
      };

      return newState;
    }

    default:
      return state;
  }
};
