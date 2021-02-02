using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class SportType
    {
        public int SportTypeId { get; set; }
        public string Name { get; set; }
        public List<Event> Events { get; set; }

        public SportType(string n)
        {
            this.Name = char.ToUpper(n[0]) + n.Substring(1);
        }
        public SportType() { }
    }
    public class SportDTO
    {
        public int SportTypeId { get; set; }
        public string Name { get; set; }
        public SportDTO(int i, string n)
        {
            this.SportTypeId = i;
            this.Name = char.ToUpper(n[0]) + n.Substring(1); ;
        }
    }
}