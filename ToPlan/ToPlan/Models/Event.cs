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
        public string Type { get; set; }
        public string Description { get; set; }
        public int MaxMembers { get; set; }
        public string ListMembers { get; set; }
        public string CreatorEmail { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }
        public int GastronomyTypeId { get; set; }
        public GastronomyType GastronomyType { get; set; }
        public int LeisureTypeId { get; set; }
        public LeisureType LeisureType { get; set; }
        public int SportTypeId { get; set; }
        public SportType SportType { get; set; }
        public int OtherTypeId { get; set; }
        public OtherType OtherType { get; set; }

        public Event(string ed, string c, string p, string t,int st, string d, int m, string ce) 
        {
            this.EventDate = ed;
            this.City = c;
            this.Province = p;
            this.Type = t.ToLower();
            if (this.Type.Equals("gastronomy"))
            {
                this.GastronomyTypeId = st;
            }
            else if(this.Type.Equals("sports"))
            {
                this.SportTypeId = st;
            }else if (this.Type.Equals("leisure"))
            {
                this.LeisureTypeId = st;
            }
            else
            {
                this.OtherTypeId = st;
            }
            this.Description = d;
            this.MaxMembers = m;
            this.CreatorEmail = ce;
            this.ListMembers = "";
        }

        public Event() { }


    }
}