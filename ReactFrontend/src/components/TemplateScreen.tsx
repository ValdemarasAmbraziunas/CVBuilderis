import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Models from "../Models/Models";
import * as components from "./Components";

export interface ITemplateScreenProps {
}

export interface ITemplateScreenState {
    activeTemplate: number
}

export class TemplateScreen extends React.Component<ITemplateScreenProps, ITemplateScreenState> {
    constructor(props: ITemplateScreenProps) {
        super(props);
        this.state = { activeTemplate: 0 };
    }

    render() {
        var imageCells: JSX.Element[] = [];
        for (var i = 0; i < 2; i++) {
            imageCells.push(<div key={i}
                                 className={"image-cells cell" + i +
                                     (i === this.state.activeTemplate ? " selected" : "")}
                                 data-template-number={i} onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                     this.setState({ activeTemplate: +event.currentTarget.dataset["templateNumber"] });
                                 }}></div>);
        }
        return (<div className="templateScreen-div">
                    <h1 className="template-text">Template selection</h1>
                    <h3 className="template-text">To achieve desired look of your CV, select one of the following templates</h3>
                    <div className="template-table">
                        <div className="image-row">
                            {imageCells}
                        </div>
                    </div>
                    <input type="button" className="template-button" value="Continue" onClick={() => {
                        fetch("/Builder/Sections")
                            .then((response: any) => {
                                return response.json();
                            }).then((json: any) => {
                                var cvFormModel: Models.CVFormModel = new Models.CVFormModel(json);
                                ReactDOM.render(
                                    <components.CVForm model={cvFormModel} templateNumber={this.state.activeTemplate}/>,
                                    document.getElementById("example"));
                            });
                    }}></input>
                </div>);
    }
}