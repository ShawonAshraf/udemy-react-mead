import React from "react";

const EditExpensePage = (props) => {
  return (
    <div>
      This is from edit expense page component {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
