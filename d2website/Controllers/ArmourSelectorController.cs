// Copyright Small & Fast 2018

namespace d2website.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    public class ArmourSelectorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}