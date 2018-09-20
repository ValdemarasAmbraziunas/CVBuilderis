"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Models = require("../Models/Models");
var components = require("./Components");
var CvForm = (function (_super) {
    __extends(CvForm, _super);
    function CvForm(props) {
        var _this = _super.call(this, props) || this;
        _this.itemModelsExamples = {};
        _this.sectionModels = [];
        _this.submitHandler = function (e) {
            e.preventDefault();
            var input = document.querySelector('input[type="file"]');
            var data = new FormData();
            data.append("file", input.files[0]);
            data.append("model", JSON.stringify(_this.state.model));
            data.append("template", _this.props.templateNumber);
            if (_this.validate()) {
                return;
            }
            fetch(_this.state.model.FormTarget, ({
                method: "post",
                body: data,
                credentials: "same-origin"
            }))
                .then(function (resp) {
                return resp.blob();
            }).then(function (blob) {
                var downloadUrl = URL.createObjectURL(blob);
                var filename = _this.state.model.ContactInfo.Items[0]["FirstName"].Value +
                    "_" +
                    _this.state.model.ContactInfo.Items[0]["LastName"].Value +
                    ".pdf";
                // use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
                // safari doesn't support this yet
                if (typeof a.download === "undefined") {
                    window.location.assign(downloadUrl);
                }
                else {
                    a.setAttribute("href", downloadUrl);
                    a.setAttribute("download", filename);
                    document.body.appendChild(a);
                    a.click();
                }
            });
        };
        _this.loadForm = function () {
            fetch("/Builder/LoadForm", {
                credentials: "same-origin"
            })
                .then(function (response) {
                if (response.status === 403) {
                    throw new Error("Network response was 403.");
                }
                else {
                    return response.json();
                }
            }).then(function (json) {
                var cvData = JSON.parse(json);
                var cvModel = new Models.CVFormModel(cvData);
                _this.setState({ model: cvModel });
            }).catch(function (e) {
                alert("Norėdami užkrauti CV prisijunkite");
                console.log(e);
            });
        };
        _this.saveForm = function () {
            fetch("/Builder/SaveForm", {
                method: "POST",
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(_this.state.model),
                credentials: "same-origin"
            }).then(function (response) {
                if (response.status === 403) {
                    alert("form was not saved");
                }
                else if (response.status === 200) {
                    alert("form saved");
                }
            });
        };
        _this.state = {
            activeSection: 0,
            errorsList: [],
            model: _this.props.model
        };
        _this.itemModelsExamples["CareerInfo"] = new Models.CareerInfoItemModel(_this.props.model.CareerInfo.Items[0]);
        _this.itemModelsExamples["ContactInfo"] = new Models.ContactInfoItemModel(_this.props.model.ContactInfo.Items[0]);
        _this.itemModelsExamples["EducationInfo"] =
            new Models.EducationInfoItemModel(_this.props.model.EducationInfo.Items[0]);
        _this.itemModelsExamples["PersonalInfo"] =
            new Models.PersonalInfoItemModel(_this.props.model.PersonalInfo.Items[0]);
        _this.itemModelsExamples["SkillsInfo"] = new Models.SkillsInfoItemModel(_this.props.model.SkillsInfo.Items[0]);
        return _this;
    }
    CvForm.prototype.validate = function () {
        var _this = this;
        this.setState({ errorsList: [] });
        var error = false;
        var fieldValidator = function (field) {
            if (field.Mandatory && !field.Value) {
                _this.setState(function (prevState, props) {
                    prevState.errorsList.push(field.Label + " (You must enter a value into this field)");
                    return prevState;
                });
                error = true;
            }
        };
        this.sectionModels.forEach(function (section) {
            section.Items.forEach(function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key) && item[key] instanceof Models.FieldModel) {
                        var fieldModel = item[key];
                        fieldValidator(fieldModel);
                    }
                }
            });
        });
        return error;
    };
    CvForm.prototype.renderSection = function (section, itemConstructor, i, itemExample) {
        var _this = this;
        var valueChangeHandler = function (sectionNumber, itemNumber, fieldName, newValue) {
            _this.setState(function (previousState) {
                section.Items[itemNumber][fieldName].Value =
                    newValue;
                return previousState;
            });
        };
        var labelChangeHandler = function (sectionNumber, itemNumber, fieldName, newValue) {
            _this.setState(function (previousState) {
                section.Items[itemNumber][fieldName].Label =
                    newValue;
                return previousState;
            });
        };
        var addHandler = function () {
            _this.setState(function (previousState) {
                section.Items.push(new itemConstructor(itemExample));
                return previousState;
            });
        };
        var removeHandler = function (index) {
            _this.setState(function (previousState) {
                section.Items.splice(index, 1);
            });
        };
        var pushHandler = function (index1, index2) {
            _this.setState(function (previousState) {
                var temp = section.Items[index1];
                section.Items[index1] = section.Items[index2];
                section.Items[index2] = temp;
            });
        };
        return (React.createElement(components.Section, { model: section, isActive: i === this.state.activeSection, key: i, sectionNumber: i, itemRemoveHandler: removeHandler, itemPushHandler: pushHandler, itemAddHandler: addHandler, fieldValueChangedHandler: valueChangeHandler, fieldLabelChangedHandler: labelChangeHandler }));
    };
    CvForm.prototype.render = function () {
        var _this = this;
        var sections = [];
        this.sectionModels = [];
        this.sectionModels.push(this.state.model.ContactInfo);
        this.sectionModels.push(this.state.model.PersonalInfo);
        this.sectionModels.push(this.state.model.EducationInfo);
        this.sectionModels.push(this.state.model.CareerInfo);
        this.sectionModels.push(this.state.model.SkillsInfo);
        sections.push(this.renderSection(this.state.model.ContactInfo, Models.ContactInfoItemModel, 0, this.itemModelsExamples["ContactInfo"]));
        sections.push(this.renderSection(this.state.model.PersonalInfo, Models.PersonalInfoItemModel, 1, this.itemModelsExamples["PersonalInfo"]));
        sections.push(this.renderSection(this.state.model.EducationInfo, Models.EducationInfoItemModel, 2, this.itemModelsExamples["EducationInfo"]));
        sections.push(this.renderSection(this.state.model.CareerInfo, Models.CareerInfoItemModel, 3, this.itemModelsExamples["CareerInfo"]));
        sections.push(this.renderSection(this.state.model.SkillsInfo, Models.SkillsInfoItemModel, 4, this.itemModelsExamples["SkillsInfo"]));
        var tabs = this.sectionModels.map(function (value, index) {
            return (React.createElement("a", { className: "navigation-tab" + (index == _this.state.activeSection ? " active" : ""), "data-section-number": index, key: index, onClick: function (e) {
                    _this.setState({ activeSection: +e.currentTarget.dataset["sectionNumber"] });
                } }, value.Name));
        });
        var sectionsNavBar = (React.createElement("div", { className: "section-navigation-bar navbar-default" }, tabs));
        var nextSection = function () {
            _this.setState(function (prevState, props) {
                return { activeSection: prevState.activeSection + 1 };
            });
        };
        var previousSection = function () {
            _this.setState(function (prevState, props) {
                return { activeSection: prevState.activeSection - 1 };
            });
        };
        return (React.createElement("div", { className: "CV-form" },
            sectionsNavBar,
            React.createElement("form", { onSubmit: this.submitHandler },
                sections,
                React.createElement("div", { className: "error-container" + (this.state.errorsList.length ? "" : " hidden") },
                    React.createElement("h3", null, "Following fields have failed validation: "),
                    React.createElement("ul", null, this.state.errorsList.map(function (error, index) {
                        return (React.createElement("li", { key: index }, error));
                    }))),
                React.createElement("div", { className: "button-area" },
                    React.createElement("button", { className: "btn" + (this.state.activeSection == 0 ? " hidden" : ""), type: "button", onClick: previousSection }, "Previous"),
                    React.createElement("button", { className: "btn" + (this.state.activeSection == sections.length - 1 ? " hidden" : ""), type: "button", onClick: nextSection }, "Next"),
                    React.createElement("button", { className: "btn" + (this.state.activeSection == sections.length - 1 ? "" : " hidden"), type: "submit" }, "Submit"),
                    React.createElement("button", { className: "btn btn-primary" +
                            (this.state.activeSection == sections.length - 1 ? "" : " hidden"), type: "button", onClick: this.saveForm }, "Save form"),
                    React.createElement("button", { className: "btn btn-primary", type: "button", onClick: this.loadForm }, "Load form")))));
    };
    return CvForm;
}(React.Component));
exports.CvForm = CvForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1ZGb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ1ZGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFFL0IseUNBQTJDO0FBQzNDLHlDQUEyQztBQWdCM0M7SUFBNEIsMEJBQTJDO0lBK0duRSxnQkFBWSxLQUFtQjtRQUEvQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQWNmO1FBN0hPLHdCQUFrQixHQUFzQyxFQUFFLENBQUM7UUEyQjNELG1CQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLG1CQUFhLEdBQUcsVUFBQyxDQUFtQztZQUN4RCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQXFCLENBQUM7WUFDL0YsSUFBSSxJQUFJLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDekIsQ0FBQztnQkFDRyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixXQUFXLEVB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