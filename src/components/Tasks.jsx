import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-emerald-700 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <div className="flex gap-2">
            <Button onClick={() => onSeeDetailsClick(task)} className="flex-shrink-0">
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)} className="flex-shrink-0">
              <TrashIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
