"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./Models");
var CareerInfoModel = (function () {
    function CareerInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new CareerInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return CareerInfoModel;
}());
exports.CareerInfoModel = CareerInfoModel;
var CareerInfoItemModel = (function () {
    function CareerInfoItemModel(dto) {
        var start = "Start";
        if (dto.hasOwnProperty(start)) {
            this.Start = new Models.FieldModel(dto[start], start);
        }
        var end = "End";
        if (dto.hasOwnProperty(end)) {
            this.End = new Models.FieldModel(dto[end], end);
        }
        var companyName = "CompanyName";
        if (dto.hasOwnProperty(companyName)) {
            this.CompanyName = new Models.FieldModel(dto[companyName], companyName);
        }
        var jobTitle = "JobTitle";
        if (dto.hasOwnProperty(jobTitle)) {
            this.JobTitle = new Models.FieldModel(dto[jobTitle], jobTitle);
        }
        var description = "Description";
        if (dto.hasOwnProperty(description)) {
            this.Description = new Models.FieldModel(dto[description], description);
        }
    }
    return CareerInfoItemModel;
}());
exports.CareerInfoItemModel = CareerInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZWVySW5mb01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVscy9DYXJlZXJJbmZvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFNbkM7SUFNSSx5QkFBWSxHQUFRLEVBQUUsaUJBQXlCO1FBQS9DLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUssR0FBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZTtBQXNCNUI7SUFPSSw2QkFBWSxHQUFRO1FBQ2hCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksa0RBQW1CIn0=