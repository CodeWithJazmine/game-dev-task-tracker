export type TaskStatus = 'backlog' | 'in-progress' | 'done';

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    tags?: string[];
    createdAt: string;
}
