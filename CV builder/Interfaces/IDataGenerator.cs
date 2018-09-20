using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Models;

namespace CV_builder.Interfaces
{
    public interface IDataGenerator
    {
        CVModel GenerateTestData();
    }
}