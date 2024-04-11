import React from 'react';

export default function Form({ data, onSubmit, onForgetPassword, onRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col">
      <h1 className="text-xl font-bold mb-8">{data.title}</h1>
      <form className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        {data.inputs.map((input, index) => (
          <div key={index} className="mb-4 w-full">
            <label htmlFor={input.id} className="block mb-1">{input.label} {input.required && <span className="text-red-600">*</span>}</label>
            <input type={input.type} id={input.id} placeholder={input.placeholder} className="border border-gray-400 p-2 rounded-md w-full" />
          </div>
        ))}
        <div className="flex justify-between w-full mb-6">
          <button type="submit" className="bg-primary hover:bg-primary-500 text-white px-4 py-2 rounded-md">{data.submitText}</button>
          {onForgetPassword && <button onClick={onForgetPassword} className="text-primary hover:text-primary-400">{data.buttonSide}</button>}
        </div>
      </form>
      {onRegister && (
        <div className="flex justify-center items-center w-full mt-4">
          <p className="mr-2">{data.registerText}</p>
          <button onClick={onRegister} className="text-primary hover:text-primary-400">{data.navTo}</button>
        </div>
      )}
    </div>
  );
}
