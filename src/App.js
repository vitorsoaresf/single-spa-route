import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@vt/utils";

export const App = () => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SALVANDO...");
    emitEvent("@vt/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
    });

    updateTask("");
  };

  return (
    <>
      <h1>@vt/react-route</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@vt/react-parcel")} />
    </>
  );
};
