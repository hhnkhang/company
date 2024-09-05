import React from "react";

function Button({ label, icon }: { label: string; icon: any }) {
  return (
    <button className="px-8 py-3 border-2 border-colour-3 text-gray-200 font-medium rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-300 ease-in-out">
      {label}
      {icon && <span className="ml-4 mr-2"> {icon}</span>}{" "}
      {/* Icon is added here */}
    </button>
  );
}

export default Button;
