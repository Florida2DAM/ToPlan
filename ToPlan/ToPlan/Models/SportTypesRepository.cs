using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class SportTypesRepository
    {
        internal void Save(string n)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.SportTypes.Add(new SportType(n));
                context.SaveChanges();
            }catch(Exception e)
            {
                Debug.WriteLine("Error de conexión");
            }
        }
        internal bool Check(string n)
        {
            ToPlanContext context = new ToPlanContext();
            SportType s;
            try
            {
                try
                {
                    s = context.SportTypes.Where(b => b.Name.Equals(n.ToLower())).FirstOrDefault();
                    if (s == null)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                catch(MySqlException e)
                {
                    Debug.WriteLine("Error");
                    return false;
                }
            }catch(Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return false;
            }
        }
        internal SportDTO Get(string n)
        {
            ToPlanContext context = new ToPlanContext();
            SportType s;
            try
            {
                s = context.SportTypes.Single(z => z.Name.Equals(n.ToLower()));
                return new SportDTO(s.SportTypeId,s.Name);
            }catch(Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }

        }
        internal void DeleteSport(int id)
        {
            ToPlanContext context = new ToPlanContext();
            SportType s;
            try
            {
                s = context.SportTypes.Single(z => z.SportTypeId.Equals(id));
                context.Remove(s);
                context.SaveChanges();
            }
            catch(Exception e)
            {
                Debug.WriteLine("Error de conexion");
            }
        }
    }
}