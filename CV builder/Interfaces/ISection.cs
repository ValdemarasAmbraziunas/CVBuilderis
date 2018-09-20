using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CV_builder.Models;

namespace CV_builder.Interfaces
{
    public interface ISection<T> where T: ISectionItem
    {
        string Name { get; }
        List<T> Items { get; set; }
        bool Expandable { get; }
    }
}
