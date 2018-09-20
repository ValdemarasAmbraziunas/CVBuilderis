"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./Models");
var ContactInfoModel = (function () {
    function ContactInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new ContactInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return ContactInfoModel;
}());
exports.ContactInfoModel = ContactInfoModel;
var ContactInfoItemModel = (function () {
    function ContactInfoItemModel(dto) {
        var firstName = "FirstName";
        if (dto.hasOwnProperty(firstName)) {
            this.FirstName = new Models.FieldModel(dto[firstName], firstName);
        }
        var lastName = "LastName";
        if (dto.hasOwnProperty(lastName)) {
            this.LastName = new Models.FieldModel(dto[lastName], lastName);
        }
        var email = "Email";
        if (dto.hasOwnProperty(email)) {
            this.Email = new Models.FieldModel(dto[email], email);
        }
        var address = "Address";
        if (dto.hasOwnProperty(address)) {
            this.Address = new Models.FieldModel(dto[address], address);
        }
        var phone = "Phone";
        if (dto.hasOwnProperty(phone)) {
            this.Phone = new Models.FieldModel(dto[phone], phone);
        }
        var facebook = "Facebook";
        if (dto.hasOwnProperty(facebook)) {
            this.Facebook = new Models.FieldModel(dto[facebook], facebook);
        }
    }
    return ContactInfoItemModel;
}());
exports.ContactInfoItemModel = ContactInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdEluZm9Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RlbHMvQ29udGFjdEluZm9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQU1uQztJQU1JLDBCQUFZLEdBQVEsRUFBRSxpQkFBeUI7UUFBL0MsaUJBYUM7UUFaRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksS0FBSyxHQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDTCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLDRDQUFnQjtBQXNCN0I7SUFRSSw4QkFBWSxHQUFRO1FBQ2hCLElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNMLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksb0RBQW9CIn0=