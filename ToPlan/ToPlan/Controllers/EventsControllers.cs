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
        public bool GetCheckId(int id)
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

        [Route("api/Event1")]
        public EventDTO GetEvent1(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.Even1(id);
        }
        [Route("api/Event2")]
        public EventDTO2 GetEvent2(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.Even2(id);
        }

        [Route("api/Event/Type")]
        public int GetType(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.GetType(id);
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
        public void PutEventType(int id, int t)
        {
            EventsRepository rep = new EventsRepository();
            rep.UpdateEventType(id, t);
        }


        [Route("api/Event")]
        public void DeleteEvent(int id)
        {
            EventsRepository rep = new EventsRepository();
            rep.DeleteEvent(id);
        }
    }
}