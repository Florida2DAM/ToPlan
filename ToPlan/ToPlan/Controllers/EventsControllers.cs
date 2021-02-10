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
        [Route("api/Event/CheckType")]
        //Devuelve true si el tipo de evento es valido
        public bool GetCheckType(string id)
        {
            EventsRepository rep = new EventsRepository();
            bool aux = rep.CheckType(id);
            return aux;
        }
        [Route("api/Event/CheckUser")]
        //Devuelve true si un usuario está apuntado a un evento especifico.
        public bool GetCheckUser(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            return rep.CheckUserEvent(id,n);
        }

        [Route("api/Event")]
        //Recupera toda la lista de usuarios
        public List<Event> GetEvents()
        {
            EventsRepository rep = new EventsRepository();
            List<Event> lista = rep.RecoverEvents();
            return lista;
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
        public List<EventDTO3> GetListEvents()
        {
            EventsRepository rep = new EventsRepository();
            return rep.Even3();
        }
        [Route("api/Event/Type")]
        //Devuelve una lista con los eventos segun la preferencia introducida
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
        [Route("api/Event/Food")]
        //Devuelve una lista de EventDTO3 de tipo food
        public List<EventDTO3> GetListEventsGastronomy()
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsType("food");
        }
        [Route("api/Event/Sport")]
        //Devuelve una lista de EventDTO3 de tipo sport
        public List<EventDTO3> GetListEventsSport()
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsType("sport");
        }
        [Route("api/Event/Leisure")]
        //Devuelve una lista de EventDTO3 de tipo leisure
        public List<EventDTO3> GetListEventsLeisure()
        {
            EventsRepository rep = new EventsRepository();
            return rep.EventsType("leisure");
        }

        [Route("api/Event1")]
        //Devuelve un EventDTO
        public EventDTO GetEvent1(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.Even1(id);
        }
        [Route("api/Event2")]
        //Devuelve un EventDTO2
        public EventDTO2 GetEvent2(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.Even2(id);
        }

        [Route("api/Event/Type")]
        //Devuelve la id del tipo del evento
        public int GetType(int id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.GetType(id);
        }

        [Route("api/Event")]
        //Añade un evento
        public void PostEvent([FromBody] Event e)
        {
            EventsRepository rep = new EventsRepository();
            rep.Save(e);
        }

        [Route("api/Eventtype")]
        //Devuelve una lista con los eventos segun el tipo
        public List<Event> GetEventFood(string id)
        {
            EventsRepository rep = new EventsRepository();
            List<Event> lista = rep.EvetsByType2(id);
            return lista;
        }

        [Route("api/Event/AddUser")]
        //Añadimos a un USer a un evento
        public bool PutAddUserList(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            return rep.AddUser(id, n);
        }

        [Route("api/Event/RemoveUser")]
        //Quitamos a un User de un evento
        public bool PutRemoveUserList(int id, string n)
        {
            EventsRepository rep = new EventsRepository();
            return rep.RemoveUser(id, n);
        }


        [Route("api/Event")]
        //Modificamos los datos de un evento
        public void Put(int id, string f, string c, string p, string d, int max, string dir)
        {
            EventsRepository rep = new EventsRepository();
            rep.UpdateEvent(id, f, c, p, d, max, dir);
        }

        [Route("api/Event/Type")]
        //Modificamos el tipo de un evento
        public void PutEventType(int id, int t)
        {
            EventsRepository rep = new EventsRepository();
            rep.UpdateEventType(id, t);
        }

        [Route("api/Event/AddType")]
        //Añade un tipo valido 
        public bool PutAddType(string id)
        {
            EventsRepository rep = new EventsRepository();
            return rep.AddType(id);
        }


        [Route("api/Event")]
        //Borra un evento
        public void DeleteEvent(int id)
        {
            EventsRepository rep = new EventsRepository();
            rep.DeleteEvent(id);
        }
    }
}