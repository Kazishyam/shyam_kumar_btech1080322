import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3 mb-3 border border-slate-200"
        >
          <h4 className="font-semibold">{task.title}</h4>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className="text-xs text-gray-400 mt-1">
            📅 {task.due_date?.slice(0, 10)}
          </p>
        </div>
      )}
    </Draggable>
  );
}
