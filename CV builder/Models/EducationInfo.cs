using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Interfaces;

namespace CV_builder.Models
{
    public class EducationInfo : ISection<EducationInfoItem>
    {
        public string Name => "Education info";
        public List<EducationInfoItem> Items { get; set; }
        public bool Expandable => true;
    }
    public class EducationInfoItem : Dictionary<string, Field>, ISectionItem
    {
        public const string Duration = "Duration";
        public const string End = "End";
        public const string Course = "Course";
        public const string Institution = "Institution";
    }
}