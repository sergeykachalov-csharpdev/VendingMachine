using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Context
{
    public class CoreDBContext : DbContext
    {
        public DbSet<MachineModel> Machines { get; set; }
        public DbSet<DrinkModel> Drinks { get; set; }

        public CoreDBContext(DbContextOptions<CoreDBContext> options)
            : base(options)
        {
            //Database.EnsureCreated();
        }
    }
}
