"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldModel = (function () {
    function FieldModel(dto, fieldName) {
        this.FieldName = fieldName;
        if (dto.hasOwnProperty("Label"))
            this.Label = dto.Label;
        if (dto.hasOwnProperty("FieldName"))
            this.FieldName = dto.FieldName;
        if (dto.hasOwnProperty("Type"))
            this.Type = dto.Type;
        if (dto.hasOwnProperty("Mandatory"))
            this.Mandatory = dto.Mandatory;
        if (dto.hasOwnProperty("Value"))
            this.Value = dto.Value;
        if (dto.hasOwnProperty("Id"))
            this.Id = dto.Id;
    }
    return FieldModel;
}());
exports.FieldModel = FieldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RlbHMvRmllbGRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBUUksb0JBQVksR0FBUSxFQUFFLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNwRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDcEUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRW5ELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZ0NBQVUifQ==