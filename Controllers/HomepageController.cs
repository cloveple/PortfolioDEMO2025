using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class HomepageController : Controller
    {
        private readonly MyDbContext _context;
        public HomepageController(MyDbContext context)
        {
            _context = context;
        }


        public async Task<IActionResult> Index()
        {
            //原：ViewBag.Demo = await _context.Carousel.ToListAsync();
            //順序按DisplayOrder
            ViewBag.Demo = (await _context.Carousel.ToListAsync()).OrderBy(x => x.Carousel_DisplayOrder).ToList();
            return View();
        }

        public async Task<IActionResult> Edit(int id)
        {
            
            return View();
        }

    }
}
