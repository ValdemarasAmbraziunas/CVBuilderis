"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./Models");
var SkillsInfoModel = (function () {
    function SkillsInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new SkillsInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return SkillsInfoModel;
}());
exports.SkillsInfoModel = SkillsInfoModel;
var SkillsInfoItemModel = (function () {
    function SkillsInfoItemModel(dto) {
        var skill = "Skill";
        if (dto.hasOwnProperty(skill)) {
            this.Skill = new Models.FieldModel(dto[skill], skill);
        }
    }
    return SkillsInfoItemModel;
}());
exports.SkillsInfoItemModel = SkillsInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzSW5mb01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVscy9Ta2lsbHNJbmZvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFNbkM7SUFNSSx5QkFBWSxHQUFRLEVBQUUsaUJBQXlCO1FBQS9DLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUssR0FBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZTtBQXNCNUI7SUFHSSw2QkFBWSxHQUFRO1FBQ2hCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksa0RBQW1CIn0=