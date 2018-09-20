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
var components = require("./Components");
var HomeScreen = (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        return (React.createElement("div", { className: "homeScreen-div" },
            React.createElement("h1", { className: "cv-text" }, "CV Builder"),
            React.createElement("h3", { className: "cv-text" }, "The easiest way to generate your CV in seconds!"),
            React.createElement("input", { className: "cv-button", defaultValue: "Get Started", onClick: function () {
                    ReactDOM.render(React.createElement(components.TemplateScreen, null), document.getElementById("example"));
                } }),
            React.createElement("section", { className: "section section-blue" },
                React.createElement("div", { className: "grid" },
                    React.createElement("div", { className: "row center-aligned" },
                        React.createElement("div", { className: "col-sm-12" },
                            React.createElement("h2", { className: "section-title" }, "Build your CV in 4 easy steps"))),
                    React.createElement("ol", { className: "row center-aligned" },
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step" },
                            React.createElement("i", { className: "icon-top icon-start" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Click start"))),
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step" },
                            React.createElement("i", { className: "icon-top icon-choose" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Choose the template"))),
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step" },
                            React.createElement("i", { className: "icon-top icon-form" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Fill in the form"))),
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step2" },
                            React.createElement("i", { className: "icon-top icon-download" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Download your CV")))))),
            React.createElement("section", { id: "features", className: "section" },
                React.createElement("div", { className: "grid" },
                    React.createElement("div", { className: "row center-aligned" },
                        React.createElement("div", { className: "col-sm-12" },
                            React.createElement("h2", { className: "center-aligned section-title" }, "CV builder features"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("div", { className: "block-icon block-icon-left block-icon-feature" },
                                React.createElement("i", { className: "icon-left icon-save" }),
                                React.createElement("span", { className: "block-content" }, "Save your form and load it to finish/edit your CV later"))),
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("div", { className: "block-icon block-icon-left block-icon-feature" },
                                React.createElement("i", { className: "icon-left icon-dynamic" }),
                                React.createElement("span", { className: "block-content" }, "Double click on field name in order to change it")))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("div", { className: "block-icon block-icon-left block-icon-feature" },
                                React.createElement("i", { className: "icon-left icon-pdf" }),
                                React.createElement("span", { className: "block-content" }, "Download your CV as a PDF document")))),
                    React.createElement("input", { className: "cv-button", defaultValue: "Get Started", onClick: function () {
                            ReactDOM.render(React.createElement(components.TemplateScreen, null), document.getElementById("example"));
                        } })))));
    };
    return HomeScreen;
}(React.Component));
exports.HomeScreen = HomeScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvbWVTY3JlZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixvQ0FBc0M7QUFFdEMseUNBQTJDO0FBSzNDO0lBQWdDLDhCQUE0QztJQUE1RTs7SUF5RkEsQ0FBQztJQXhGRywyQkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLENBQUMsNkJBQUssU0FBUyxFQUFDLGdCQUFnQjtZQUNuQyw0QkFBSSxTQUFTLEVBQUMsU0FBUyxpQkFBZ0I7WUFDdkMsNEJBQUksU0FBUyxFQUFDLFNBQVMsc0RBQXFEO1lBQzVFLCtCQUFPLFNBQVMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUU7b0JBQzdELFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsVUFBVSxDQUFDLGNBQWMsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsQ0FBQyxHQUFXO1lBQ1osaUNBQVMsU0FBUyxFQUFDLHNCQUFzQjtnQkFDckMsNkJBQUssU0FBUyxFQUFDLE1BQU07b0JBQ2pCLDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7d0JBQy9CLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0Qiw0QkFBSSxTQUFTLEVBQUMsZUFBZSxvQ0FBbUMsQ0FDOUQsQ0FDSjtvQkFDTiw0QkFBSSxTQUFTLEVBQUMsb0JBQW9CO3dCQUM5Qiw0QkFBSSxTQUFTLEVBQUMsb0RBQW9EOzRCQUM5RCwyQkFBRyxTQUFTLEVBQUMscUJBQXFCLEdBQUs7NEJBQ3ZDLDhCQUFNLFNBQVMsRUFBQyxrQ0FBa0M7Z0NBQzlDLDhCQUFNLFNBQVMsRUFBQyxVQUFVLGtCQUFtQixDQUMxQyxDQUNOO3dCQUNMLDRCQUFJLFNBQVMsRUFBQyxvREFBb0Q7NEJBQzlELDJCQUFHLFNBQVMsRUFBQyxzQkFBc0IsR0FBSzs0QkFDeEMsOEJBQU0sU0FBUyxFQUFDLGtDQUFrQztnQ0FDOUMsOEJBQU0sU0FBUyxFQUFDLFVBQVUsMEJBQTJCLENBQ2xELENBQ047d0JBQ0wsNEJBQUksU0FBUyxFQUFDLG9EQUFvRDs0QkFDOUQsMkJBQUcsU0FBUyxFQUFDLG9CQUFvQixHQUFLOzRCQUN0Qyw4QkFBTSxTQUFTLEVBQUMsa0NBQWtDO2dDQUM5Qyw4QkFBTSxTQUFTLEVBQUMsVUFBVSx1QkFBd0IsQ0FDL0MsQ0FDTjt3QkFDTCw0QkFBSSxTQUFTLEVBQUMscURBQXFEOzRCQUMvRCwyQkFBRyxTQUFTLEVBQUMsd0JBQXdCLEdBQUs7NEJBQzFDLDhCQUFNLFNBQVMsRUFBQyxrQ0FBa0M7Z0NBQzlDLDhCQUFNLFNBQVMsRUFBQyxVQUFVLHVCQUF3QixDQUMvQyxDQUNOLENBQ0osQ0FDSCxDQUNBO1lBQ1YsaUNBQVMsRUFBRSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsU0FBUztnQkFDdEMsNkJBQUssU0FBUyxFQUFDLE1BQU07b0JBQ2pCLDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7d0JBQy9CLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0Qiw0QkFBSSxTQUFTLEVBQUMsOEJBQThCLDBCQUF5QixDQUNuRSxDQUNKO29CQUNOLDZCQUFLLFNBQVMsRUFBQyxLQUFLO3dCQUNoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTs0QkFDckIsNkJBQUssU0FBUyxFQUFDLCtDQUErQztnQ0FDMUQsMkJBQUcsU0FBUyxFQUFDLHFCQUFxQixHQUFLO2dDQUN2Qyw4QkFBTSxTQUFTLEVBQUMsZUFBZSw4REFFcEMsQ0FDTyxDQUNKO3dCQUNOLDZCQUFLLFNBQVMsRUFBQyxVQUFVOzRCQUNyQiw2QkFBSyxTQUFTLEVBQUMsK0NBQStDO2dDQUMxRCwyQkFBRyxTQUFTLEVBQUMsd0JBQXdCLEdBQUs7Z0NBQzFDLDhCQUFNLFNBQVMsRUFBQyxlQUFlLHVEQUVwQyxDQUNPLENBQ0osQ0FFSjtvQkFDTiw2QkFBSyxTQUFTLEVBQUMsS0FBSzt3QkFDaEIsNkJBQUssU0FBUyxFQUFDLFVBQVU7NEJBQ3JCLDZCQUFLLFNBQVMsRUFBQywrQ0FBK0M7Z0NBQzFELDJCQUFHLFNBQVMsRUFBQyxvQkFBb0IsR0FBSztnQ0FDdEMsOEJBQU0sU0FBUyxFQUFDLGVBQWUseUNBRXBDLENBQ08sQ0FDSixDQUdKO29CQUNOLCtCQUFPLFNBQVMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUU7NEJBQzdELFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsVUFBVSxDQUFDLGNBQWMsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDdkYsQ0FBQyxHQUFXLENBQ1YsQ0FDQSxDQUNSLENBQUMsQ0FBQztJQUVaLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF6RkQsQ0FBZ0MsS0FBSyxDQUFDLFNBQVMsR0F5RjlDO0FBekZZLGdDQUFVIn0=