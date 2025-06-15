import React from "react";
import { Text } from "./text";
import { Loading } from "../Loading";

export interface SearchProps {
  onSearch: (value: string) => void;
  searchResults: React.ReactNode;
  name?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  prefixIcon?: React.ReactNode;
  loading?: boolean;
}

export const Search = ({ name, placeholder, className, error, onSearch, searchResults, prefixIcon, loading }: SearchProps) => {
  return (
    <div className="relative">
        <Text
            name={name}
            placeholder={placeholder}
            className={className}
            error={error}
            onChange={(e) => onSearch?.(e.target.value)}
            prefixIcon={prefixIcon}
            suffixIcon={loading ? <Loading fillColor="currentColor" size="sm" /> : null}
        />
        {searchResults && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 rounded-md border max-h-60 overflow-y-auto mt-2.5 p-4">
                {searchResults}
            </div>
        )}
    </div>
  );
};