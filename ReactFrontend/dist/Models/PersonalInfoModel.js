"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./Models");
var PersonalInfoModel = (function () {
    function PersonalInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new PersonalInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return PersonalInfoModel;
}());
exports.PersonalInfoModel = PersonalInfoModel;
var PersonalInfoItemModel = (function () {
    function PersonalInfoItemModel(dto) {
        var photo = "Photo";
        if (dto.hasOwnProperty(photo)) {
            this.Photo = new Models.FieldModel(dto[photo], photo);
        }
        var summary = "Summary";
        if (dto.hasOwnProperty(summary)) {
            this.Summary = new Models.FieldModel(dto[summary], summary);
        }
        var interest = "Interest";
        if (dto.hasOwnProperty(interest)) {
            this.Interest = new Models.FieldModel(dto[interest], interest);
        }
        var dateOfBirth = "DateOfBirth";
        if (dto.hasOwnProperty(dateOfBirth)) {
            this.DateOfBirth = new Models.FieldModel(dto[dateOfBirth], dateOfBirth);
        }
    }
    return PersonalInfoItemModel;
}());
exports.PersonalInfoItemModel = PersonalInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxJbmZvTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTW9kZWxzL1BlcnNvbmFsSW5mb01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBTW5DO0lBS0ksMkJBQVksR0FBUSxFQUFFLGlCQUF5QjtRQUEvQyxpQkFhQztRQVpHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxLQUFLLEdBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksOENBQWlCO0FBb0I5QjtJQUtJLCtCQUFZLEdBQVE7UUFDaEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0wsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxzREFBcUIifQ==