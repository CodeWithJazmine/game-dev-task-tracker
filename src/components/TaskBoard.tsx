import { useState } from 'react';
import type { Task, TaskStatus } from '../types/Task';
import { TaskCard } from './TaskCard';
import { AddTaskForm } from './AddTaskForm';

const initialTasks: Task[] = [
    {
        id: '1',
        title: 'Create Player Movement Script',
        status: 'backlog',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Design UI Mockup',
        status: 'in-progress',
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Test Save System',
        status: 'done',
        createdAt: new Date().toISOString(),
    },
];


export const TaskBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const handleAddTask = (task: Task) => {
        setTasks((prev) => [...prev, task]);
    };

    const columns: TaskStatus[] = ['backlog', 'in-progress', 'done']

    return (
        <div style={{ padding: '1rem' }}>
            <AddTaskForm onAdd={handleAddTask} />
            <div style={{ display: 'flex', gap: '1rem' }}>
                {columns.map((col) => (
                    <div key={col} style={{ flex: 1, border: '1px solid #ccc', borderRadius: '6px', padding: '0.5rem', backgroundColor: '#f9f9f9' }}>
                        <h2 style={{ textTransform: 'capitalize' }}>{col.replace('-', ' ')}</h2>
                        {tasks
                            .filter((task) => task.status === col)
                            .map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
