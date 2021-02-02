using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    public class OthersTypeController : ApiController
    {
        // GET api/values
        [Route("api/Other/Get")]
        public OtherDTO Get(string n)
        {
            OthersTypesRepository rep = new OthersTypesRepository();
            return rep.Get(n);
        }

        [Route("api/Other")]
        public bool GetCheck(string n)
        {
            OthersTypesRepository rep = new OthersTypesRepository();
            return rep.Check(n);
        }


        [Route("api/Other")]
        public void PostOther(string n)
        {
            OthersTypesRepository rep = new OthersTypesRepository();
            rep.Save(n);
        }

        [Route("api/Other")]
        public void Delete(int id)
        {
            OthersTypesRepository rep = new OthersTypesRepository();
            rep.DeleteOther(id);
        }

    }
}