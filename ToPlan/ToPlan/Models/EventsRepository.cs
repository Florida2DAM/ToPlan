using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class EventsRepository
    {
        internal void Save(Event e)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                context.Events.Add(e);
                context.SaveChanges();
            }
            catch (Exception a)
            {
                Debug.WriteLine("Error de conexion");
            }
        }

        internal void UpdateEvent(int id, string f, string c, string p, string d, int max)
        {
            ToPlanContext context = new ToPlanContext();
            Event aux;
            try
            {
                aux = context.Events.Single(b => b.EventId == id);
                aux.EventDate = f;
                aux.City = c;
                aux.Province = p;
                aux.Description = d;
                aux.MaxMembers = max;
                context.Events.Update(aux);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");

            }
        }

        internal void UpdateEventType(int id, string t, int st)
        {
            ToPlanContext context = new ToPlanContext();
            Event aux;
            try
            {
                aux = context.Events.Single(b => b.EventId == id);
                aux.Type = t;

                if (aux.Type.Equals("gastronomy"))
                {
                    aux.SportType = null;
                    aux.LeisureType = null;
                    aux.OtherType = null;
                    aux.GastronomyTypeId = st;
                }
                else if (aux.Type.Equals("sports"))
                {
                    aux.LeisureType = null;
                    aux.OtherType = null;
                    aux.GastronomyType = null;
                    aux.SportTypeId = st;
                }
                else if (aux.Type.Equals("leisure"))
                {
                    aux.GastronomyType = null;
                    aux.SportType = null;
                    aux.OtherType = null;
                    aux.LeisureTypeId = st;
                }
                else
                {
                    aux.GastronomyType = null;
                    aux.SportType = null;
                    aux.LeisureType = null;
                    aux.OtherTypeId = st;
                }
                context.Events.Update(aux);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");

            }
        }

        internal bool CheckEventId(int id)
        {
            try
            {
                ToPlanContext context = new ToPlanContext();
                Event aux;
                try
                {
                    aux = context.Events.Where(b => b.EventId == id).FirstOrDefault();
                    if (aux == null)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine("Error");
                    return false;
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return false;
            }
        }

        internal void DeleteEvent(int id)
        {
            ToPlanContext context = new ToPlanContext();
            Event u;
            try
            {
                u = context.Events.Single(p => p.EventId == id);
                context.Remove(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion: " + e);
            }
        }

        internal void InsertUser(int id, string n)
        {
            ToPlanContext context = new ToPlanContext();
            Event u;
            try
            {
                u = context.Events.Single(p => p.EventId == id);
                if (u.ListMembers == "")
                {
                    u.ListMembers = n.ToLower();
                }
                else
                {
                    u.ListMembers = u.ListMembers + ";" + n.ToLower();
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion:");

            }
        }

        internal List<User> GetList(int id)
        {
            ToPlanContext context = new ToPlanContext();
            Event u;
            List<User> final = new List<User>();
            string[] aux;

            try
            {
                u = context.Events.Single(p => p.EventId == id);
                if (u.ListMembers == "")
                {
                    return null;
                }
                else
                {
                    aux = u.ListMembers.Split(';');
                    for (int i = 0; i < aux.Length; i++)
                    {
                        final.Add(context.Users.Single(x => x.UserId.Equals(aux[i].ToLower())));

                    }
                    return final;
                }

            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion:");
                return null;

            }


        }

        internal string GetType(int id)
        {
            ToPlanContext context = new ToPlanContext();
            Event e;
            try
            {
                e = context.Events.Single(p => p.EventId == id);
                return e.Type;

            }
            catch (Exception a)
            {
                Debug.WriteLine("Error de conexion:");
                return null;
            }
        }

        internal int GetSubtype(int id)
        {
            ToPlanContext context = new ToPlanContext();
            Event e;
            try
            {
                e = context.Events.Single(p => p.EventId == id);
                if (e.Type.Equals("gastronomy"))
                {
                    return e.GastronomyTypeId;

                }
                else if (e.Type.Equals("sports"))
                {
                    return e.SportTypeId;
                }
                else if (e.Type.Equals("leisure"))
                {
                    return e.LeisureTypeId;
                }
                else
                {
                    return e.OtherTypeId;
                }

            }
            catch (Exception a)
            {
                Debug.WriteLine("Error de conexion:");
                return -1;
            }
        }

    }
}