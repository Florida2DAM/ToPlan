using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class GastronomyTypesRepository
    {
        internal void Save(string n)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.GastronomyTypes.Add(new GastronomyType(n));
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexión");
            }
        }
        internal bool Check(string n)
        {
            ToPlanContext context = new ToPlanContext();
            GastronomyType s;
            try
            {
                try
                {
                    s = context.GastronomyTypes.Where(b => b.Name.Equals(n.ToLower())).FirstOrDefault();
                    if (s == null)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                catch (MySqlException e)
                {
                    Debug.WriteLine("Error");
                    return false;
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return false;
            }
        }
        internal GastronomyDTO Get(string n)
        {
            ToPlanContext context = new ToPlanContext();
            GastronomyType s;
            try
            {
                s = context.GastronomyTypes.Single(z => z.Name.Equals(n.ToLower()));
                return new GastronomyDTO(s.GastronomyTypeId, s.Name);
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }

        }
        internal void DeleteGastronomy(int id)
        {
            ToPlanContext context = new ToPlanContext();
            GastronomyType s;
            try
            {
                s = context.GastronomyTypes.Single(z => z.GastronomyTypeId.Equals(id));
                context.Remove(s);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
            }
        }
    }
}