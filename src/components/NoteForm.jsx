import { useState } from "react";
import TextInput from "./inputs/TextInput.jsx";
import SelectInput from "./inputs/SelectInput.jsx";
import TextAreaInput from "./inputs/TextAreainput.jsx";

function NoteForm({ notes, setNotes }) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

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

  function handleClick() {
    setIsFormVisible((prevState) => !prevState);
  }

  return (
    <>
      <button
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={handleClick}
      >
        {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
      </button>
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleChange}
            required={true}
          />
          <SelectInput
            name="priority"
            label="Priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟡 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />
          <SelectInput
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "🗂️ Work" },
              { value: "Personal", label: "🏚️ Personal" },
              { value: "Idea", label: "💡 Idea" },
            ]}
          />
          <TextAreaInput
            name={"description"}
            label={"Description"}
            value={formData.description}
            onChange={handleChange}
            required={true}
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
}

export default NoteForm;
