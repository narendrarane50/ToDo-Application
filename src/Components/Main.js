import * as React from "react";
import Card from "react-bootstrap/Card";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    

    this.state={
        todoList: [],
        
    }
    this.count=0;
    this.listDataManipulator=this.listDataManipulator.bind(this);
    this.listDataDeleteManipulator=this.listDataDeleteManipulator.bind(this);
    this.listDataEditManipulator=this.listDataEditManipulator.bind(this);
  }

  // getTime() {
	// 	let d = new Date();
	// 	var n = d.getTime();
	// 	return n;
	// }

  listDataManipulator(text){
    // console.log(this.a);
    const listDataObject = {
      id:this.count+1,  //this.state.todoList.length+1,
      text:text
    }
    this.count+=1;
    console.log(listDataObject);
    const todoList = [...this.state.todoList,listDataObject];
    // todoList.push(listDataObject);
    this.setState({todoList});
    // this.setState([...this.state.todoList,listDataObject]);
  }

  listDataDeleteManipulator(id){
    // console.log(id);
    const finalData=this.state.todoList.filter((el)=>{if(el.id===id)
    return false;
    else
    return true;})
    this.setState({todoList:finalData});
    // console.log(finalData);
  }

  listDataEditManipulator(id,newtext){
    let a=this.state.todoList;
    // for(let i=0;i<a.length;i++){
    //   if(a[i].id===id){
    //     a[i].text=newtext;
    //     break;
    //   }
    // }
    if(newtext){
    let b= a.map((el)=>{
      if(el.id===id){
        el.text=newtext;
      }
      return el;
    })
    this.setState({todoList:b});
  }
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="main-component">
            <div className="title">
              <Card style={{ marginTop: "10em" }}>
                <Card.Body>
                  <Card.Title>My Todo List</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Manages Time
                  </Card.Subtitle>
                  <AddToDo listDataManipulator={this.listDataManipulator} />

                  <ToDoList listDataDeleteManipulator={this.listDataDeleteManipulator} listDataEditManipulator={this.listDataEditManipulator} list={this.state.todoList} />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
