using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularMVC.Startup))]
[assembly: log4net.Config.XmlConfigurator(ConfigFile = "Web.config", Watch = true)]
namespace AngularMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
