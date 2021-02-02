using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ToPlan.Models;

namespace ToPlan.Controllers
{
    public class UsersController : ApiController
    {
        [Route("api/User/Check")]
        public bool CheckId(string id)
        {
            UsersRepository rep = new UsersRepository();
            bool aux = rep.CheckId(id);
            return aux;
        }

        [Route("api/User/GetPassword")]
        public string GetPassword(string id)
        {
            UsersRepository rep = new UsersRepository();
            string aux = rep.GetPasswrod(id);
            return aux;
        }

        [Route("api/UserDTO")]
        public UserDTO GetUserDTO(string id)
        {
            UsersRepository rep = new UsersRepository();
            UserDTO u = rep.RecoverUserDTO(id);
            return u;
        }
        [Route("api/Users")]
        public List<User> GetUser()
        {
            UsersRepository rep = new UsersRepository();
            List<User> lista = rep.RecoverUsers();
            return lista;
        }

        [Route("api/User/Preferences")]
        public string[] GetPreferences(string id)
        {
            UsersRepository rep = new UsersRepository();
            string[] u = rep.RecoverPreferences(id);
            return u;
        }

        [Route("api/User")]
        public void Post([FromBody] User u)
        {
            UsersRepository rep = new UsersRepository();
            rep.Save(u);
        }

        [Route("api/User/AdminT")]
        public void PutAdminT(string id)
        {
            UsersRepository rep = new UsersRepository();
            rep.BecomeAdmin(id);
        }

        [Route("api/User/AdminF")]
        public void PutAdminF(string id)
        {
            UsersRepository rep = new UsersRepository();
            rep.StopAdmin(id);
        }
        [Route("api/User/Password")]
        public void PutPassword(string id, string nid)
        {
            UsersRepository rep = new UsersRepository();
            rep.ChangePassword(id,nid);
        }

        [Route("api/User")]
        public void PutUser(string id,string n, string s,  string f, string p)
        {
            UsersRepository rep = new UsersRepository();
            rep.ChangeThings(id,n,s,f,p);
        }

        [Route("api/User")]
        public void DeleteUser(string id)
        {
            UsersRepository rep = new UsersRepository();
            rep.DeleteUser(id);
        }
    }
}