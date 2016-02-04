﻿using System.Web;
using System.Web.Optimization;

namespace AngularMVC
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                                  "~/Content/site.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
