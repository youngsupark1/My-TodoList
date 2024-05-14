import React from "react";

export const TodoList = ({ toDos, setTodos }) => {
  return (
    <>
      <div>
        <h2>할 일 목록🔥</h2>
        {toDos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "5px solid #08ffdb",
                  margin: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "10px",
                  width: "400px",
                }}
              >
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <button
                  style={{
                    margin: "25px",
                    width: "150px",
                    height: "40px",
                    border: "3px solid green",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  onClick={() => {
                    const newTodos = toDos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  완료
                </button>
                <button
                  style={{
                    margin: "10px",
                    width: "150px",
                    height: "40px",
                    border: "3px solid red",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
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
