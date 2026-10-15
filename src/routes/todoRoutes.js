import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: req.userId,
    },
  });

  res.json(todos);
});

router.post("/", async (req, res) => {
  const { task } = req.body;
  const newTodo = await prisma.todo.create({
    data: {
      userId: req.userId,
      task,
    },
  });

  res.json(newTodo);
});

router.put("/:id", async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;

  const updatedTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
    },
    data: {
      completed,
    },
  });

  res.json({ message: "Todo completed" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  await prisma.todo.delete({
    where: {
      id: parseInt(id),
      userId,
    },
  });

  res.send({ message: "Todo deleted!" });
});

export default router;
