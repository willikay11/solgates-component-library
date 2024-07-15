
export interface InputErrorProps {
  name: string;
  error: string;
}
export const Error = ({ name, error }: InputErrorProps) => {
  return (
    <p
      className="text-xs font-normal leading-4 text-red-600"
      role="alert"
      id={`${name}-error`}
    >
      {error}
    </p>
  );
};
