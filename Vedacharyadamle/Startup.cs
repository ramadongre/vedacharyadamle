using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Vedacharyadamle.Startup))]
namespace Vedacharyadamle
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
