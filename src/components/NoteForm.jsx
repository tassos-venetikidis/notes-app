import { useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          className="w-full p-2 border rounded-lg"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          name="description"
        ></textarea>
      </div>
      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
