import React, { Component } from 'react'
import ProjectList from './ProjectList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Project extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterDetails: {
                customer: '',
                projectName: '',
                projectManager: '',
                deliveryManager: '',
                projectStatus: '',
                startDate: '',
                endDate: ''
            }
        }
    }

    updateFieldByVal = (event, name, type = '') => {
        const fieldVal = (type === 'date') ? event : event.target.value;
        const filterDetails = this.state.filterDetails;
        filterDetails[name] = fieldVal;
        this.setState({
            filterDetails
        })
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>WSR Application</h3>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">Customer</label>
                            <select className="form-control" value={this.state.filterDetails.customer} onChange={(event) => this.updateFieldByVal(event, 'customer')}>
                                <option value=''>Select</option>
                                <option value="1">Customer 1</option>
                                <option value="2">Customer 2</option>
                                <option value='3'>Customer 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">Project Name</label>
                            <select className="form-control" value={this.state.filterDetails.projectName} onChange={(event) => this.updateFieldByVal(event, 'projectName')}>
                                <option value=''>Select</option>
                                <option value="1">Project Name 1</option>
                                <option value="2">Project Name 2</option>
                                <option value='3'>Project Name 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">Project Manager</label>
                            <select className="form-control" value={this.state.filterDetails.projectManager} onChange={(event) => this.updateFieldByVal(event, 'projectManager')}>
                                <option value=''>Select</option>
                                <option value="1">Project Manager 1</option>
                                <option value="2">Project Manager 2</option>
                                <option value='3'>Project Manager 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">Delivery Manager</label>
                            <select className="form-control" value={this.state.filterDetails.deliveryManager} onChange={(event) => this.updateFieldByVal(event, 'deliveryManager')}>
                                <option value=''>Select</option>
                                <option value="1">Delivery Manager 1</option>
                                <option value="2">Delivery Manager 2</option>
                                <option value='3'>Delivery Manager 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">Project Status</label>
                            <select className="form-control" value={this.state.filterDetails.projectStatus} onChange={(event) => this.updateFieldByVal(event, 'projectStatus')}>
                                <option value=''>Select</option>
                                <option value="1">Done</option>
                                <option value="2">In Progress</option>
                                <option value='3'>Not completed</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">Start Date</label>
                            <DatePicker className="form-control" id="example-datepicker" selected={this.state.filterDetails.startDate} onChange={(event) => this.updateFieldByVal(event, 'startDate', 'date')} />
                        </div>
                    </div>
                    <div className="col-4 col-md-3 col-lg-3 col-sm-6">
                        <div className="form-group">
                            <label className="" htmlFor="groupBy">End Date</label>
                            <DatePicker className="form-control" id="example-datepicker" selected={this.state.filterDetails.endDate} onChange={(event) => this.updateFieldByVal(event, 'endDate', 'date')} />
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                        <div className="col-12 text-right">
                            <button type="submit" class="btn btn-danger mr-2">Reset</button>
                            <button type="submit" class="btn btn-success">Search</button>
                        </div>
                </div>
                <hr></hr>
                <div className="row">
                    <ProjectList />
                </div>
            </div>
        )
    }
}
