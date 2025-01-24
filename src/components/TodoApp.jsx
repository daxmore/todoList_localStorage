import React, { useEffect, useState } from 'react';
import { TodoProvider } from '../context/TodoContext';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [task, settask] = useState([]);

    const addTask = (newTask) => {
        settask([...task, newTask]);
    };

    const updateTask = (id, updatedTask) => {
        const updatedTasks = task.map((task) =>
            task.id === id ? updatedTask : task
        );
        settask(updatedTasks);
    };

    const deleteTask = (id) => {
        const filteredTasks = task.filter((task) => task.id !== id);
        settask(filteredTasks);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(task));
    }, [task]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        settask(tasks);
    }, []);


    return (
        <TodoProvider value={{ task, addTask, updateTask, deleteTask }}>
            <div className="w-full max-w-xl mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Todo App</h1>
                <TodoForm />
                {task.map((task) => (
                    <TodoItem key={task.id} task={task} />
                ))}
            </div>
        </TodoProvider>
    );
};

export default TodoApp;
