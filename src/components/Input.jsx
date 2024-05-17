import React, { useState } from "react";
import uuid from "react-uuid";

export const Input = ({ toDos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const labelStyle = {
    margin: "20px",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const inputStyle = {
    width: "200px",
    height: "30px",
    borderRadius: "10px",
  };

  const formBtnStyle = {
    margin: "50px",
    width: "100px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#19e6a6",
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (title === "" || contents === "") {
            return alert("제목과 내용을 입력해주세요!");
          }

          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...toDos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        <label style={labelStyle}>제목</label>
        <input
          style={inputStyle}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label style={labelStyle}>내용</label>
        <input
          style={inputStyle}
          value={contents}
          onChange={() => {
            setContents(event.target.value);
          }}
        />
        <button type="submit" style={formBtnStyle}>
          입력
        </button>
      </form>
    </div>
  );
};
