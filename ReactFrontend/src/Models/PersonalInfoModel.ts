import * as Models from "./Models";
import Section = require("../Interfaces/ISection");
import ISection = Section.ISection;
import SectionItem = require("../Interfaces/ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export class PersonalInfoModel implements ISection {
    Expandable: boolean;
    SectionIdentifier: string;
    Items: ISectionItem[];
    Name: string;
    constructor(dto: any, sectionIdentifier: string) {
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items: Object[] = dto["Items"];
            items.forEach(item => this.Items.push(new PersonalInfoItemModel(item)));
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
}
export class PersonalInfoItemModel implements ISectionItem {
    public Photo: Models.FieldModel;
    public Summary: Models.FieldModel;
    public Interest: Models.FieldModel;
    public DateOfBirth: Models.FieldModel;
    constructor(dto: any) {
        const photo = "Photo";
        if (dto.hasOwnProperty(photo)) {
            this.Photo = new Models.FieldModel(dto[photo], photo);
        }
        const summary = "Summary";
        if (dto.hasOwnProperty(summary)) {
            this.Summary = new Models.FieldModel(dto[summary], summary);
        }
        const interest = "Interest";
        if (dto.hasOwnProperty(interest)) {
            this.Interest = new Models.FieldModel(dto[interest], interest);
        }
        const dateOfBirth = "DateOfBirth";
        if (dto.hasOwnProperty(dateOfBirth)) {
            this.DateOfBirth = new Models.FieldModel(dto[dateOfBirth], dateOfBirth);
        }
    }
}