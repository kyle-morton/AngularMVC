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

        //public ActionResult Two()
        //{
        //    Debug.WriteLine("Route Two...");
        //    return View();
        //}

        public ActionResult Two(int donuts = 1)
        {
            ViewBag.Donuts = donuts;
            Debug.WriteLine("Route Two...");
            return View();
        }

        //this view requires prior authentication
        //[Authorize]
        public ActionResult Three()
        {
            Debug.WriteLine("Route Three...");
            return View();
        }


        public ActionResult Four()
        {
            Debug.WriteLine("Route Four...");
            return View();
        }
	}
}