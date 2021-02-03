using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class TypesRepository
    {

        internal void Save(Type t)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.Types.Add(t);
                context.SaveChanges();
            }
            catch (Exception a)
            {
                Debug.WriteLine("Error de conexion");
            }
        }

        internal List<Type> GetTypes()
        {
            ToPlanContext context = new ToPlanContext();
            List<Type> lista = new List<Type>();
            try
            {
                lista = context.Types.ToList();
                return lista;
            }catch(Exception e)
            {
                return null;
            }
        }

    }
}