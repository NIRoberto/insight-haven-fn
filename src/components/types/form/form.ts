import { FieldProps } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
}

interface ImageUploadFieldProps {
  label: string;
  icon?: React.ReactNode;
  onChange?: (file: File | null) => void;
}

interface ImageUploadFieldProps {
  label: string;
  name: string;
  icon?: React.ReactNode;
}

export type {
  InputFieldProps,
  SelectFieldProps,
  TextareaFieldProps,
  ButtonProps,
  ImageUploadFieldProps,
};
