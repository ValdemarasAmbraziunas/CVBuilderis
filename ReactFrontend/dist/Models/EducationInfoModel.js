"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./Models");
var EducationInfoModel = (function () {
    function EducationInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new EducationInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return EducationInfoModel;
}());
exports.EducationInfoModel = EducationInfoModel;
var EducationInfoItemModel = (function () {
    function EducationInfoItemModel(dto) {
        var start = "Start";
        if (dto.hasOwnProperty(start)) {
            this.Start = new Models.FieldModel(dto[start], start);
        }
        var duration = "Duration";
        if (dto.hasOwnProperty(duration)) {
            this.Duration = new Models.FieldModel(dto[duration], duration);
        }
        var end = "End";
        if (dto.hasOwnProperty(end)) {
            this.End = new Models.FieldModel(dto[end], end);
        }
        var course = "Course";
        if (dto.hasOwnProperty(course)) {
            this.Course = new Models.FieldModel(dto[course], course);
        }
        var institution = "Institution";
        if (dto.hasOwnProperty(institution)) {
            this.Institution = new Models.FieldModel(dto[institution], institution);
        }
    }
    return EducationInfoItemModel;
}());
exports.EducationInfoItemModel = EducationInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWR1Y2F0aW9uSW5mb01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL01vZGVscy9FZHVjYXRpb25JbmZvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFNbkM7SUFNSSw0QkFBWSxHQUFRLEVBQUUsaUJBQXlCO1FBQS9DLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUssR0FBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxnREFBa0I7QUFxQi9CO0lBTUksZ0NBQVksR0FBUTtRQUNoQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDRCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDTCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLHdEQUFzQiJ9