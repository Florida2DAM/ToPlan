using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    public class GastronomyTypeController : ApiController
    {
        [Route("api/Gastronomy/Get")]
        public GastronomyDTO Get(string n)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            return rep.Get(n);
        }

        [Route("api/Gastronomy")]
        public bool GetCheck(string n)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            return rep.Check(n);
        }
        [Route("api/Gastronomy")]
        public void PostGastronomy(string n)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            rep.Save(n);
        }

        [Route("api/Gastronomy")]
        public void Delete(int id)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            rep.DeleteGastronomy(id);
        }
    }
}