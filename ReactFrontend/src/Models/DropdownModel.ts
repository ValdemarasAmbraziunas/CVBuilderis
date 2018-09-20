import * as Models from "./Models";

export class DropdownModel {
    public Name: string;
    public Id: string;
    public Options: OptionModel[];

    constructor(dto: any) {
        this.Options = [];
        if (dto.hasOwnProperty("Options")) {
            for (var i = 0; i < dto.Sections.length; i++)
                this.Options.push(new OptionModel(dto.Options[i]));
        }
        if (dto.hasOwnProperty("Name")) this.Name = dto.Name;
        if (dto.hasOwnProperty("Id")) this.Id = dto.Id;
    }
}

export class OptionModel {
    public Value: string;
    public Text: string;
    public Id: string;

    constructor(dto: any) {
        if (dto.hasOwnProperty("Value")) this.Value = dto.Value;
        if (dto.hasOwnProperty("Text")) this.Text = dto.Text;
        if (dto.hasOwnProperty("Id")) this.Id = dto.Id;
    }
}