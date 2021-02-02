using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class LeisureTypesRespository
    {
        internal void Save(string n)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.LeisureTypes.Add(new LeisureType(n));
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
            LeisureType s;
            try
            {
                try
                {
                    s = context.LeisureTypes.Where(b => b.Name.Equals(n.ToLower())).FirstOrDefault();
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
        internal LeisureDTO Get(string n)
        {
            ToPlanContext context = new ToPlanContext();
            LeisureType s;
            try
            {
                s = context.LeisureTypes.Single(z => z.Name.Equals(n.ToLower()));
                return new LeisureDTO(s.LeisureTypeId, s.Name);
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }

        }
        internal void DeleteLeisure(int id)
        {
            ToPlanContext context = new ToPlanContext();
            LeisureType s;
            try
            {
                s = context.LeisureTypes.Single(z => z.LeisureTypeId.Equals(id));
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