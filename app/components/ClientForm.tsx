"use client";
import { useState, useEffect } from "react";

export default function ClientForm({ serverAction, shops }: any) {
  const [input, setInput] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setButtonDisable(false);
    shops.map((shop: any) => {
      if (input.toLowerCase() == shop.toLowerCase()) {
        setButtonDisable(true);
        setError("Shop already exists!");
      }
      if (input.includes(" ")) {
        setButtonDisable(true);
        setError("No spaces! useCapitalsLikeThis or _");
      }
    });
  }, [input]);

  return (
    <form
      action={serverAction}
      onSubmit={() => {
        setInput("");
      }}
      className="border-2 border-white rounded-md w-1/2 m-auto grid grid-rows-2 "
    >
      {buttonDisable && (
        <p className="text-sm text-center pt-[5px] text-red-500">
          Error: {error}
        </p>
      )}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        className="text-black text-center"
        id="GroupName"
        name="GroupName"
      ></input>
      <button
        disabled={buttonDisable}
        className="text-center w-full bg-black align-center hover:bg-gray-700 disabled:text-gray-600 disabled:line-through"
        type="submit"
      >
        add
      </button>
    </form>
  );
}
