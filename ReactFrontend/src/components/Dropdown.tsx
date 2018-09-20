import * as React from "react";
import * as Models from "../Models/Models";

export interface IDropdownProps {
    model: Models.DropdownModel
}

// State is never set so we use the 'undefined' type.
export class Dropdown extends React.Component<IDropdownProps, undefined> {
    render() {
        var options: JSX.Element[] = [];
        for (var i = 0; i < this.props.model.Options.length; i++) {
            options.push(
                <option key={this.props.model.Options[i].Id} value={this.props.model.Options[i].Value}>
                    {this.props.model.Options[i].Text}
                </option>);
        }
        return (
            <select name={this.props.model.Name} key={this.props.model.Id}>
                {options}
            </select>);
    }
}