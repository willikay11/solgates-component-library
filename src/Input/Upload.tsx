import React, { isValidElement, ReactNode, useEffect, useState } from 'react';
import { AddCircle, CloseLine, FileUpload } from '../Icons';
import colors from '../Colors';

export interface UploadProps {
  id: string;
  name: string;
  error?: string;
  imageUrls?: string[];
  multiple?: boolean;
  type?: 'button' | 'input';
  buttonContent?: ReactNode;
  showFileSelect?: boolean;
  onChange?: (file: any) => void;
  preview?: {
    height: string,
    width: string
  }
}

export const Upload = ({
  id,
  name,
  error,
  imageUrls,
  multiple = true,
  type = 'input',
  buttonContent,
  showFileSelect,
  onChange,
  preview = {
    height: '100px',
    width: '100px'
  }
}: UploadProps) => {
  const formats = 'image/*';
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const dropNDropInput = React.useRef<HTMLDivElement>(null);
  const [uploadedImages, setUploadedImages] = useState<any[]>(imageUrls || []);
  // const [dragging, setDragging] = useState<boolean>(false);

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  let errorClassName = '';

  if (Boolean(error)) {
    errorClassName = 'bg-red-50 border-red-600 text-red-600 ring-red-600';
  }

  const handleChange = (event: any) => {
    if (event.target.files?.length > 1) {
      let uploadedImages = event.target.files;

      uploadedImages = Object.keys(uploadedImages).map(
        (item) => uploadedImages[item]
      );
      onChange?.(uploadedImages);
      setUploadedImages((prevState) => [...prevState, ...uploadedImages]);
    } else {
      const uploadedImage = event.target.files?.[0];

      if (uploadedImage !== undefined) {
        onChange?.(uploadedImage);
        setUploadedImages((prevState) => [...prevState, uploadedImage]);
      }
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedImages.filter(
      (__, fileIndex) => fileIndex !== index
    );
    setUploadedImages(newFiles);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    //TODO: Add check for file types

    if (files && files.length) {
      const uploadedImages = Object.keys(files).map((item) => files[item]);
      setUploadedImages((prevState) => [...prevState, ...uploadedImages]);
    }
  };

  // const handleDragEnter = (e: any) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //
  //     setDragging(true);
  // };
  //
  // const handleDragLeave = (e: any) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //
  //     setDragging(false);
  // };

  useEffect(() => {
    dropNDropInput?.current?.addEventListener('dragover', handleDragOver);
    dropNDropInput?.current?.addEventListener('drop', handleDrop);

    return () => {
      dropNDropInput?.current?.removeEventListener('dragover', handleDragOver);
      dropNDropInput?.current?.removeEventListener('drop', handleDrop);
    };
  }, []);

  // useEffect(() => {
  //     dropNDropInput?.current?.addEventListener('dragover', handleDragOver);
  //     dropNDropInput?.current?.addEventListener('drop', handleDrop);
  //     dropNDropInput?.current?.addEventListener('dragenter', handleDragEnter);
  //     dropNDropInput?.current?.addEventListener('dragleave', handleDragLeave);
  //
  //     return () => {
  //         dropNDropInput?.current?.removeEventListener('dragover', handleDragOver);
  //         dropNDropInput?.current?.removeEventListener('drop', handleDrop);
  //         dropNDropInput?.current?.removeEventListener('dragenter', handleDragEnter);
  //         dropNDropInput?.current?.removeEventListener('dragleave', handleDragLeave);
  //     };
  // }, []);

  useEffect(() => {
    if (showFileSelect) handleClick();
  }, [showFileSelect]);
  return (
    <>
      <input
        multiple={multiple}
        type="file"
        accept={formats}
        id={id}
        name={name}
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      {uploadedImages.length > 0 ? (
        <div className="flex inline-flex flex-wrap h-full w-full">
          {uploadedImages.map((image, index) => (
            <div key={index} className={`relative ${!multiple && 'h-full w-full' } `}>
              <img
                width={preview?.width}
                height={preview?.height}
                src={
                  typeof image === 'string' ? image : URL.createObjectURL(image)
                }
                alt="Thumb"
                className="mr-2.5 mt-2 rounded"
              />
              <button
                className="absolute bottom-[5px] right-[15px] p-1 rounded bg-opacity-30 bg-gray-800"
                onClick={() => removeFile(index)}
              >
                <CloseLine size={14} color={colors.white} />
              </button>
            </div>
          ))}
          {multiple && (
            <div
              onClick={handleClick}
              className="flex flex-col w-[100px] h-[100px] bg-blue-50 rounded p-[15px] cursor-pointer items-center justify-center mt-2"
              style={{ border: '1px dashed #2563EB' }}
            >
              <AddCircle size={24} color={colors.blue['600']} />
            </div>
          )}
        </div>
      ) : (
        <>
          {type === 'input' && (
            <>
              <div
                ref={dropNDropInput}
                onClick={handleClick}
                className={`flex-col w-full bg-blue-50 rounded p-[15px] cursor-pointer border-blue-600 border-[1px] border-dashed ${errorClassName}`}
                // style={{ border: '1px dashed #2563EB' }}
              >
                <div className="flex justify-center col-span-12 mb-2">
                  <FileUpload size={24} color={colors.blue['600']} />
                </div>
                <div className="col-span-12 flex justify-center mb-2">
                  <span className="text-xs leading-4 font-medium text-blue-600">
                    Upload an Image
                  </span>
                  <span className="text-xs leading-4 font-medium text-gray-500">
                    &nbsp;or drag and drop
                  </span>
                </div>
                <div className="col-span-12 flex justify-center mb-2">
                  <span className="text-xs leading-4 font-normal text-gray-500">
                    Png, Jpg, Gif up to 10MB
                  </span>
                </div>
              </div>
              {error && (
                <p
                  className="text-xs font-normal mb-1.5 mt-1.5 leading-4 text-red-600"
                  role="alert"
                  id={`${name}-error`}
                >
                  {error}
                </p>
              )}
            </>
          )}
          {type === 'button' && isValidElement(buttonContent) &&
              buttonContent
          }
        </>
      )}
    </>
  );
};
