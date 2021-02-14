using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TypesPlanController : ApiController
    {
        // Devuelve una lista con los tipos de planes
        [Route("api/TypePlan/List")]
        public List<TypePlan> GetListTypes()
        {
            TypePlansRepository rep = new TypePlansRepository();
            return rep.GetTypes();
        }

        //Devuelve true si existe un type con esa id
        [Route("api/TypePlan/Check")]
        public bool GetCheckTypes(int id)
        {
            TypePlansRepository rep = new TypePlansRepository();
            return rep.CheckId(id);
        }

        //Devuelve una lista con los tipos de planes en formato TypePlanDTO
        [Route("api/TypePlan/ListDTO")]
        public List<TypePlanDTO> GetListTypesDTO()
        {
            TypePlansRepository rep = new TypePlansRepository();
            return rep.GetTypesDTO();
        }

        // Inserta un nuevo tipo
        [Route("api/TypePlan")]
        public void Post([FromBody] TypePlan t)
        {
            TypePlansRepository rep = new TypePlansRepository();
            rep.Save(t);
        }

        // Modifica un subtipo
        [Route("api/TypePlan")]
        public void Put(int id, string n, string s)
        {
            TypePlansRepository rep = new TypePlansRepository();
            rep.UpdateType(id, n, s);
        }

        // Borra un subtipo
        [Route("api/TypePlan")]
        public void Delete(int id)
        {
            TypePlansRepository rep = new TypePlansRepository();
            rep.DeleteType(id);
        }
    }
}