"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./Models");
var CVFormModel = (function () {
    function CVFormModel(dto) {
        var personalinfo = "PersonalInfo";
        if (dto.hasOwnProperty(personalinfo)) {
            this.PersonalInfo = new Models.PersonalInfoModel(dto[personalinfo], personalinfo);
        }
        var educationinfo = "EducationInfo";
        if (dto.hasOwnProperty(educationinfo)) {
            this.EducationInfo = new Models.EducationInfoModel(dto[educationinfo], educationinfo);
        }
        var careerinfo = "CareerInfo";
        if (dto.hasOwnProperty(careerinfo)) {
            this.CareerInfo = new Models.CareerInfoModel(dto[careerinfo], careerinfo);
        }
        var skillsinfo = "SkillsInfo";
        if (dto.hasOwnProperty(skillsinfo)) {
            this.SkillsInfo = new Models.SkillsInfoModel(dto[skillsinfo], skillsinfo);
        }
        var contactinfo = "ContactInfo";
        if (dto.hasOwnProperty(contactinfo)) {
            this.ContactInfo = new Models.ContactInfoModel(dto[contactinfo], contactinfo);
        }
        if (dto.hasOwnProperty("FormTarget")) {
            this.FormTarget = dto["FormTarget"];
        }
    }
    return CVFormModel;
}());
exports.CVFormModel = CVFormModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1ZGb3JtTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTW9kZWxzL0NWRm9ybU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBRW5DO0lBU0kscUJBQVksR0FBUTtRQUNoQixJQUFNLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNELElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMxRixDQUFDO1FBQ0QsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxrQ0FBVyJ9