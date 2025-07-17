import React from "react";
import type { Task } from '../types/Task';

interface TaskCardProps {
    task: Task;
    onDelete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
    return (
        <div style={{
            marginBottom: '0.5rem',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{task.title}</strong>
                <button onClick={() => onDelete(task.id)}
                    style={{
                        marginLeft: '0.5rem',
                        background: 'none',
                        border: 'none',
                        color: '#888',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                    title="Delete"
                >
                    x
                </button>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#666' }}>
                Created: {new Date(task.createdAt).toLocaleDateString()}
            </div>
        </div>
    );
}