using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class Type
    {
        public int TypeId { get; set; }
        public string Name { get; set; }
        public string Subtype { get; set; }
        public List<Event> Events { get; set; }

        public Type(string n, string s)
        {
            this.Name = n;
            this.Subtype = s;
        }

        public Type() { }
    }
}