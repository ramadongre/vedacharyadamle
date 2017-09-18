﻿using System.Web;
using System.Web.Optimization;

namespace Vedacharyadamle
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*", "~/Scripts/_extensions.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js", "~/Scripts/jquery-ui-{version}.js",
                      "~/Scripts/respond.js", "~/Scripts/custom.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/custom.css", "~/Content/site.css",
                      "~/Content/bootstrap.css", "~/Content/jquery-ui-{version}.css"));

            bundles.Add(new StyleBundle("~/Content/FontAwesome").Include(
               "~/css/font-awesome.min.css"));
        }
    }
}
