using AngularMVC.Models;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using System;

namespace AngularMVC
{
    public partial class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {

            // Configure the db context, user manager and signin manager to use a single instance per request
            app.CreatePerOwinContext(ApplicationDbContext.Create);
            app.CreatePerOwinContext<AngularMVC.App_Start.IdentityConfig.ApplicationUserManager>(AngularMVC.App_Start.IdentityConfig.ApplicationUserManager.Create);
            app.CreatePerOwinContext<AngularMVC.App_Start.IdentityConfig.ApplicationSignInManager>(AngularMVC.App_Start.IdentityConfig.ApplicationSignInManager.Create);


            // Enable the application to use a cookie to store information for the signed in user
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString(string.Empty)
            });
            // Use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);
        }
    }
}