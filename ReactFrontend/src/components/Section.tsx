import * as React from "react";
import * as Models from "../Models/Models";
import * as components from "./Components";
import Section1 = require("../Interfaces/ISection");
import ISection = Section1.ISection;
import SectionItem = require("../Interfaces/ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export interface ISectionProps {
    model: ISection,
    itemPushHandler: Function,
    itemRemoveHandler: Function,
    itemAddHandler: Function,
    fieldValueChangedHandler: Function,
    fieldLabelChangedHandler: Function,
    isActive: boolean,
    sectionNumber: number;
}

export interface ISectionState {
}

export class Section extends React.Component<ISectionProps, ISectionState> {
    constructor(props: ISectionProps) {
        super(props);
    }

    render() {

        var fields: JSX.Element[] = [];
        var addButton: JSX.Element =
            this.props.model.Expandable
                ? (<div className="btn" onClick={() => { this.props.itemAddHandler(this.props.sectionNumber); }}>
                       Add section
                   </div>)
                : null;
        var sectionItems: JSX.Element[] = [];
        this.props.model.Items.forEach((item, index) => {
            fields = [];
            for (var key in item) {
                if (item.hasOwnProperty(key) && item[key] instanceof Models.FieldModel) {
                    var fieldModel: Models.FieldModel = item[key] as Models.FieldModel;
                    fields.push(
                        <components.Field model={fieldModel} key={key}
                            fieldValueChangedHandler={this.props.fieldValueChangedHandler}
                            fieldLabelChangedHandler={this.props.fieldLabelChangedHandler}
                                          itemNumber={index} sectionNumber={this.props.sectionNumber}/>);
                }
            }
            var removeButton: JSX.Element =
                this.props.model.Items.length > 1
                    ? (<div className="btn actionBtn" onClick={() => { this.props.itemRemoveHandler(index); }}>
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                   </div>)
                    : null;
            var pushDownButton: JSX.Element =
                (this.props.model.Items.length > 1 && index != this.props.model.Items.length - 1)
                    ? (<div className="btn actionBtn" onClick={() => { this.props.itemPushHandler(index, index + 1); }}>
                        <span className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
                   </div>)
                    : null;
            var pushUpButton: JSX.Element =
                (index != 0)
                    ? (<div className="btn actionBtn" onClick={() => { this.props.itemPushHandler(index, index - 1); }}>
                        <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                   </div>)
                    : null;
            sectionItems.push(<div className="section-item" key={index}>
                {fields}
                {removeButton}
                {pushDownButton}
                {pushUpButton}
                <hr/>
            </div>);
        });

        var classes: string = " " + (this.props.isActive ? "" : "hidden");
        classes += " section";
        var component = (<div className={classes} id={this.props.model.SectionIdentifier}>
                             <div className="section-title">{this.props.model.Name}</div>
                             {sectionItems}
                             {addButton}
                         </div>);
        return component;

    }
}