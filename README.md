# Game Dev Task Tracker

A lightweight task board built with React and TypeScript to help solo developers and small teams organize their game development workflow.

## Features

- Add tasks with a title and column (Backlog, In Progress, Done)
- Real-time updates using React state
- Type-safe with custom task types
- Simple layout, easy to expand (drag-and-drop, filtering, tags, etc.)

## Built With

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## How to Run

```bash
npm install
npm run dev
```
Then open the local development URL shown in your terminal (typically http://localhost:5173).

## Folder Structure

```css
src/
├── components/
│   ├── AddTaskForm.tsx
│   ├── TaskBoard.tsx
│   └── TaskCard.tsx
├── types/
│   └── Task.ts
├── App.tsx
└── main.tsx
```

## Future Ideas

- Drag and drop between columns
- Save to localStorage or Firebase
- Filtering by tags or priority
- Dark mode
- Export tasks as JSON or Markdown.  

---

This project was created to practice modern TypeScript and component-based architecture while building a practical tool for organizing development tasks.

