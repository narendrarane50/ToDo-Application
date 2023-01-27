import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            text:''
        }

        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onClickHandler=this.onClickHandler.bind(this);
        // this.callback=this.callback.bind(this);
    }

    onChangeHandler(e){
        this.setState({
            text:e.target.value
    });
    }

    onClickHandler(){
        // console.log(this.state.text);
        this.props.listDataManipulator(this.state.text);
    }

    render(){
        return(
            <>
                <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Task Name"
                      aria-label="Task Name"
                      aria-describedby="basic-addon2"
                      onChange={this.onChangeHandler}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={this.onClickHandler}>
                      Save
                    </Button>
                  </InputGroup>
            </>
        )
    }
}