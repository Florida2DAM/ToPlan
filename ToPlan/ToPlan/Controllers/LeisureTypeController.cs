using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    public class LeisureTypeController : ApiController
    {
        [Route("api/Leisure/Get")]
        public LeisureDTO Get(string n)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            return rep.Get(n);
        }

        [Route("api/Leisure")]
        public bool GetCheck(string n)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            return rep.Check(n);
        }

        [Route("api/Leisure")]
        public void PostLeisure(string n)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            rep.Save(n);
        }

        [Route("api/Leisure")]
        public void Delete(int id)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            rep.DeleteLeisure(id);
        }
    }
}