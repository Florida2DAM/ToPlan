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
                Debug.WriteLine("Error de conéxion");
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
                    aux = context.Events.Where(b => b.EventId.Equals(id)).FirstOrDefault();
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
                u = context.Events.Single(p => p.EventId.Equals(id));
                context.Remove(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion: " + e);
            }
        }


    }
}