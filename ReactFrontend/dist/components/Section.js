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
var Section = (function (_super) {
    __extends(Section, _super);
    function Section(props) {
        return _super.call(this, props) || this;
    }
    Section.prototype.render = function () {
        var _this = this;
        var fields = [];
        var addButton = this.props.model.Expandable
            ? (React.createElement("div", { className: "btn", onClick: function () { _this.props.itemAddHandler(_this.props.sectionNumber); } }, "Add section"))
            : null;
        var sectionItems = [];
        this.props.model.Items.forEach(function (item, index) {
            fields = [];
            for (var key in item) {
                if (item.hasOwnProperty(key) && item[key] instanceof Models.FieldModel) {
                    var fieldModel = item[key];
                    fields.push(React.createElement(components.Field, { model: fieldModel, key: key, fieldValueChangedHandler: _this.props.fieldValueChangedHandler, fieldLabelChangedHandler: _this.props.fieldLabelChangedHandler, itemNumber: index, sectionNumber: _this.props.sectionNumber }));
                }
            }
            var removeButton = _this.props.model.Items.length > 1
                ? (React.createElement("div", { className: "btn actionBtn", onClick: function () { _this.props.itemRemoveHandler(index); } },
                    React.createElement("span", { className: "glyphicon glyphicon-trash", "aria-hidden": "true" })))
                : null;
            var pushDownButton = (_this.props.model.Items.length > 1 && index != _this.props.model.Items.length - 1)
                ? (React.createElement("div", { className: "btn actionBtn", onClick: function () { _this.props.itemPushHandler(index, index + 1); } },
                    React.createElement("span", { className: "glyphicon glyphicon-arrow-down", "aria-hidden": "true" })))
                : null;
            var pushUpButton = (index != 0)
                ? (React.createElement("div", { className: "btn actionBtn", onClick: function () { _this.props.itemPushHandler(index, index - 1); } },
                    React.createElement("span", { className: "glyphicon glyphicon-arrow-up", "aria-hidden": "true" })))
                : null;
            sectionItems.push(React.createElement("div", { className: "section-item", key: index },
                fields,
                removeButton,
                pushDownButton,
                pushUpButton,
                React.createElement("hr", null)));
        });
        var classes = " " + (this.props.isActive ? "" : "hidden");
        classes += " section";
        var component = (React.createElement("div", { className: classes, id: this.props.model.SectionIdentifier },
            React.createElement("div", { className: "section-title" }, this.props.model.Name),
            sectionItems,
            addButton));
        return component;
    };
    return Section;
}(React.Component));
exports.Section = Section;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQix5Q0FBMkM7QUFDM0MseUNBQTJDO0FBb0IzQztJQUE2QiwyQkFBNkM7SUFDdEUsaUJBQVksS0FBb0I7ZUFDNUIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQUEsaUJBMERDO1FBeERHLElBQUksTUFBTSxHQUFrQixFQUFFLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVTtjQUNyQixDQUFDLDZCQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLGNBQVEsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBRXRGLENBQUM7Y0FDUixJQUFJLENBQUM7UUFDZixJQUFJLFlBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUN2QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLElBQUksVUFBVSxHQUFzQixJQUFJLENBQUMsR0FBRyxDQUFzQixDQUFDO29CQUNuRSxNQUFNLENBQUMsSUFBSSxDQUNQLG9CQUFDLFVBQVUsQ0FB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