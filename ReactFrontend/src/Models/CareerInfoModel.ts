import * as Models from "./Models";
import Section = require("../Interfaces/ISection");
import ISection = Section.ISection;
import SectionItem = require("../Interfaces/ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export class CareerInfoModel implements ISection {
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
            items.forEach(item => this.Items.push(new CareerInfoItemModel(item)));
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
}

export class CareerInfoItemModel implements ISectionItem {
    public Start: Models.FieldModel;
    public End: Models.FieldModel;
    public CompanyName: Models.FieldModel;
    public JobTitle: Models.FieldModel;
    public Description: Models.FieldModel;

    constructor(dto: any) {
        const start = "Start";
        if (dto.hasOwnProperty(start)) {
            this.Start = new Models.FieldModel(dto[start], start);
        }
        const end = "End";
        if (dto.hasOwnProperty(end)) {
            this.End = new Models.FieldModel(dto[end], end);
        }
        const companyName = "CompanyName";
        if (dto.hasOwnProperty(companyName)) {
            this.CompanyName = new Models.FieldModel(dto[companyName], companyName);
        }
        const jobTitle = "JobTitle";
        if (dto.hasOwnProperty(jobTitle)) {
            this.JobTitle = new Models.FieldModel(dto[jobTitle], jobTitle);
        }
        const description = "Description";
        if (dto.hasOwnProperty(description)) {
            this.Description = new Models.FieldModel(dto[description], description);
        }
    }
}