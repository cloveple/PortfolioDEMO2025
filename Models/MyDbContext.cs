using Microsoft.EntityFrameworkCore;

namespace Restaurant.Models
{
    //改過名字注意一下（原本是HomepageDbContext，如果有問題再確認）
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        public DbSet<HomepageView> Carousel { get; set; }
    }





}
