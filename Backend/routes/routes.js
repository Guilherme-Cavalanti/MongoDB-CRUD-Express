const router = require("express").Router()

const TaskController = require("../controllers/taskController")
const taskController = require("../controllers/taskController")
//Códigos

router.route("/task").post((req, res) => taskController.create(req, res))
router.route("/task").get((req, res) => taskController.getTasks(req, res))
router.route("/task/:id").get((req, res) => taskController.getTaskById(req, res))
router.route("/task/delete").delete((req, res) => taskController.deleteTask(req, res))
router.route("/task/update").put((req, res) => TaskController.updateTask(req, res))
module.exports = router