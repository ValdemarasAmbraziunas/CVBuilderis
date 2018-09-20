import * as Models from "./Models";
import Section = require("../Interfaces/ISection");
import ISection = Section.ISection;
import SectionItem = require("../Interfaces/ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export class EducationInfoModel implements ISection {
    Expandable: boolean;
    SectionIdentifier: string;
    Items: ISectionItem[];
    public Name: string;

    constructor(dto: any, sectionIdentifier: string) {
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items: Object[] = dto["Items"];
            items.forEach(item => this.Items.push(new EducationInfoItemModel(item)));
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
}
export class EducationInfoItemModel implements ISectionItem {
    public Start: Models.FieldModel;
    public Duration: Models.FieldModel;
    public End: Models.FieldModel;
    public Course: Models.FieldModel;
    public Institution: Models.FieldModel;
    constructor(dto: any) {
        const start = "Start";
        if (dto.hasOwnProperty(start)) {
            this.Start = new Models.FieldModel(dto[start], start);
        }
        const duration = "Duration";
        if (dto.hasOwnProperty(duration)) {
            this.Duration = new Models.FieldModel(dto[duration], duration);
        }
        const end = "End";
        if (dto.hasOwnProperty(end)) {
            this.End = new Models.FieldModel(dto[end], end);
        }
        const course = "Course";
        if (dto.hasOwnProperty(course)) {
            this.Course = new Models.FieldModel(dto[course], course);
        }
        const institution = "Institution";
        if (dto.hasOwnProperty(institution)) {
            this.Institution = new Models.FieldModel(dto[institution], institution);
        }
    }
}