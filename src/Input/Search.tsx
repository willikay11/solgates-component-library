import React from "react";
import { Text } from "./text";

export interface SearchProps {
  onSearch: (value: string) => void;
  searchResults: React.ReactNode;
  name?: string;
  placeholder?: string;
  className?: string;
  error?: string;
}

export const Search = ({ name, placeholder, className, error, onSearch, searchResults }: SearchProps) => {
  return (
    <div className="relative">
        <Text name={name} placeholder={placeholder} className={className} error={error} onChange={(e) => onSearch?.(e.target.value)} />
        {searchResults && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 rounded-md border max-h-60 overflow-y-auto mt-2.5 p-4">
                {searchResults}
            </div>
        )}
    </div>
  );
};