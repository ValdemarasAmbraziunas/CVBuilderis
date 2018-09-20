using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using CV_builder.Controllers;
using CV_builder.Services;
using CV_builder.Interfaces;
using Autofac.Integration.Mvc;

namespace CV_builder
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<BuilderService>().As<IBuilderService>();
            builder.RegisterType<DataGenerator>().As<IDataGenerator>();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(builder.Build()));
        }
    }
}
