import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Models from "../Models/Models";
import * as components from "./Components";

export interface IHomeScreenProps {
}

export class HomeScreen extends React.Component<IHomeScreenProps, undefined> {
    render() {
        return (<div className="homeScreen-div">
            <h1 className="cv-text">CV Builder</h1>
            <h3 className="cv-text">The easiest way to generate your CV in seconds!</h3>
            <input className="cv-button" defaultValue="Get Started" onClick={() => {
                ReactDOM.render(<components.TemplateScreen />, document.getElementById("example"));
            }} ></input>
            <section className="section section-blue">
                <div className="grid">
                    <div className="row center-aligned">
                        <div className="col-sm-12">
                            <h2 className="section-title">Build your CV in 4 easy steps</h2>
                        </div>
                    </div>
                    <ol className="row center-aligned">
                        <li className="col-sm-3 block-icon block-icon-top block-icon-step">
                            <i className="icon-top icon-start"></i>
                            <span className="block-content block-content-push">
                                <span className="semibold">Click start</span>
                            </span>
                        </li>
                        <li className="col-sm-3 block-icon block-icon-top block-icon-step">
                            <i className="icon-top icon-choose"></i>
                            <span className="block-content block-content-push">
                                <span className="semibold">Choose the template</span>
                            </span>
                        </li>
                        <li className="col-sm-3 block-icon block-icon-top block-icon-step">
                            <i className="icon-top icon-form"></i>
                            <span className="block-content block-content-push">
                                <span className="semibold">Fill in the form</span>
                            </span>
                        </li>
                        <li className="col-sm-3 block-icon block-icon-top block-icon-step2">
                            <i className="icon-top icon-download"></i>
                            <span className="block-content block-content-push">
                                <span className="semibold">Download your CV</span>
                            </span>
                        </li>
                    </ol>
                </div>
            </section>
            <section id="features" className="section">
                <div className="grid">
                    <div className="row center-aligned">
                        <div className="col-sm-12">
                            <h2 className="center-aligned section-title">CV builder features</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="block-icon block-icon-left block-icon-feature">
                                <i className="icon-left icon-save"></i>
                                <span className="block-content">
                                    Save your form and load it to finish/edit your CV later
                    </span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="block-icon block-icon-left block-icon-feature">
                                <i className="icon-left icon-dynamic"></i>
                                <span className="block-content">
                                    Double click on field name in order to change it
                    </span>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="block-icon block-icon-left block-icon-feature">
                                <i className="icon-left icon-pdf"></i>
                                <span className="block-content">
                                    Download your CV as a PDF document
                    </span>
                            </div>
                        </div>


                    </div>
                    <input className="cv-button" defaultValue="Get Started" onClick={() => {
                        ReactDOM.render(<components.TemplateScreen />, document.getElementById("example"));
                    }} ></input>
                </div>
            </section>
        </div>);

    }
}