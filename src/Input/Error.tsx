import React from "react";

export const Error = (name: string, error: string) => {
  return(
      <p
          className="text-xs font-normal leading-4 text-red-600"
          role="alert"
          id={`${name}-error`}
      >
          {error}
      </p>
  );
}