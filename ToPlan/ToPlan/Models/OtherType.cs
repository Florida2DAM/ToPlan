using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class OtherType
    {
        public int OtherTypeId { get; set; }
        public string Name { get; set; }
        public List<Event> Events { get; set; }

        public OtherType(string n)
        {
            this.Name = n;
        }

        public OtherType() { }
    }
}