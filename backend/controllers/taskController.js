const Task = require("../models/Task");

// CREATE task
exports.createTask = async (req, res) => {
  const { title, description, due_date } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = await Task.create({
    user: req.user._id,
    title,
    description,
    due_date,
  });

  res.status(201).json(task);
};

// GET all tasks (with filter)
exports.getTasks = async (req, res) => {
  const filter = { user: req.user._id };

  if (req.query.status) {
    filter.status = req.query.status;
  }

  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json(tasks);
};

// UPDATE task
exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;
  task.due_date = req.body.due_date || task.due_date;

  const updatedTask = await task.save();
  res.json(updatedTask);
};

// DELETE task
exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await task.deleteOne();
  res.json({ message: "Task removed" });
};
