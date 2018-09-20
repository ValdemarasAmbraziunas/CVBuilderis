import * as Models from "./Models";

export class CVFormModel {
    public FormTarget: string;
    public PersonalInfo: Models.PersonalInfoModel;
    public EducationInfo: Models.EducationInfoModel;
    public CareerInfo: Models.CareerInfoModel;
    public SkillsInfo: Models.SkillsInfoModel;
    public ContactInfo: Models.ContactInfoModel;


    constructor(dto: any) {
        const personalinfo = "PersonalInfo";
        if (dto.hasOwnProperty(personalinfo)) {
            this.PersonalInfo = new Models.PersonalInfoModel(dto[personalinfo], personalinfo);
        }
        const educationinfo = "EducationInfo";
        if (dto.hasOwnProperty(educationinfo)) {
            this.EducationInfo = new Models.EducationInfoModel(dto[educationinfo], educationinfo);
        }
        const careerinfo = "CareerInfo";
        if (dto.hasOwnProperty(careerinfo)) {
            this.CareerInfo = new Models.CareerInfoModel(dto[careerinfo], careerinfo);
        }
        const skillsinfo = "SkillsInfo";
        if (dto.hasOwnProperty(skillsinfo)) {
            this.SkillsInfo = new Models.SkillsInfoModel(dto[skillsinfo], skillsinfo);
        }
        const contactinfo = "ContactInfo";
        if (dto.hasOwnProperty(contactinfo)) {
            this.ContactInfo = new Models.ContactInfoModel(dto[contactinfo], contactinfo);
        }
        if (dto.hasOwnProperty("FormTarget")) {
            this.FormTarget = dto["FormTarget"];
        }
    }
}