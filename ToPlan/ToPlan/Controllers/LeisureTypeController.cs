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
        //Devuelve un subtipo de Leisure a partir de una id
        public LeisureDTO Get(string n)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            return rep.Get(n);
        }

        [Route("api/Leisure")]
        //Comprueba si existe un subtipo Leisure a partir de una id
        public bool GetCheck(string n)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            return rep.Check(n);
        }

        [Route("api/Leisure")]
        //Insertar un nuevo subtipo de Leisure
        public void PostLeisure(string n)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            rep.Save(n);
        }

        [Route("api/Leisure")]
        //Elimina un objetivo Leisure a partir de su id
        public void Delete(int id)
        {
            LeisureTypesRespository rep = new LeisureTypesRespository();
            rep.DeleteLeisure(id);
        }
    }
}