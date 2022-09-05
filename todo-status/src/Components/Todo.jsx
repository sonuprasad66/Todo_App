import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import {getData, postData, patchData, deleteData} from "../Api/Todo.js";
import Pagination from "./Pagination";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [titleSortBy, setTitleSortBy] = useState("ASC");
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleGet();
  }, [titleSortBy, page]);

  let handleGet = () => {
    setLoading(true);
    return getData({titleSortBy, page})
      .then((res) => {
        setLoading(false);
        console.log(res);
        setTodo(res);
      })
      .catch((res) => {
        setLoading(false);
      });
  };

  let handleAdd = (text) => {
    let payload = {
      title: text,
      id: new Date().toDateString() + text,
      status: false,
    };
    setLoading(true);
    postData(payload)
      .then((res) => {
        console.log(res);

        handleGet();
      })
      .catch((res) => {
        setLoading(false);
      });
  };

  let toggleHandle = (id, newStatus) => {
    setLoading(true);
    patchData(id, newStatus)
      .then((res) => {
        handleGet();
      })
      .catch((res) => {
        setLoading(false);
      });
  };

  let handleDelete = (id) => {
    setLoading(true);
    deleteData(id)
      .then((res) => {
        handleGet();
      })
      .catch((res) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <TodoAdd handleAdd={handleAdd} />
      <div>
        <button
          className="Asbtn"
          onClick={() =>
            setTitleSortBy((pre) => (pre === "ASC" ? "DESC" : "ASC"))
          }
        >
          {titleSortBy === "ASC" ? "MAKE DESC" : "MAKE ASC"}
        </button>
      </div>
      <div>{loading && "loading..."}</div>
      <h3>TOTAl STATUS</h3>
      {todo?.map((el) => (
        <TodoList
          {...el}
          key={el.id}
          id={el.id}
          handleDelete={handleDelete}
          toggleHandle={toggleHandle}
        />
      ))}

      <div>
        {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button>{page}</button>
        <button onClick={() => setPage(page + 1)}>NEXT</button> */}
      </div>
      <Pagination
        total={10}
        current={page}
        onChange={(value) => setPage(value)}
      />

      <h3>PENDING STATUS</h3>
      {todo
        ?.filter((el) => !el.status)
        .map((el) => (
          <TodoList
            {...el}
            key={el.id}
            id={el.id}
            handleDelete={handleDelete}
            toggleHandle={toggleHandle}
          />
        ))}

      <h3>COMPLETE STATUS</h3>
      {todo
        ?.filter((el) => el.status)
        .map((el) => (
          <TodoList
            {...el}
            key={el.id}
            id={el.id}
            handleDelete={handleDelete}
            toggleHandle={toggleHandle}
          />
        ))}
    </div>
  );
}

export default Todo;
