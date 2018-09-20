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
var ReactDOM = require("react-dom");
var Models = require("../Models/Models");
var components = require("./Components");
var TemplateScreen = (function (_super) {
    __extends(TemplateScreen, _super);
    function TemplateScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { activeTemplate: 0 };
        return _this;
    }
    TemplateScreen.prototype.render = function () {
        var _this = this;
        var imageCells = [];
        for (var i = 0; i < 2; i++) {
            imageCells.push(React.createElement("div", { key: i, className: "image-cells cell" + i +
                    (i === this.state.activeTemplate ? " selected" : ""), "data-template-number": i, onClick: function (event) {
                    _this.setState({ activeTemplate: +event.currentTarget.dataset["templateNumber"] });
                } }));
        }
        return (React.createElement("div", { className: "templateScreen-div" },
            React.createElement("h1", { className: "template-text" }, "Template selection"),
            React.createElement("h3", { className: "template-text" }, "To achieve desired look of your CV, select one of the following templates"),
            React.createElement("div", { className: "template-table" },
                React.createElement("div", { className: "image-row" }, imageCells)),
            React.createElement("input", { type: "button", className: "template-button", value: "Continue", onClick: function () {
                    fetch("/Builder/Sections")
                        .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        var cvFormModel = new Models.CVFormModel(json);
                        ReactDOM.render(React.createElement(components.CVForm, { model: cvFormModel, templateNumber: _this.state.activeTemplate }), document.getElementById("example"));
                    });
                } })));
    };
    return TemplateScreen;
}(React.Component));
exports.TemplateScreen = TemplateScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UZW1wbGF0ZVNjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLG9DQUFzQztBQUN0Qyx5Q0FBMkM7QUFDM0MseUNBQTJDO0FBUzNDO0lBQW9DLGtDQUEyRDtJQUMzRix3QkFBWSxLQUEyQjtRQUF2QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUVmO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7SUFDdkMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsNkJBQUssR0FBRyxFQUFFLENBQUMsRUFDTixTQUFTLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQywwQkFDbEMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQXVDO29CQUN0RSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RGLENBQUMsR0FBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7WUFDL0IsNEJBQUksU0FBUyxFQUFDLGVBQWUseUJBQXdCO1lBQ3JELDRCQUFJLFNBQVMsRUFBQyxlQUFlLGdGQUErRTtZQUM1Ryw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO2dCQUMzQiw2QkFBSyxTQUFTLEVBQUMsV0FBVyxJQUNyQixVQUFVLENBQ1QsQ0FDSjtZQUNOLCtCQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFO29CQUN2RSxLQUFLLENBQUMsbUJBQW1CLENBQUM7eUJBQ3JCLElBQUksQ0FBQyxVQUFDLFFBQWE7d0JBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7d0JBQ2QsSUFBSSxXQUFXLEdBQXVCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkUsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxVQUFVLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEVBQ25GLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxHQUFVLENBQ1QsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBb0MsS0FBSyxDQUFDLFNBQVMsR0FxQ2xEO0FBckNZLHdDQUFjIn0=