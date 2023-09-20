"use client";
import { useState, useEffect } from "react";

export default function ClientForm({ serverAction, shops }: any) {
  const [input, setInput] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [shop, setShop] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      action={serverAction}
      onSubmit={() => {
        setInput("");
      }}
      className="border-white rounded-md  w-[400px] m-auto"
    >
      {buttonDisable && (
        <p className="text-sm text-center pt-[5px] text-red-500">
          Error: {error}
        </p>
      )}
      <div className="grid grid-rows-2  mb-4">
        <label className="mb-2">user email:</label>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="text-black text-center rounded-md"
          id="GroupName"
          name="GroupName"
        />
      </div>
      <div className="m-auto">
        <label>
          Select a shop:
          <select className="rounded-md w-auto pr-2 text-black ml-4">
            {shops.map((shop: string, i: number) => {
              return (
                <option className="text-black" key={i} value={`${shop}`}>
                  {shop}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      <button
        disabled={buttonDisable}
        className="  text-center w-[400px] mt-4 border-2 p-4 border-white rounded-md  bg-black align-center hover:bg-gray-700 disabled:text-gray-600 disabled:line-through"
        type="submit"
      >
        add
      </button>
    </form>
  );
}
