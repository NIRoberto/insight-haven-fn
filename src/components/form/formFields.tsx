import { useField } from "formik";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  ButtonProps,
  ImageUploadFieldProps,
  InputFieldProps,
  SelectFieldProps,
  TextareaFieldProps,
} from "../types/form/form";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        {...field}
        type={type}
        placeholder={props.placeholder}
        className={`shadow appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-200 focus:shadow-outline ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs italic">{meta.error}</p>
      ) : null}
    </div>
  );
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {label}
      </label>
      <select
        {...field}
        className={`shadow appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs italic">{meta.error}</p>
      ) : null}
    </div>
  );
};

const TextareaField: React.FC<TextareaFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {label}
      </label>
      <textarea
        {...field}
        placeholder={props.placeholder}
        className={`shadow appearance-none border rounded-xl min-h-28 bg-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs italic">{meta.error}</p>
      ) : null}
    </div>
  );
};

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  label,
  name,
  icon,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [field, meta, helpers] = useField(name);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      helpers.setValue(selectedFile); // Update Formik field value
    } else {
      setFile(null);
      setPreview(null);
      helpers.setValue(null); // Clear Formik field value
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-xl flex items-center flex-col">
      <label className="flex items-center cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex items-center flex-col gap-2 p-2">
          {icon && <span className="mr-2">{icon}</span>}
          <span>{label}</span>
        </div>
      </label>
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="max-w-full h-16  border-gray-300 rounded"
          />
        </div>
      )}
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs italic mt-2">{meta.error}</p>
      ) : null}
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  loading = false,
  ...props
}) => {
  const baseStyles =
    "py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} flex items-center justify-center`;

  return (
    <button className={combinedStyles} disabled={loading} {...props}>
      {loading ? <ClipLoader size={20} color="white" /> : label}
    </button>
  );
};

export { InputField, SelectField, TextareaField, ImageUploadField, Button };
