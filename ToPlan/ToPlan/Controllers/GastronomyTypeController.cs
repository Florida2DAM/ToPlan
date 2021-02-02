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
        //Devuelve un subtipo de gastronomy a partir de una id
        public GastronomyDTO Get(string n)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            return rep.Get(n);
        }

        [Route("api/Gastronomy")]
        //Comprueba si existe un subtipo Gastronomy a partir de una id
        public bool GetCheck(string n)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            return rep.Check(n);
        }
        [Route("api/Gastronomy")]
        //Insertar un nuevo subtipo de gastronomy
        public void PostGastronomy(string n)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            rep.Save(n);
        }

        [Route("api/Gastronomy")]
        //Elimina un objeto gastronomy a partir de su id
        public void Delete(int id)
        {
            GastronomyTypesRepository rep = new GastronomyTypesRepository();
            rep.DeleteGastronomy(id);
        }
    }
}