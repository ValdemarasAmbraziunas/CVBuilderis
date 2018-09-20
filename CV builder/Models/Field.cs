using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Infrastructure;

namespace CV_builder.Models
{
    public class Field
    {
        public int Id { get; set; }
        public string Label { get; set; }
        /// <summary>
        /// Laukelio tipas
        /// </summary>
        public string Type { get; set; }
        public string Value { get; set; }
        public bool Mandatory { get; set; }
        
        public override string ToString()
        {
            return string.Format("{0}: {1}", Label, Value ?? "null");
        }
    }
}