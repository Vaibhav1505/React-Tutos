function TodoItem({ todoName, todoDate }) {
  return <div classNameName="container text-center">
    <div classNameName="row">
      <div classNameName="col-4">
        {todoName}
      </div>
      <div classNameName="col-4">{todoDate}</div>
      <div classNameName="col-2"><button classNameName='btn btn-danger'>Remove</button></div>
    </div>
  </div>
}
export default TodoItem;