import { useState } from "react";

function NoteForm({ notes, setNotes }) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };
    setNotes([...notes, newNote]);

    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  }

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          className="w-full p-2 border rounded-lg"
          type="text"
          value={formData.title}
          onChange={handleChange}
          id="title"
          name="title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          type="text"
          value={formData.priority}
          onChange={handleChange}
          id="priority"
          name="priority"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          type="text"
          value={formData.category}
          onChange={handleChange}
          id="category"
          name="category"
        >
          <option value="Work">🗂️ Work</option>
          <option value="Personal">🏚️ Personal</option>
          <option value="Idea">💡 Idea</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          className="w-full p-2 border rounded-lg"
          type="text"
          value={formData.description}
          onChange={handleChange}
          id="description"
          name="description"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
