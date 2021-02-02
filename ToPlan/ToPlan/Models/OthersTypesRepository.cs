using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class OthersTypesRepository
    {
        internal void Save(string n)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.OtherTypes.Add(new OtherType(n));
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
            OtherType s;
            try
            {
                try
                {
                    s = context.OtherTypes.Where(b => b.Name.Equals(n.ToLower())).FirstOrDefault();
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
        internal OtherDTO Get(string n)
        {
            ToPlanContext context = new ToPlanContext();
            OtherType s;
            try
            {
                s = context.OtherTypes.Single(z => z.Name.Equals(n.ToLower()));
                return new OtherDTO(s.OtherTypeId,s.Name);
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }

        }
        internal void DeleteOther(int id)
        {
            ToPlanContext context = new ToPlanContext();
            OtherType s;
            try
            {
                s = context.OtherTypes.Single(z => z.OtherTypeId.Equals(id));
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