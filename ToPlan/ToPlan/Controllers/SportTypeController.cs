using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    public class SportTypeController : ApiController
    {
        [Route("api/Sport/Get")]
        public SportDTO Get(string n)
        {
            SportTypesRepository rep = new SportTypesRepository();
            return rep.Get(n);
        }

        [Route("api/Sport")]
        public bool GetCheck(string n)
        {
            SportTypesRepository rep = new SportTypesRepository();
            return rep.Check(n);
        }

        [Route("api/Sport")]
        public void PostSport(string n)
        {
            SportTypesRepository rep = new SportTypesRepository();
            rep.Save(n);
        }


        [Route("api/Sport")]
        public void Delete(int id)
        {
            SportTypesRepository rep = new SportTypesRepository();
            rep.DeleteSport(id);
        }
    }
}