import express from "express";
import Task from "../models/Task.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

router.post("/", auth, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.put("/:id", auth, async (req, res) => {
  await Task.update(req.body, { where: { id: req.params.id } });
  res.json({ success: true });
});

router.delete("/:id", auth, async (req, res) => {
  await Task.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

export default router;
