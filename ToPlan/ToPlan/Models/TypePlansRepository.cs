using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class TypePlansRepository
    {
        internal void Save(TypePlan t)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.TypePlans.Add(t);
                context.SaveChanges();
            }
            catch (Exception a)
            {
                Debug.WriteLine("Error de conexion");
            }
        }

        internal List<TypePlan> GetTypes()
        {
            ToPlanContext context = new ToPlanContext();
            List<TypePlan> lista = new List<TypePlan>();
            try
            {
                lista = context.TypePlans.ToList();
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}