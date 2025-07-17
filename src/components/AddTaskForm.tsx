import React, { useState } from 'react';
import type { Task, TaskStatus } from '../types/Task';

interface AddTaskFormProps {
    onAdd: (task: Task) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<TaskStatus>('backlog');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            status,
            createdAt: new Date().toISOString(),
        };
        onAdd(newTask);
        setTitle('');
        setStatus('backlog');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                required
                style={{ marginRight: '0.5rem' }}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)} style={{ marginRight: '0.5rem' }}>
                <option value="backlog">Backlog</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};