using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class ToPlanContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<TypePlan> TypePlans { get; set; }
        public DbSet<Event> Events { get; set; }

        public ToPlanContext() { }
        public ToPlanContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            if (!optionBuilder.IsConfigured)
            {
                optionBuilder.UseMySql("Server=localhost;Port=3306;Database=ToPlan;Uid=root;password=");
            }
        }
    }
}