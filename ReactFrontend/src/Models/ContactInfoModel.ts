import * as Models from "./Models";
import Section = require("../Interfaces/ISection");
import ISection = Section.ISection;
import SectionItem = require("../Interfaces/ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export class ContactInfoModel implements ISection {
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
            items.forEach(item => this.Items.push(new ContactInfoItemModel(item)));
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
}

export class ContactInfoItemModel implements ISectionItem {
    public FirstName: Models.FieldModel;
    public LastName: Models.FieldModel;
    public Email: Models.FieldModel;
    public Address: Models.FieldModel;
    public Phone: Models.FieldModel;
    public Facebook: Models.FieldModel;

    constructor(dto: any) {
        const firstName = "FirstName";
        if (dto.hasOwnProperty(firstName)) {
            this.FirstName = new Models.FieldModel(dto[firstName], firstName);
        }
        const lastName = "LastName";
        if (dto.hasOwnProperty(lastName)) {
            this.LastName = new Models.FieldModel(dto[lastName], lastName);
        }
        const email = "Email";
        if (dto.hasOwnProperty(email)) {
            this.Email = new Models.FieldModel(dto[email], email);
        }
        const address = "Address";
        if (dto.hasOwnProperty(address)) {
            this.Address = new Models.FieldModel(dto[address], address);
        }
        const phone = "Phone";
        if (dto.hasOwnProperty(phone)) {
            this.Phone = new Models.FieldModel(dto[phone], phone);
        }
        const facebook = "Facebook";
        if (dto.hasOwnProperty(facebook)) {
            this.Facebook = new Models.FieldModel(dto[facebook], facebook);
        }
    }
}