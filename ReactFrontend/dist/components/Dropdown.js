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
// State is never set so we use the 'undefined' type.
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var options = [];
        for (var i = 0; i < this.props.model.Options.length; i++) {
            options.push(React.createElement("option", { key: this.props.model.Options[i].Id, value: this.props.model.Options[i].Value }, this.props.model.Options[i].Text));
        }
        return (React.createElement("select", { name: this.props.model.Name, key: this.props.model.Id }, options));
    };
    return Dropdown;
}(React.Component));
exports.Dropdown = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBTy9CLHFEQUFxRDtBQUNyRDtJQUE4Qiw0QkFBMEM7SUFBeEU7O0lBY0EsQ0FBQztJQWJHLHlCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQ1IsZ0NBQVEsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVCLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQ0gsZ0NBQVEsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUN4RCxPQUFPLENBQ0gsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWRELENBQThCLEtBQUssQ0FBQyxTQUFTLEdBYzVDO0FBZFksNEJBQVEifQ==