function SelectInput({
  name,
  label,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <select
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
