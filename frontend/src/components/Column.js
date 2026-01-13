import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

const colorMap = {
  amber: "bg-amber-50 border-amber-300",
  indigo: "bg-indigo-50 border-indigo-300",
  emerald: "bg-emerald-50 border-emerald-300",
};

export default function Column({ title, tasks, droppableId, color }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`border rounded-lg p-4 min-h-[420px] ${colorMap[color]}`}
        >
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {tasks.length} tasks
          </p>

          {tasks.length === 0 && (
            <p className="text-sm text-gray-400">No tasks</p>
          )}

          {tasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index} />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
