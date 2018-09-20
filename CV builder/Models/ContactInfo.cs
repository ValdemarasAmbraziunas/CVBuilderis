using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Interfaces;

namespace CV_builder.Models
{
    public class ContactInfo : ISection<ContactInfoItem>
    {
        public string Name => "Contact info";
        public List<ContactInfoItem> Items { get; set; }
        public bool Expandable => false;
    }
    public class ContactInfoItem : Dictionary<string, Field>, ISectionItem
    {
        public const string FirstName = "FirstName";
        public const string LastName = "LastName";
        public const string Email = "Email";
        public const string Address = "Address";
        public const string Phone = "Phone";
        public const string Facebook = "Facebook";
    }
}