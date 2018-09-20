using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CV_builder.Startup))]
namespace CV_builder
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
