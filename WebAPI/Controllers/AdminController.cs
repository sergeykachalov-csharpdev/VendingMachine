using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Context;

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

        [HttpPost("drinks")]
        public void PostDrink()
        {
            _db.SaveChanges();
        }

        [HttpPut("drinks/{id}")]
        public void PutDrink()
        {
            _db.SaveChanges();
        }

        [HttpPut("machines/{id}")]
        public void PutMachine()
        {
            _db.SaveChanges();
        }
    }
}