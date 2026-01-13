export default function Navbar({ user, onLogout, onNewTask }) {
  return (
    <div className="bg-slate-800 text-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task Management System</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-300">{user.email}</span>

        <button
          onClick={onNewTask}
          className="bg-emerald-500 hover:bg-emerald-600 px-3 py-1 rounded"
        >
          + New Task
        </button>

        <button
          onClick={onLogout}
          className="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
