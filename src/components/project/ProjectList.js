import React, { useState } from 'react';
import ManageProject from './ManageProject';

function ProjectList(props) {
    const [activeStatus, setActiveStatus] = useState('wsr');

    const updateActiveStatus = (selectedStatus) => {
        let navTabsElement = document.getElementById('statusTabs')
        var matchedElements = navTabsElement.getElementsByClassName('nav-link');
        for (var i = 0; i < matchedElements.length; i++) {
            matchedElements[i].classList.remove('active');
        }

        let element = document.getElementById(selectedStatus + 'Tab');
        element.classList.add("active");

        setActiveStatus(selectedStatus)
    }


    return (
        <div className="row col-12 no-mg">
            <div className="col-12">
                <ul className="nav nav-tabs" id="statusTabs">
                    <li className="nav-item">
                        <a className="nav-link all active" id="wsrTab" onClick={() => updateActiveStatus('wsr')}>WSR/Project Tab</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pending" id="riskRegisterTab" onClick={() => updateActiveStatus('riskRegister')} >Risk Register</a>
                    </li>
                </ul>
            </div>

            <div className="col-12">
                <div className="row col-12 no-mg">
                    <div className="col-12 panel panel-primary no-mg">
                        <div className="panel-body">
                            <div className="row col-12">
                                <button type="button" class="btn btn-success mr-2" data-toggle="modal" data-target="#addTaskModal">Add New</button>
                                <button type="button" class="btn btn-primary mr-2">Download</button>
                                <button type="button" class="btn btn-info">Schedule Audit Meeting</button>
                            </div>

                            <div className="row col-12 mt-5">
                                <div className="table-responsive">
                                    <table className="tasks-list table table-bordered">
                                        <thead>
                                            <th>Project Name</th>
                                            <th>Project Manager</th>
                                            <th>Week end date</th>
                                            <th>Overall Project Status</th>
                                            <th>Open Risks</th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>API</td>
                                                <td>Manager1</td>
                                                <td>dd/mm/yyyy</td>
                                                <td>Green</td>
                                                <td>2</td>
                                                <td><i className="fa fa-trash"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ManageProject modalId="addTaskModal" />
        </div>
    );
}

export default ProjectList;