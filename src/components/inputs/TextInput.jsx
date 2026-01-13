function TextInput({ name, label, value, onChange, required = false }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        className="w-full p-2 border rounded-lg"
        type="text"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        required={required}
      />
    </div>
  );
}

export default TextInput;
