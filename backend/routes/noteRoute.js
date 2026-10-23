const express = require("express");
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

router.route("/").post(createNote).get(getAllNotes);
router.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

module.exports = router;
