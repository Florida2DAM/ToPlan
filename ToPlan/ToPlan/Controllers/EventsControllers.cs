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
        //Devuelve true si existe un evento con esa ID
        public bool GetCheckId(int id)
        {
            EventsRepository rep = new EventsRepository();
            bool aux = rep.CheckEventId(id);
            return aux;
        }
        [Route("api/Event/CheckUser")]
        //Devuelve true si un usuario está apuntado en el evento.
        public bool GetCheckUser(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            return rep.CheckUserEvent(id,n);
        }

        [Route("api/Event/List")]
        //Devuelve una lista de los usuarios que estan apuntados en el evento
        public List<User> GetList(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.GetList(id);
        }
        [Route("api/Event3")]
        //Devuelve una lista con 4 proximos eventos
        public List<EventDTO> GetListEvents()
        {
            EventsRepository rep = new EventsRepository();
            return rep.Even3();
        }
        [Route("api/Event/Type")]
        //Devuelve una lista con los eventos seguna la preferencia introducida
        public List<Event> GetEventsByType(string p)
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsByType(p);
        }
        [Route("api/Event/EventsUser")]
        //Devuelve una lista con los eventos en los que un usuario está apuntado
        public List<EventDTO> GetEventsUser(string id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsUser(id);
        }
        [Route("api/Event/Gastronomy")]
        public List<EventDTO> GetListEventsGastronomy()
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsType("gastronomy");
        }
        [Route("api/Event/Sport")]
        public List<EventDTO> GetListEventsSport()
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsType("sport");
        }
        [Route("api/Event/Leisure")]
        public List<EventDTO> GetListEventsLeisure()
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsType("leisure");
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

        [Route("api/Event/AddUser")]
        public bool PostAddUserList(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            return rep.AddUser(id, n);
        }

        [Route("api/Event/RemoveUser")]
        public bool PostRemoveUserList(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            return rep.RemoveUser(id, n);
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