let getData = (props) => {
  const {titleSortBy = "ASC", page = 1} = props;

  return fetch(
    `http://localhost:3004/task?_sort=title&_order=${titleSortBy}&_page=${page}&_limit=3`
  ).then((res) => res.json());
};

let postData = (payload) => {
  return fetch(`http://localhost:3004/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

let patchData = (id, newStatus) => {
  return fetch(`http://localhost:3004/task/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({status: newStatus}),
  }).then((res) => res.json());
};

let deleteData = (id) => {
  return fetch(`http://localhost:3004/task/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export {getData, postData, patchData, deleteData};
