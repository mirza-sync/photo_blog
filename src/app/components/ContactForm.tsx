import React from "react";

export const ContactForm = () => {
  return (
    <div className="m-auto h-screen max-w-[1240px] p-4">
      <h1 className="p-4 text-center text-2xl font-bold">
        Let&apos;s work together
      </h1>
      <form className="m-auto max-w-[600px]">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border p-3 shadow-lg"
            type="text"
            placeholder="Name"
          />
          <input
            className="border p-3 shadow-lg"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="my-2 w-full border p-3 shadow-lg"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="w-full border p-3 shadow-lg"
          name="subject"
          id="subject"
          cols={30}
          rows={10}
        ></textarea>
        <button className="mt-2 w-full border p-3 shadow-lg">Submit</button>
      </form>
    </div>
  );
};
