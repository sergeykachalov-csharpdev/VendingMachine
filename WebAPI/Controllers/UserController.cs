using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Context;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly CoreDBContext _db;
        public UserController(CoreDBContext context)
        {
            _db = context;
        }

        [HttpGet("drinks")]
        public IEnumerable<DrinkModel> GetDrinks()
        {
            return _db.Drinks.Select(n => n).ToList();
        }

        [HttpGet("machines")]
        public IEnumerable<MachineModel> GetMachines()
        {
            return _db.Machines.Select(n => n).ToList();
        }

        [HttpPut("drinks/{id}")]
        public void PutDrink(int id)
        {
            _db.SaveChanges();
        }

        [HttpPut("machines/{id}")]
        public void PutMachine(int id)
        {
            _db.SaveChanges();
        }
    }
}
