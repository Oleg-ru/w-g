import React, {Component} from 'react';
import "./TaskList.css"

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: "",
        }
    }

    handleInputChange = (event) => {
        this.setState({newTask: event.target.value})
    }

    addTask = () => {
        const {tasks, newTask} = this.state;
        if (newTask.trim()) {
            this.setState({
                tasks: [...tasks, newTask],
                newTask: ""
            })
        }
    }

    render() {

        return (
            <div>
                <h2>Список задач</h2>
                <input className="inputTask" type="text" value={this.state.newTask} onChange={this.handleInputChange}/>
                <button onClick={this.addTask}>Добавить задачу</button>
                <ul>
                    {
                        this.state.tasks.map((task, index) => <li key={`${task}-${index}`}>{task}</li>)
                    }
                </ul>
            </div>
        );
    }

}

export default TaskList;