using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using CV_builder.Models;
using CV_builder.Interfaces;
using System.Drawing;
using System.Web.Script.Serialization;
using CV_builder.Infrastructure;
using Newtonsoft.Json;

namespace CV_builder.Controllers
{
    public class BuilderController : Controller
    {
        // TODO: Dependency Injection
        private readonly IDataGenerator dataGenerator;
        private readonly IBuilderService builderService;
        
        public BuilderController(IDataGenerator dataGenerator, IBuilderService builderService)
        {
            this.dataGenerator = dataGenerator;
            this.builderService = builderService;
        }

        // GET: Builder
        public ActionResult Index()
        {
            var cvModel = dataGenerator.GenerateTestData();

            return View(cvModel);
        }
        
        public ActionResult Sections()
        {
            var cvModel = dataGenerator.GenerateTestData();
            return Json(cvModel, JsonRequestBehavior.AllowGet);
        }
        
        [AuthorizeUser]
        [HttpPost]
        public ActionResult SaveForm(CVModel model)
        {
            using (ApplicationDbContext context = new ApplicationDbContext())
            {
                var userId = User.Identity.GetUserId();
                var user = context.Users.Find(userId);

                var serializer = new JavaScriptSerializer();
                var formData = serializer.Serialize(model);
                user.CVFormJson = formData;
                context.SaveChanges();
            }
            return Json(new { });
        }

        [AuthorizeUser]
        public ActionResult LoadForm()
        {
            using (var context = new ApplicationDbContext())
            {
                var userId = User.Identity.GetUserId();
                var user = context.Users.Find(userId);
                return Json(user.CVFormJson, JsonRequestBehavior.AllowGet);
            }
        }
                
        [HttpPost]
        public ActionResult GenerateDocument(HttpPostedFileBase file, string model, TemplateTypes template = 0)
        {
            Image sourceImage = null;
            if (file != null && file.ContentLength > 0)
            {
                     sourceImage = Image.FromStream(file.InputStream);
            }
            CVModel cvModel = JsonConvert.DeserializeObject<CVModel>(model);
            byte[] documentData = builderService.GenerateDocumentBytes(cvModel, template, sourceImage);
            Field firstName = cvModel.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.FirstName];
            Field lastName = cvModel.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.LastName];

            return File(documentData, "application/download", builderService.GetFileName(firstName, lastName, ".pdf"));
        }
    }
   
}