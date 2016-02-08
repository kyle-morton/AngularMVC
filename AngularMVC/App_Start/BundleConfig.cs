using System.Web;
using System.Web.Optimization;

namespace AngularMVC
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css")
            .Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/Bootstrap/bootstrap")
            .Include("~/Content/bootstrap/bootstrap.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/Angular")
            .Include("~/Scripts/Angular/angular.min.js",
            "~/Scripts/Angular/angular-route.min.js"));

            //minify and compresses all js in controllers and adds to 
            //AngularMVC.js file, minifies all
            bundles.Add(new ScriptBundle("~/bundles/AngularMVC")
            .IncludeDirectory("~/Scripts/Controllers", "*.js")
            .IncludeDirectory("~/Scripts/Factories", "*.js")
            .Include("~/Scripts/AngularMVC.js"));

            bundles.Add(new ScriptBundle("~/bundles/Bootstrap")
            .Include("~/Scripts/jquery/jquery-1.9.1.min.js",
            "~/Scripts/bootstrap/bootstrap.min.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
