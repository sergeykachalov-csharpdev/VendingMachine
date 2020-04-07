﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Context;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly CoreDBContext _db;
        public AdminController(CoreDBContext context)
        {
            _db = context;
        }

        [HttpPut("drinks")]
        public async Task<ActionResult> Put(DrinkModel drink)
        {
            if (drink == null)
            {
                return BadRequest();
            }
            if (!_db.Drinks.Any(x => x.Id == drink.Id))
            {
                return NotFound();
            }

            _db.Update(drink);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("drinks")]
        public async Task<ActionResult> Post(DrinkModel drink)
        {
            if (drink == null)
            {
                return BadRequest();
            }

            _db.Add(drink);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("drinks/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            DrinkModel drink = _db.Drinks.FirstOrDefault(x => x.Id == id);
            if (drink == null)
            {
                return NotFound();
            }
            _db.Remove(drink);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}