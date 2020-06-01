import React, { useState } from 'react';

function ProjectList(props) {
    const [activeStatus, setActiveStatus] = useState('wsr');

    const updateActiveStatus = (selectedStatus) => {
        let navTabsElement = document.getElementById('statusTabs')
        var matchedElements = navTabsElement.getElementsByClassName('nav-link');
        for (var i=0; i<matchedElements.length; i++) {
            matchedElements[i].classList.remove('active');
        }

        let element = document.getElementById(selectedStatus+'Tab');
        element.classList.add("active");

        setActiveStatus(selectedStatus)
    }


    return (
        <div className="row col-12 no-mg">
            <div className="col-12">
            <ul className="nav nav-tabs" id="statusTabs">
                <li className="nav-item">
                    <a className="nav-link all active" id="wsrTab" onClick={() => updateActiveStatus('wsr')} >WSR/Project Tab</a>
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
                                <button type="button" class="btn btn-success mr-2">Add New</button>
                                <button type="button" class="btn btn-primary mr-2">Download</button>
                                <button type="button" class="btn btn-info">Schedule Audit Meeting</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectList;