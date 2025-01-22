import React, { useState } from 'react';
import { FiCheckCircle, FiEdit, FiTrash } from 'react-icons/fi';
import { useTodoContext } from '../context/TodoContext';

const TodoItem = ({ task }) => {
    const [msg, setMsg] = useState(task.task);
    const [isEditing, setIsEditing] = useState(false);
    const { updateTask, deleteTask } = useTodoContext();

    const handleEdit = () => {
        updateTask(task.id, { ...task, task: msg });
        setIsEditing(false);
    };

    return (
        <div className="flex justify-between items-center p-5 mb-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            {isEditing ? (
                <input
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="flex-1 text-gray-800 font-medium text-lg tracking-wide"
                />
            ) : (
                <span className="flex-1 text-gray-800 font-medium text-lg tracking-wide">
                    {task.task}
                </span>
            )}
            <div className="flex items-center space-x-4">
                {isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
                    >
                        <FiCheckCircle />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                    >
                        <FiEdit />
                    </button>
                )}
                <button
                    onClick={() => deleteTask(task.id)}
                    className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
                >
                    <FiTrash />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;