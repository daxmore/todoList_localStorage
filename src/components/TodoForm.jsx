import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const { addTask } = useTodoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask({ id: Date.now(), task });
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add a new task"
            />
            <button
                type="submit"
                className="w-full mt-3 p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;
