using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using CV_builder.Models;
using CV_builder.Infrastructure;

using iTextSharp.text;

namespace CV_builder.Interfaces
{
    public interface IBuilderService
    {
        /// <summary>
        /// Generates CV
        /// </summary>
        /// <param name="sections">List of sections with fields</param>
        /// <returns>full path to generated file</returns>
        byte[] GenerateDocumentBytes(CVModel model, TemplateTypes type, System.Drawing.Image image);
        string GetFileName(Field firstName, Field lastName, string extension);
    }
}