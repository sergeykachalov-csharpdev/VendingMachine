using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class MachineModel
    {
        public int Id { get; set; }
        public int Coins { get; set; }
        public string Number { get; set; }
        public bool OneCoin { get; set; }
        public bool TwoCoin { get; set; }
        public bool FiveCoin { get; set; }
        public bool TenCoin { get; set; }
    }
}
