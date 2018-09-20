import SectionItem = require("./ISectionItem");
import ISectionItem = SectionItem.ISectionItem;

export interface ISection {
    Name: string;
    Items: ISectionItem[];
    SectionIdentifier: string;
    Expandable: boolean;
}