import React from 'react';
import './main.css';
import { StudentService } from '../../services/student.service';
import { Card } from '../common/Card';

const studentService = new StudentService();

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        //We can manage our own state within a stateful component.
        this.state = {
            students: []
        };
    }

    async componentDidMount() {
        const data = await studentService.getStudents();
        
        if (data !== undefined) {
            this.setState({
                students: data
            });
        }
    }

    render() {
        return (
            <div className="main">
                {this.state.students.map(student => {
                    return (<Card key={student.firstName} student={student} />)
                })}
            </div>
        );
    }
}