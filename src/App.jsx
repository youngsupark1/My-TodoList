import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { ListComplete } from "./components/ListComplete";
import uuid from "react-uuid";

function App() {
  const [toDos, setTodos] = useState([
    {
      id: uuid(),
      title: "TIL 적기",
      contents: "오늘 공부한 내용 TIL에 쓰기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "프로그래머스 문제 풀기",
      contents: "두 수의 합",
      isDone: true,
    },
  ]);

  // const todoList = toDos.filter((todo) => todo.isDone === false); // 할 일 목록

  // const doneList = toDos.filter((todo) => todo.isDone === true); // 완료 목록

  return (
    <>
      <header>My Todo List</header>
      <main>
        <Input toDos={toDos} setTodos={setTodos} />
      </main>
      <section>
        <TodoList toDos={toDos} setTodos={setTodos} />
        <ListComplete toDos={toDos} setTodos={setTodos} />
      </section>
    </>
  );
}

export default App;
