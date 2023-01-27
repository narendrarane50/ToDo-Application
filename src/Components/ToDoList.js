import React from "react";
import Table from "react-bootstrap/Table";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    // this.deleteHandler=this.deleteHandler.bind(this);
    
  }

  deleteHandler(id){
    // console.log("Delete",id);
    this.props.listDataDeleteManipulator(id);
  }

  editHandler(id,oldtext){
    const newtext = prompt("Please Enter Text",oldtext);
    this.props.listDataEditManipulator(id,newtext);
  }

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((el) => (
              <tr>
                <td>{el.id}</td>
                <td>{el.text}</td>
                <td>
                  <button onClick={()=>{
                    this.deleteHandler(el.id);
                  }}>Delete</button>
                  <button onClick={()=>{
                    this.editHandler(el.id,el.text);
                  }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
