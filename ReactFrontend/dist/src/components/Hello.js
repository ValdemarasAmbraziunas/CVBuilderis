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
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null,
            "Hello from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBTy9CLHFEQUFxRDtBQUNyRDtJQUEyQix5QkFBdUM7SUFBbEU7O0lBSUEsQ0FBQztJQUhHLHNCQUFNLEdBQU47UUFDSSxNQUFNLENBQUM7O1lBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7WUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQU8sQ0FBQztJQUNqRixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFKRCxDQUEyQixLQUFLLENBQUMsU0FBUyxHQUl6QztBQUpZLHNCQUFLIn0=