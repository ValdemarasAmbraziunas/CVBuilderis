import * as React from "react";
import * as Models from "../Models/Models";

export interface IFieldProps {
    model: Models.FieldModel,
    fieldValueChangedHandler: Function,
    fieldLabelChangedHandler: Function,
    sectionNumber: number,
    itemNumber: number;
}

export interface IFieldState {
    editMode: boolean;
}

export class Field extends React.Component<IFieldProps, IFieldState> {
    constructor(props: IFieldProps) {
        super(props);
        this.state = {
            editMode: false
    };
    }

    render() {
        var classes = this.props.model.Mandatory ? "mandatory" : "";
       // classes += " field";
        classes += " form-group";
        classes += " form-horizontal";
        var input: JSX.Element;
        switch (this.props.model.Type) {
        case "single-line":
                input = (<input type="text" className="form-control" name={this.props.model.FieldName} value={this.props.model.Value ? this.props.model.Value: ""} onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => {
                        this.props.fieldValueChangedHandler(this.props.sectionNumber,
                            this.props.itemNumber,
                            this.props.model.FieldName,
                            event.target.value);
                    }
                }/>);
            break;
        case "multi-line":
                input = (<textarea name={this.props.model.FieldName} className="form-control" value={this.props.model.Value ? this.props.model.Value : ""} onChange={
                    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                        this.props.fieldValueChangedHandler(this.props.sectionNumber,
                            this.props.itemNumber,
                            this.props.model.FieldName,
                            event.target.value);
                    }
                } />);
            break;
        case "file":
            input =
                (<input type={this.props.model.Type} className="form-control" name={this.props.model.FieldName}/>);
            break;
        default:
            input =
                (<input type={this.props.model.Type} className="form-control" name={this.props.model.FieldName} value={this.props.model.Value ? this.props.model.Value: ""} onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => {
                        this.props.fieldValueChangedHandler(this.props.sectionNumber,
                            this.props.itemNumber,
                            this.props.model.FieldName,
                            event.target.value);
                    }
                }/>);
            break;
        }
        var editableLabel = (<input value={this.props.model.Label} className="control-label col-sm-3" autoFocus={true} onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => {
                this.props.fieldLabelChangedHandler(this.props.sectionNumber,
                    this.props.itemNumber,
                    this.props.model.FieldName,
                    event.target.value);
            }} onBlur={() => { this.setState({ editMode: false }) }} />);
        var label = (<label className="control-label col-sm-3" onDoubleClick={() => { this.setState({ editMode: true }) }} title={"double click to edit"}>{this.props.model.Label} </label>);
        return (
            <div className={classes} key={this.props.model.Id}>
                {this.state.editMode ? editableLabel : label}
                {input}
            </div>);
    }
}