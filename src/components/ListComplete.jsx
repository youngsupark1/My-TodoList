import React from "react";

export const ListComplete = ({ toDos, setTodos }) => {
  const todoCardBox = {
    border: "5px solid #08ffdb",
    margin: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    width: "400px",
  };

  const completBtn = {
    margin: "25px",
    width: "150px",
    height: "40px",
    border: "3px solid green",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  };

  const delBtn = {
    margin: "10px",
    width: "150px",
    height: "40px",
    border: "3px solid red",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  };

  return (
    <>
      <div>
        <h2>완료된 목록🎉</h2>
        {toDos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div key={todo.id} style={todoCardBox}>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <button
                  style={completBtn}
                  onClick={() => {
                    const updatedTodoList = toDos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    setTodos(updatedTodoList);
                  }}
                >
                  취소
                </button>
                <button
                  style={delBtn}
                  onClick={() => {
                    const deletedTodos = toDos.filter((item) => {
                      return item.id !== todo.id;
                    });
                    setTodos(deletedTodos);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};
