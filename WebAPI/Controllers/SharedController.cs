using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Context;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SharedController : ControllerBase
    {
        private readonly CoreDBContext _db;
        public SharedController(CoreDBContext context)
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

        [HttpPut("machines")]
        public async Task<ActionResult> Put(MachineModel machine)
        {
            if (machine == null)
            {
                return BadRequest();
            }
            if (!_db.Machines.Any(x => x.Id == machine.Id))
            {
                return NotFound();
            }

            _db.Update(machine);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}