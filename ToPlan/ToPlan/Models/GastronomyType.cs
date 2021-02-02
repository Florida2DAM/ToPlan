using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class GastronomyType
    {
        public int GastronomyTypeId { get; set; }
        public string Name { get; set; }
        public List<Event> Events { get; set; }

        public GastronomyType(string n)
        {
            this.Name = n;
        }

        public GastronomyType() { }
    }
    public class GastronomyDTO
    {
        public int GastronomyTypeId { get; set; }
        public string Name { get; set; }
        public GastronomyDTO(int i, string n)
        {
            this.GastronomyTypeId = i;
            this.Name = char.ToUpper(n[0]) + n.Substring(1); ;
        }
    }
}