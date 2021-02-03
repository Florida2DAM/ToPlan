using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;


namespace ToPlan.Controllers
{
    public class EventsController : ApiController
    {
        [Route("api/Event/Check")]
        public bool CheckId(int id)
        {
            EventsRepository rep = new EventsRepository();
            bool aux = rep.CheckEventId(id);
            return aux;
        }

        [Route("api/Event/List")]
        public List<User> GetList(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.GetList(id);
        }

        [Route("api/Event/Type")]
        public string GetType(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.GetType(id);
        }

        [Route("api/Event/Subtype")]
        public int GetSubtype(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.GetSubtype(id);
        }

        [Route("api/Event")]
        public void PostEvent([FromBody] Event e)
        {
            EventsRepository rep = new EventsRepository();
            rep.Save(e);
        }

        [Route("api/Event/User")]
        public void PostUserList(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            rep.InsertUser(id, n);
        }


        [Route("api/Event")]
        public void Put(int id, string f, string c, string p, string d, int max)
        {
            EventsRepository rep = new EventsRepository();
            rep.UpdateEvent(id, f, c, p, d, max);
        }

        [Route("api/Event/Type")]
        public void PutEventType(int id, string t, int st)
        {
            EventsRepository rep = new EventsRepository();
            rep.UpdateEventType(id, t, st);
        }


        [Route("api/Event")]
        public void DeleteEvent(int id)
        {
            EventsRepository rep = new EventsRepository();
            rep.DeleteEvent(id);
        }
    }
}