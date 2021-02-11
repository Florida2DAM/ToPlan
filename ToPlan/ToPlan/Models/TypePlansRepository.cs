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
                Debug.WriteLine("Error de conexion");
                return null;
            }
        }

        internal List<TypePlanDTO> GetTypesDTO()
        {
            ToPlanContext context = new ToPlanContext();
            List<TypePlan> lista = new List<TypePlan>();
            List<TypePlanDTO> final = new List<TypePlanDTO>();
            try
            {
                lista = context.TypePlans.ToList();
                for(int i = 0; i < lista.Count; i++)
                {
                    final.Add(ToDTO(lista[i]));
                }
                return final;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }
        }

        internal void UpdateType(int id, string n, string s)
        {
            ToPlanContext context = new ToPlanContext();
            TypePlan t;
            try
            {
                t = context.TypePlans.Single(p => p.TypePlanId == id);
                t.Name = n.ToLower();
                t.Subtype = s.ToLower();
            }catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
            }
        }

        internal void DeleteType(int id)
        {
            ToPlanContext context = new ToPlanContext();
            TypePlan t;
            try
            {
                t = context.TypePlans.Single(p => p.TypePlanId == id);
                context.Remove(t);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
            }
        }

        private TypePlanDTO ToDTO(TypePlan p)
        {
            return new TypePlanDTO(p.TypePlanId, p.Subtype);
        }
    }
}