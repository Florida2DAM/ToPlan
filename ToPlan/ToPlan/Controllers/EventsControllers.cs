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

        
        public string Get(int id)
        {
            return "value";
        }

        [Route("api/Event")]
        public void PostEvent([FromBody] Event e)
        {
            EventsRepository rep = new EventsRepository();
            rep.Save(e);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        
        [Route("api/Event")]
        public void DeleteEvent(int id)
        {
            EventsRepository rep = new EventsRepository();
            rep.DeleteEvent(id);
        }
    }
}