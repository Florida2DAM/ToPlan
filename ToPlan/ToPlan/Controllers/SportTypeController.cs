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
        //Devuelve un subtipo de Sport a partir de una id
        public SportDTO Get(string n)
        {
            SportTypesRepository rep = new SportTypesRepository();
            return rep.Get(n);
        }

        [Route("api/Sport")]
        //Comprueba si existe un subtipo Sport a partir de una id
        public bool GetCheck(string n)
        {
            SportTypesRepository rep = new SportTypesRepository();
            return rep.Check(n);
        }

        [Route("api/Sport")]
        //Insertar un nuevo subtipo de Sport
        public void PostSport(string n)
        {
            SportTypesRepository rep = new SportTypesRepository();
            rep.Save(n);
        }


        [Route("api/Sport")]
        //Elimina un objeto Sport a partir de su id
        public void Delete(int id)
        {
            SportTypesRepository rep = new SportTypesRepository();
            rep.DeleteSport(id);
        }
    }
}