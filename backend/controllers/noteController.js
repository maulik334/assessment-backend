const crypto = require("crypto");

let notes = [];

exports.createNote = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Title and content are required",
    });
  }

  const newNote = {
    id: crypto.randomUUID(),
    title: String(title).trim(),
    content: String(content).trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  notes.push(newNote);
  res.status(201).json({
    success: true,
    note: newNote,
  });
};

exports.getAllNotes = (req, res) => {
  res.status(200).json({
    success: true,
    count: notes.length,
    notes,
  });
};

exports.getNoteById = (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  res.status(200).json({
    success: true,
    note,
  });
};

exports.updateNote = (req, res) => {
  const index = notes.findIndex((n) => n.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  const { title, content } = req.body;
  if (title === undefined && content === undefined) {
    return res.status(400).json({
      success: false,
      message: "Title or content is required to update",
    });
  }

  if (title !== undefined) {
    notes[index].title = String(title).trim();
  }
  if (content !== undefined) {
    notes[index].content = String(content).trim();
  }
  notes[index].updatedAt = new Date().toISOString();

  res.status(200).json({
    success: true,
    note: notes[index],
  });
};

exports.deleteNote = (req, res) => {
  const index = notes.findIndex((n) => n.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  const deletedNote = notes.splice(index, 1)[0];
  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    note: deletedNote,
  });
};
