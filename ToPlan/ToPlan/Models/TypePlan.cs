using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class TypePlan
    {
        public int TypePlanId { get; set; }
        public string Name { get; set; }
        public string Subtype { get; set; }


        public TypePlan(string n, string s)
        {
            this.Name = n;
            this.Subtype = s;
        }

        public TypePlan() { }

    }

    public class TypePlanDTO
    {
        public int value { get; set; }
        public string label { get; set; }

        public TypePlanDTO(int i, string t)
        {
            this.value = i;
            this.label = t;
        }
    }
}