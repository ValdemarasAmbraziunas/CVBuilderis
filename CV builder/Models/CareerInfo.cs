using System;
using System.Collections.Generic;
using CV_builder.Interfaces;

namespace CV_builder.Models
{
    public class CareerInfo : ISection<CareerInfoItem>
    {
        public string Name => "Career info";
        public List<CareerInfoItem> Items { get; set; }
        public bool Expandable => true;
    }
    public class CareerInfoItem : Dictionary<string, Field>, ISectionItem
    {
        public const string Start = "Start";
        public const string End = "End";
        public const string CompanyName = "CompanyName";
        public const string JobTitle = "JobTitle";
        public const string Description = "Description";
    }
}