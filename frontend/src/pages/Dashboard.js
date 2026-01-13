import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Column from "../components/Column";
import AddTaskModal from "../components/AddTaskModal";
import { DragDropContext } from "@hello-pangea/dnd";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTasks = async () => {
    const url =
      filter === "all" ? "/tasks" : `/tasks?status=${filter}`;
    const { data } = await API.get(url);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    await API.put(`/tasks/${result.draggableId}`, {
      status: result.destination.droppableId,
    });

    fetchTasks();
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <Navbar
        user={user}
        onLogout={logoutHandler}
        onNewTask={() => setShowModal(true)}
      />

      <div className="p-6 bg-slate-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Task Board</h2>

        <div className="mb-6">
          <label className="text-sm font-medium mr-2">
            Filter by Status
          </label>
          <select
            className="border border-slate-300 px-3 py-1 rounded bg-white"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-6">
            <Column
              title="Pending"
              color="amber"
              droppableId="pending"
              tasks={tasks.filter((t) => t.status === "pending")}
            />
            <Column
              title="In Progress"
              color="indigo"
              droppableId="in-progress"
              tasks={tasks.filter((t) => t.status === "in-progress")}
            />
            <Column
              title="Completed"
              color="emerald"
              droppableId="completed"
              tasks={tasks.filter((t) => t.status === "completed")}
            />
          </div>
        </DragDropContext>
      </div>

      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onTaskAdded={fetchTasks}
        />
      )}
    </>
  );
}
