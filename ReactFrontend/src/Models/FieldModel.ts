import * as utils from "../utils";

export class FieldModel {
    public Label: string;
    public FieldName: string;
    public Type: string;
    public Mandatory: boolean;
    public Value: string;
    public Id: string;

    constructor(dto: any, fieldName: string) {
        this.FieldName = fieldName;
        if (dto.hasOwnProperty("Label")) this.Label = dto.Label;
        if (dto.hasOwnProperty("FieldName")) this.FieldName = dto.FieldName;
        if (dto.hasOwnProperty("Type")) this.Type = dto.Type;
        if (dto.hasOwnProperty("Mandatory")) this.Mandatory = dto.Mandatory;
        if (dto.hasOwnProperty("Value")) this.Value = dto.Value;
        if (dto.hasOwnProperty("Id")) this.Id = dto.Id;

    }
}