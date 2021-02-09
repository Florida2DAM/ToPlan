﻿using System;
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
        public bool Admin { get; set; }


        public User(string id, string n, string s, string p, string f, string pre)
        {
            this.UserId = id;
            this.Name = n;
            this.Surname = s;
            this.Password = p;
            this.FechaNacimiento = f;
            this.Preferences = pre;
            this.Admin = false;
        }

        public User() { }
    }

    public class UserDTO
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string FechaNacimiento { get; set; }

        public UserDTO(string n, string s, string f)
        {

            this.Name = char.ToUpper(n[0]) + n.Substring(1);
            this.Surname = char.ToUpper(s[0]) + s.Substring(1);
            this.FechaNacimiento = f;
        }
    }

    public class UserDTO2
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string[] Preferences { get; set; }

        public UserDTO2(string n, string s, int ed, string e, string p)
        {
            this.Name = char.ToUpper(n[0]) + n.Substring(1) + " " + char.ToUpper(s[0]) + s.Substring(1) + "," + ed.ToString();
            this.Email = e;
            this.Preferences = p.Split(';');
        }
    }
}