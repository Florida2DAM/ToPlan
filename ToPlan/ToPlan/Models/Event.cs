using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public string EventDate { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Description { get; set; }
        public int MaxMembers { get; set; }
        public string ListMembers { get; set; }
        public string Direccion { get; set; }

        public string UserId { get; set; }
        public int TypePlanId { get; set; }

        public Event(string ed, string c, string p, int t, string d, int m, string ce, string dir)
        {
            this.EventDate = ed;
            this.City = c;
            this.Province = p;
            this.Description = d;
            this.MaxMembers = m;
            this.UserId = ce;
            this.ListMembers = ce;
            this.TypePlanId = t;
            this.Direccion = dir;
        }

        public Event() { }


    }

    public class EventDTO 
    {
        public string City { get; set; }
        public string Date { get; set; }
        public string Category { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }

        public EventDTO(string c, string d, string cat, string t, string n, string s)
        {
            this.City = char.ToUpper(c[0]) + c.Substring(1);
            this.Date = d;
            this.Category = char.ToUpper(cat[0]) + cat.Substring(1);
            this.Type = char.ToUpper(t[0]) + t.Substring(1);
            this.Name = char.ToUpper(n[0]) + n.Substring(1) + " " + char.ToUpper(s[0]) + s.Substring(1);
        }
    }

    public class EventDTO2
    {
        public string City { get; set; }
        public string Date { get; set; }
        public string Category { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public int Participants { get; set; }
        public int MaxParticipants { get; set; }

        public EventDTO2(string c, string d, string cat, string t, string n, string s,int p, int mp)
        {
            this.City = char.ToUpper(c[0]) + c.Substring(1);
            this.Date = d;
            this.Category = char.ToUpper(cat[0]) + cat.Substring(1);
            this.Type = char.ToUpper(t[0]) + t.Substring(1);
            this.Name = char.ToUpper(n[0]) + n.Substring(1) + " " + char.ToUpper(s[0]) + s.Substring(1);
            this.Participants = p;
            this.MaxParticipants = mp;
        }
    }
    public class EventDTO3
    {
        public string City { get; set; }
        public string Date { get; set; }
        public string Category { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Direccion { get; set; }
        public string Description { get; set; }
        public int MaxMembers { get; set; }
        public List<string> listaMiembros { get; set; }

        public EventDTO3(string c, string d, string cat, string t, string n, string s, string dir, string des, int max, List<string> l)
        {
            this.City = char.ToUpper(c[0]) + c.Substring(1);
            this.Date = d;
            this.Category = char.ToUpper(cat[0]) + cat.Substring(1);
            this.Type = char.ToUpper(t[0]) + t.Substring(1);
            this.Name = char.ToUpper(n[0]) + n.Substring(1) + " " + char.ToUpper(s[0]) + s.Substring(1);
            this.Direccion = dir;
            this.Description = des;
            this.MaxMembers = max;
            this.listaMiembros = l;
        }
    }

    public class EventDTO4
    {
        public string Description { get; set; }
        public string Direction { get; set; }
        public string EventDate { get; set; }
        public string Type { get; set; }
        public List<string> Lista { get; set; }

        public EventDTO4(string d, string dir, string e, List<string> l, string t)
        {
            this.Description = d;
            this.Direction = dir;
            this.EventDate = e;
            this.Lista = l;
            this.Type = char.ToUpper(t[0]) + t.Substring(1);
        }
    }
}