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
var Field = (function (_super) {
    __extends(Field, _super);
    function Field(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editMode: false
        };
        return _this;
    }
    Field.prototype.render = function () {
        var _this = this;
        var classes = this.props.model.Mandatory ? "mandatory" : "";
        // classes += " field";
        classes += " form-group";
        classes += " form-horizontal";
        var input;
        switch (this.props.model.Type) {
            case "single-line":
                input = (React.createElement("input", { type: "text", className: "form-control", name: this.props.model.FieldName, value: this.props.model.Value ? this.props.model.Value : "", onChange: function (event) {
                        _this.props.fieldValueChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
                    } }));
                break;
            case "multi-line":
                input = (React.createElement("textarea", { name: this.props.model.FieldName, className: "form-control", value: this.props.model.Value ? this.props.model.Value : "", onChange: function (event) {
                        _this.props.fieldValueChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
                    } }));
                break;
            case "file":
                input =
                    (React.createElement("input", { type: this.props.model.Type, className: "form-control", name: this.props.model.FieldName }));
                break;
            default:
                input =
                    (React.createElement("input", { type: this.props.model.Type, className: "form-control", name: this.props.model.FieldName, value: this.props.model.Value ? this.props.model.Value : "", onChange: function (event) {
                            _this.props.fieldValueChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
                        } }));
                break;
        }
        var editableLabel = (React.createElement("input", { value: this.props.model.Label, className: "control-label col-sm-3", autoFocus: true, onChange: function (event) {
                _this.props.fieldLabelChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
            }, onBlur: function () { _this.setState({ editMode: false }); } }));
        var label = (React.createElement("label", { className: "control-label col-sm-3", onDoubleClick: function () { _this.setState({ editMode: true }); }, title: "double click to edit" },
            this.props.model.Label,
            " "));
        return (React.createElement("div", { className: classes, key: this.props.model.Id },
            this.state.editMode ? editableLabel : label,
            input));
    };
    return Field;
}(React.Component));
exports.Field = Field;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9GaWVsZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBZS9CO0lBQTJCLHlCQUF5QztJQUNoRSxlQUFZLEtBQWtCO1FBQTlCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsUUFBUSxFQUFFLEtBQUs7U0FDdEIsQ0FBQzs7SUFDRixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUFBLGlCQXdEQztRQXZERyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM3RCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLGFBQWEsQ0FBQztRQUN6QixPQUFPLElBQUksa0JBQWtCLENBQUM7UUFDOUIsSUFBSSxLQUFrQixDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSyxhQUFhO2dCQUNWLEtBQUssR0FBRyxDQUFDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFFLEVBQUUsRUFBRSxRQUFRLEVBQ3ZKLFVBQUMsS0FBMEM7d0JBQ3ZDLEtBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQ3hELEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLENBQUMsR0FDRixDQUFDLENBQUM7Z0JBQ1QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxZQUFZO2dCQUNULEtBQUssR0FBRyxDQUFDLGtDQUFVLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUMvSSxVQUFDLEtBQTZDO3dCQUMxQyxLQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUN4RCxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixDQUFDLEdBQ0QsQ0FBQyxDQUFDO2dCQUNWLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDUCxLQUFLO29CQUNELENBQUMsK0JBQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RyxLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLO29CQUNELENBQUMsK0JBQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUUsRUFBRSxFQUFFLFFBQVEsRUFDaEssVUFBQyxLQUEwQzs0QkFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDeEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQyxHQUNGLENBQUMsQ0FBQztnQkFDVCxLQUFLLENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxhQUFhLEdBQUcsQ0FBQywrQkFBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFDbkgsVUFBQyxLQUEwQztnQkFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDeEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQVEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxHQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLEtBQUssR0FBRyxDQUFDLCtCQUFPLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxhQUFhLEVBQUUsY0FBUSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLHNCQUFzQjtZQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQVUsQ0FBQyxDQUFDO1FBQ3JMLE1BQU0sQ0FBQyxDQUNILDZCQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxHQUFHLEtBQUs7WUFDM0MsS0FBSyxDQUNKLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFqRUQsQ0FBMkIsS0FBSyxDQUFDLFNBQVMsR0FpRXpDO0FBakVZLHNCQUFLIn0=