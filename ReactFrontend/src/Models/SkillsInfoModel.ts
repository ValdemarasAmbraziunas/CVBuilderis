import * as Models from "./Models";
import Section = require("../Interfaces/ISection");
import ISection = Section.ISection;
import SectionItem = require("../Interfaces/ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export class SkillsInfoModel implements ISection {
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
            items.forEach(item => this.Items.push(new SkillsInfoItemModel(item)));
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
}

export class SkillsInfoItemModel implements ISectionItem {
    public Skill: Models.FieldModel;

    constructor(dto: any) {
        const skill = "Skill";
        if (dto.hasOwnProperty(skill)) {
            this.Skill = new Models.FieldModel(dto[skill], skill);
        }
    }
}