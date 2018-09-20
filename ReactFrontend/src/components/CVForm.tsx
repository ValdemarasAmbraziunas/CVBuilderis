import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Models from "../Models/Models";
import * as components from "./Components";
import Section = require("../Interfaces/ISection");
import ISection = Section.ISection;
import {ISectionItem} from "../Interfaces/ISectionItem";

export interface ICvFormProps {
    model: Models.CVFormModel,
    templateNumber: number;
}

export interface ICvFormState {
    activeSection: number,
    errorsList: string[],
    model: Models.CVFormModel;
}

export class CvForm extends React.Component<ICvFormProps, ICvFormState> {
    private itemModelsExamples: { [type: string]: ISectionItem; } = {};

    private validate(): boolean {
        this.setState({ errorsList: [] });
        var error = false;
        var fieldValidator = (field: Models.FieldModel) => {
            if (field.Mandatory && !field.Value) {
                this.setState((prevState: ICvFormState, props: ICvFormProps) => {
                    prevState.errorsList.push(field.Label + " (You must enter a value into this field)");
                    return prevState;
                });
                error = true;
            }
        }
        this.sectionModels.forEach((section) => {
            section.Items.forEach((item) => {
                for (var key in item) {
                    if (item.hasOwnProperty(key) && item[key] instanceof Models.FieldModel) {
                        var fieldModel: Models.FieldModel = item[key] as Models.FieldModel;
                        fieldValidator(fieldModel);
                    }
                }
            });
        });
        return error;
    }

    private sectionModels: ISection[] = [];
    private submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var input: HTMLInputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
        var data: FormData = new FormData();
        data.append("file", input.files[0]);
        data.append("model", JSON.stringify(this.state.model));
        data.append("template", this.props.templateNumber);
        if (this.validate()) {
            return;
        }

        fetch(this.state.model.FormTarget,
                ({
                    method: "post",
                    body: data,
                    credentials: "same-origin"
                }) as any)
            .then(resp => {
                return resp.blob();

            }).then(blob => {
                var downloadUrl = URL.createObjectURL(blob);
                var filename = this.state.model.ContactInfo.Items[0]["FirstName"].Value +
                    "_" +
                    this.state.model.ContactInfo.Items[0]["LastName"].Value +
                    ".pdf";
                // use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
                // safari doesn't support this yet
                if (typeof a.download === "undefined") {
                    window.location.assign(downloadUrl);
                } else {
                    a.setAttribute("href", downloadUrl);
                    a.setAttribute("download", filename);
                    document.body.appendChild(a);
                    a.click();
                }
            });
    }

    private loadForm = () => {
        fetch("/Builder/LoadForm",
                {
                    credentials: "same-origin"
                })
            .then((response) => {
                if (response.status === 403) {
                    throw new Error("Network response was 403.");
                } else {
                    return response.json();
                }
            }).then((json: any) => {
                var cvData = JSON.parse(json);
                var cvModel: Models.CVFormModel = new Models.CVFormModel(cvData);
                this.setState({ model: cvModel });

            }).catch((e) => {
                alert("Norëdami uþkrauti CV prisijunkite");
                console.log(e);
            });
    }

    private saveForm = () => {

        fetch("/Builder/SaveForm",
            {
                method: "POST",
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(this.state.model),
                credentials: "same-origin"
            }).then((response: any) => {
            if (response.status === 403) {
                alert("form was not saved");
            } else if (response.status === 200) {
                alert("form saved");
            }
        });
    }

    constructor(props: ICvFormProps) {
        super(props);

        this.state = {
            activeSection: 0,
            errorsList: [],
            model: this.props.model
        };
        this.itemModelsExamples["CareerInfo"] = new Models.CareerInfoItemModel(this.props.model.CareerInfo.Items[0]);
        this.itemModelsExamples["ContactInfo"] = new Models.ContactInfoItemModel(this.props.model.ContactInfo.Items[0]);
        this.itemModelsExamples["EducationInfo"] =
            new Models.EducationInfoItemModel(this.props.model.EducationInfo.Items[0]);
        this.itemModelsExamples["PersonalInfo"] =
            new Models.PersonalInfoItemModel(this.props.model.PersonalInfo.Items[0]);
        this.itemModelsExamples["SkillsInfo"] = new Models.SkillsInfoItemModel(this.props.model.SkillsInfo.Items[0]);
    }

    private renderSection<T extends ISection, U extends ISectionItem>(section: T,
        itemConstructor: new(...args: any[]) => U,
        i: number,
        itemExample: U) {
        var valueChangeHandler = (sectionNumber: number,
            itemNumber: number,
            fieldName: string,
            newValue: string) => {
            this.setState((previousState) => {
                section.Items[itemNumber][fieldName].Value =
                    newValue;
                return previousState;
            });
        }
        var labelChangeHandler = (sectionNumber: number,
            itemNumber: number,
            fieldName: string,
            newValue: string) => {
            this.setState((previousState) => {
                section.Items[itemNumber][fieldName].Label =
                    newValue;
                return previousState;
            });
        }
        var addHandler = () => {
            this.setState((previousState) => {
                section.Items.push(new itemConstructor(itemExample));
                return previousState;
            });
        }
        var removeHandler = (index: number) => {
            this.setState((previousState) => {
                section.Items.splice(index, 1);
            });
        }
        var pushHandler = (index1: number, index2: number) => {
            this.setState((previousState) => {
                var temp: ISectionItem = section.Items[index1];
                section.Items[index1] = section.Items[index2];
                section.Items[index2] = temp;
            });
        }

        return (<components.Section model={section} isActive={i === this.state.activeSection} key={i} sectionNumber={i}
            itemRemoveHandler={removeHandler} itemPushHandler={pushHandler}
            itemAddHandler={addHandler} fieldValueChangedHandler={valueChangeHandler} fieldLabelChangedHandler={labelChangeHandler}/>);
    }

    render() {
        var sections: JSX.Element[] = [];
        this.sectionModels = [];
        this.sectionModels.push(this.state.model.ContactInfo);
        this.sectionModels.push(this.state.model.PersonalInfo);
        this.sectionModels.push(this.state.model.EducationInfo);
        this.sectionModels.push(this.state.model.CareerInfo);
        this.sectionModels.push(this.state.model.SkillsInfo);

        sections.push(this.renderSection(this.state.model.ContactInfo,
            Models.ContactInfoItemModel,
            0,
            this.itemModelsExamples["ContactInfo"]));
        sections.push(this.renderSection(this.state.model.PersonalInfo,
            Models.PersonalInfoItemModel,
            1,
            this.itemModelsExamples["PersonalInfo"]));
        sections.push(this.renderSection(this.state.model.EducationInfo,
            Models.EducationInfoItemModel,
            2,
            this.itemModelsExamples["EducationInfo"]));
        sections.push(this.renderSection(this.state.model.CareerInfo,
            Models.CareerInfoItemModel,
            3,
            this.itemModelsExamples["CareerInfo"]));
        sections.push(this.renderSection(this.state.model.SkillsInfo,
            Models.SkillsInfoItemModel,
            4,
            this.itemModelsExamples["SkillsInfo"]));


        var tabs: JSX.Element[] = this.sectionModels.map((value, index) => {
            return (<a className={"navigation-tab" + (index == this.state.activeSection ? " active" : "")}
                       data-section-number={index}
                       key={index}
                       onClick={
                            (e: React.MouseEvent<HTMLAnchorElement>) => {
                                this.setState({ activeSection: +e.currentTarget.dataset["sectionNumber"] });
                            }}>
                        {value.Name}
                    </a>);
        });
        var sectionsNavBar: JSX.Element = (<div className="section-navigation-bar navbar-default">{tabs}</div>);
        var nextSection = () => {
            this.setState(
                (prevState: ICvFormState, props: ICvFormProps) => {
                    return { activeSection: prevState.activeSection + 1 };
                });

        }
        var previousSection = () => {
            this.setState(
                (prevState: ICvFormState, props: ICvFormProps) => {
                    return { activeSection: prevState.activeSection - 1 };
                });
        }
        return (
            <div className="CV-form">
                {sectionsNavBar}
                <form onSubmit={this.submitHandler}>
                    {sections}
                    <div className={"error-container" + (this.state.errorsList.length ? "" : " hidden")}>
                        <h3>Following fields have failed validation: </h3>
                        <ul>
                            {this.state.errorsList.map((error, index) => {
                                return (<li key={index}>{error}</li>);
                            })}
                        </ul>
                    </div>
                    <div className="button-area">
                        <button
                            className={"btn" + (this.state.activeSection == 0 ? " hidden" : "")}
                            type="button" onClick={previousSection}>Previous</button>
                        <button
                            className={"btn" + (this.state.activeSection == sections.length - 1 ? " hidden" : "")}
                            type="button" onClick={nextSection}>Next</button>
                        <button
                            className={"btn" + (this.state.activeSection == sections.length - 1 ? "" : " hidden")}
                            type="submit">Submit</button>
                        <button
                            className={"btn btn-primary" +
                                (this.state.activeSection == sections.length - 1 ? "" : " hidden")}
                            type="button" onClick={this.saveForm}>Save form</button>
                        <button className="btn btn-primary" type="button" onClick={this.loadForm}>Load form</button>
                    </div>
                </form>
            </div>);
    }
}