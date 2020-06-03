import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, FormikErrors, FieldArray, Form } from "formik";

const riskItem = {
    riskType: "",
    internalExternal: "",
    owner: "",
    severity: "",
    priority: "",
    riskRaisedDate: "",
    age: "",
    status: "",
}

const initialValues = {
    documents: {
        file: '',
        comments: ''
    },
    risks: [
        {
            riskType: "",
            internalExternal: "",
            owner: "",
            severity: "",
            priority: "",
            riskRaisedDate: "",
            age: "",
            status: "",
        }
    ],
};

const addRiskItem = () => {
    initialValues.risks.push(riskItem)
}

const DatePickerField = ({ name, value, onChange }) => {
    return (
        <DatePicker
            className="form-control"
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
    );
};


function ManageProject(props) {
    const modalTitle = 'Add new WSR'
    const { modalId } = props
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik initialValues={initialValues}
                        onSubmit={(values) => console.log(values)}
                        render={({ handleSubmit, errors, touched, values }) => (

                            <Form>
                                <div className="modal-body" id="projectModalBody">
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="accordion" id="projectFileAccordion">
                                                <div class="card">
                                                    <div class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <button class="btn btn-link" type="button" >
                                                            Upload Files
                                                </button>
                                                    </div>

                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#projectFileAccordion">
                                                        <div class="card-body">
                                                            <div className="form-group">
                                                                <div class="file-upload-wrapper">
                                                                    <Field name={`people.documents.file`}
                                                                        type="file"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <textarea name="documentTitle" placeholder="Links/Comments" className="form-control"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div class="accordion" id="risksAccordion">
                                                <div class="card">
                                                    <div class="card-header" data-toggle="collapse" data-target="#risksPanelBody" aria-expanded="true" aria-controls="risksPanelBody">
                                                        <button class="btn btn-link" type="button" >
                                                            Risks
                                                        </button>
                                                    </div>

                                                    <div id="risksPanelBody" class="collapse show" aria-labelledby="headingOne" data-parent="#risksAccordion">
                                                        <div class="card-body">
                                                            <FieldArray name="risks"
                                                                render={(helpers) => (
                                                                    <div>
                                                                        {values.risks && values.risks.length > 0 ? (
                                                                            values.risks.map((person, index) => (
                                                                                <React.Fragment key={index}>

                                                                                    <div className="row col-12">
                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="riskType">Risk Type</label>
                                                                                                <Field className="form-control" name={`risks.${index}.riskType`} component="select">
                                                                                                    <option value="">Select</option>
                                                                                                    <option value="1">Risk Type 1</option>
                                                                                                    <option value="2">Risk Type 2</option>
                                                                                                    <option value="3">Risk Type 3</option>
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="riskType">Internal/External</label>
                                                                                                <Field className="form-control" name={`risks.${index}.internalExternal`} component="select">
                                                                                                    <option value="">Select</option>
                                                                                                    <option value="1">Type 1</option>
                                                                                                    <option value="2">Type 2</option>
                                                                                                    <option value="3">Type 3</option>
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="owner">Owner</label>
                                                                                                <Field className="form-control" name={`risks.${index}.owner`} component="select">
                                                                                                    <option value="">Select</option>
                                                                                                    <option value="1">Type 1</option>
                                                                                                    <option value="2">Type 2</option>
                                                                                                    <option value="3">Type 3</option>
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="severity">Severity</label>
                                                                                                <Field className="form-control" name={`risks.${index}.severity`} component="select">
                                                                                                    <option value="">Select</option>
                                                                                                    <option value="1">Type 1</option>
                                                                                                    <option value="2">Type 2</option>
                                                                                                    <option value="3">Type 3</option>
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="severity">Priority</label>
                                                                                                <Field className="form-control" name={`risks.${index}.priority`} component="select">
                                                                                                    <option value="">Select</option>
                                                                                                    <option value="1">Type 1</option>
                                                                                                    <option value="2">Type 2</option>
                                                                                                    <option value="3">Type 3</option>
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="severity">Risk Raised Date</label>
                                                                                                <DatePickerField name={`risks.${index}.priority`} />
                                                                                                {/* <DatePicker className="form-control" id="example-datepicker" selected={this.state.dueDate} onChange={this.dueDateHandler} /> */}
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="severity">Age</label>
                                                                                                <Field className="form-control" placeholder="Age" name={`risks.${index}.age`} type="text">
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-6 col-md-4 col-lg-4 col-sm-6">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="severity">Status</label>
                                                                                                <Field className="form-control" name={`risks.${index}.status`} component="select">
                                                                                                    <option value="">Select</option>
                                                                                                    <option value="1">Type 1</option>
                                                                                                    <option value="2">Type 2</option>
                                                                                                    <option value="3">Type 3</option>
                                                                                                </Field>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr></hr>
                                                                                </React.Fragment>
                                                                            ))
                                                                        ) : null}
                                                                    </div>
                                                                )} />

                                                            <div className="row col-12">
                                                                <button className="btn btn-success" onClick={addRiskItem}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-success" data-dismiss="modal">Save</button>
                                </div>
                            </Form>
                        )}>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ManageProject;
