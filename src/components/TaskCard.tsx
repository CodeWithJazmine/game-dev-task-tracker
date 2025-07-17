import React from "react";
import type { Task } from '../types/Task';

interface TaskCardProps {
    task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div style={{
            marginBottom: '0.5rem',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
        }}>
            <strong>{task.title}</strong>
            <div style={{ fontSize: '0.75rem', color: '#666' }}>
                Created: {new Date(task.createdAt).toLocaleDateString()}
            </div>
        </div>
    );
}