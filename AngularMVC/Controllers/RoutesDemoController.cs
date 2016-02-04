using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularMVC.Controllers
{
    public class RoutesDemoController : Controller
    {
        public ActionResult One()
        {
            Debug.WriteLine("Route One...");
            return View();
        }

        public ActionResult Two()
        {
            Debug.WriteLine("Route Two...");
            return View();
        }

        public ActionResult Three()
        {
            Debug.WriteLine("Route Three...");
            return View();
        }
	}
}