import React from "react";

const Pagination = ({total, current, onChange}) => {
  let prev = (
    <button disabled={current === 1} onClick={() => onChange(current - 1)}>
      PREV
    </button>
  );
  let next = (
    <button disabled={current === total} onClick={() => onChange(current + 1)}>
      NEXT
    </button>
  );
  let pages = new Array(total).fill(0).map((a, i) => (
    <button onClick={() => onChange(i + 1)} disabled={current === i + 1}>
      {i + 1}
    </button>
  ));

  return (
    <div>
      {prev}
      {pages}
      {next}
    </div>
  );
};

export default Pagination;
