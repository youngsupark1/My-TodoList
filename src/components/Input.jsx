import React, { useState } from "react";
import uuid from "react-uuid";

export const Input = ({ toDos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            title: title,
            contents: contents,
            isDone: false,
          };
          setTodos([...toDos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        <label
          style={{
            margin: "20px",
          }}
        >
          제목
        </label>
        <input
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "10px",
          }}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label
          style={{
            margin: "20px",
          }}
        >
          내용
        </label>
        <input
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "10px",
          }}
          value={contents}
          onChange={() => {
            setContents(event.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            margin: "50px",
            width: "100px",
            height: "30px",
            borderRadius: "10px",
            backgroundColor: "#19e6a6",
          }}
        >
          입력
        </button>
      </form>
    </div>
  );
};
