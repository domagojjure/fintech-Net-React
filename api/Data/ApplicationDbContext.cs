using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Portfolio>(x => x.HasKey(p => new { p.AppUserId, p.StockId }));

            builder.Entity<Portfolio>()
                .HasOne(u => u.AppUser)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.AppUserId);

            builder.Entity<Portfolio>()
                .HasOne(u => u.Stock)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.StockId);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
            {
                Id = "b74ddd14-6340-4840-95c2-db12554843e5",
                Name = "Admin",
                NormalizedName = "ADMIN",
                ConcurrencyStamp = "38a9d90a-461c-4a2a-8bb3-2699c5fbe8fd"
            },
            new IdentityRole
            {
                Id = "c8d4b4f5-2f9f-4b57-bbf5-1f500813d3d6",
                Name = "User",
                NormalizedName = "USER",
                ConcurrencyStamp = "ac5cc8b9-3a47-4e5e-8d25-5c9ab8754f4f"
            }
            };
            builder.Entity<IdentityRole>().HasData(roles);


        }



    }
}