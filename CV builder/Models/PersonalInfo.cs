using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Interfaces;

namespace CV_builder.Models
{
    public class PersonalInfo : ISection<PersonalInfoItem>
    {
        public string Name => "Personal info";
        public List<PersonalInfoItem> Items { get; set; }
        public bool Expandable => false;
    }
    public class PersonalInfoItem : Dictionary<string, Field>, ISectionItem
    {
        public const string Photo = "Photo";
        public const string Summary = "Summary";
        public const string Interest = "Interest";
        public const string DateOfBirth = "DateOfBirth";
    }
}