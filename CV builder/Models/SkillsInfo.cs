using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Interfaces;

namespace CV_builder.Models
{
    public class SkillsInfo : ISection<SkillsInfoItem>
    {
        public string Name => "Skills info";
        public List<SkillsInfoItem> Items { get; set; }
        public bool Expandable => true;
    }
    public class SkillsInfoItem : Dictionary<string, Field>, ISectionItem
    {
        public const string Skill = "Skill";
    }
}