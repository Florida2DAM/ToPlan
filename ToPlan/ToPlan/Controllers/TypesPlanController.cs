using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    public class TypesPlanController : ApiController
    {
        // GET api/values
        [Route("api/TypePlan/List")]
        public List<TypePlan> ListTypes()
        {
            TypePlansRepository rep = new TypePlansRepository();
            return rep.GetTypes();
        }

        // Inserta un nuevo tipo
        [Route("api/TypePlan")]
        public void Post([FromBody] TypePlan t)
        {
            TypePlansRepository rep = new TypePlansRepository();
            rep.Save(t);
        }

        // Modifica un subtipo
        public void Put(int id, string n, string s)
        {
            TypePlansRepository rep = new TypePlansRepository();
            rep.UpdateType(id, n, s);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}