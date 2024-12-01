import { FC, useState } from "react";
import { ModalProps } from "./modal.type";
import '../../app/globals.css';

export const Modal: FC<ModalProps> = ({
  type = "simple",
  size = "medium",
  title = "Default Title",
  description = "Default Description",
  positiveLabel = "Submit",
  negativeLabel = "Cancel",
  onSubmit = () => alert("Submitted!"),
  onCancel = () => alert("Cancelled!"),
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const typeClass = {
    simple: "border border-gray-200 bg-white text-gray-900",
    rounded: "rounded-lg shadow-lg border border-gray-200 bg-white text-gray-900",
  }[type];

  const sizeClass = {
    small: "max-w-sm p-4 text-sm",
    medium: "max-w-md p-6 text-base",
    large: "max-w-lg p-8 text-lg",
  }[size];

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={[
              "relative bg-white",
              typeClass,
              sizeClass,
              "rounded shadow-lg",
            ].join(" ")}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            {children || (
              <div>
                <h2 className="font-bold mb-4">{title}</h2>
                <p className="text-gray-700 mb-6">{description}</p>
              </div>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => {
                  onCancel();
                  closeModal();
                }}
              >
                {negativeLabel}
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  onSubmit();
                  closeModal();
                }}
              >
                {positiveLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
