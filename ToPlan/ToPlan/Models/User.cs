using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class User
    {
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Password { get; set; }
        public string FechaNacimiento { get; set; }
        public string Preferences { get; set; }

        public List<Event> Events { get; set; }

        public User(string id, string n, string s, string p, string f, string pre) 
        {
            this.UserId = id;
            this.Name = n;
            this.Surname = s;
            this.Password = p;
            this.FechaNacimiento = f;
            this.Preferences = pre;
        }

        public User() { }
    }
}