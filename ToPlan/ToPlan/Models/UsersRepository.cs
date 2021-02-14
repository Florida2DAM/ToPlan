using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ToPlan.Models
{
    public class UsersRepository
    {
        private List<string> emails = new List<string>{ "@gmail.com", "@outlook.com", "@hotmail.com", "@floridauniversitaria.es" };
        internal void Save(User u)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {          
                if(u.Preferences == null)
                {
                    u.Preferences = "";
                }
                context.Users.Add(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
            }
        }
        internal bool CheckId(string id)
        {
            try
            {
                ToPlanContext context = new ToPlanContext();
                User aux;
                try
                {
                    aux = context.Users.Where(b => b.UserId.Equals(id.ToLower())).FirstOrDefault();
                    if (aux == null)
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine("Error");
                    return true;
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return true;
            }
        }

        internal void BecomeAdmin(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(b => b.UserId.Equals(id.ToLower()));
                u.Admin = true;
                context.Users.Update(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
            }
        }
        internal void StopAdmin(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(b => b.UserId.Equals(id));
                u.Admin = false;
                context.Users.Update(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
            }
        }

        internal UserDTO RecoverUserDTO(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(v => v.UserId.Equals(id.ToLower()));
                return ToDTO(u);
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return null;
            }
        }

        internal User RecoverUserId(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(v => v.UserId.Equals(id.ToLower()));
                return u;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }
        }

        internal List<User> RecoverUserName(string name)
        {
            ToPlanContext context = new ToPlanContext();
            List<User> u = new List<User>();
            try
            {
                u = context.Users.Where(v => v.Name.Equals(name.ToLower())).ToList();
                return u;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conexion");
                return null;
            }
        }

        internal string[] RecoverPreferences(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            string[] final;
            try
            {
                u = context.Users.Single(v => v.UserId.Equals(id.ToLower()));
                final = u.Preferences.Split(';');
                for (int i = 0; i < final.Length; i++)
                {
                    final[i] = char.ToUpper(final[i][0]) + final[i].Substring(1);
                }
                return final;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return null;
            }
        }
        internal List<User> RecoverUsers()
        {
            ToPlanContext context = new ToPlanContext();
            List<User> u;
            try
            {
                u = context.Users.ToList();
                return u;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return null;
            }
        }
        internal void ChangePassword(string id, string p)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(v => v.UserId.Equals(id.ToLower()));
                u.Password = p;
                context.Users.Update(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
            }
        }

        internal bool GetPasswrod(string id, string p)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(r => r.UserId.Equals(id.ToLower()));
                if (p.Equals(u.Password))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return false;
            }
        }

        internal void DeleteUser(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(p => p.UserId.Equals(id.ToLower()));
                context.Remove(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
            }
        }

        internal void ChangeThings(string id, string n, string s, string f, string p)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(v => v.UserId.Equals(id.ToLower()));
                u.Name = n;
                u.Surname = s;
                u.FechaNacimiento = f;
                u.Preferences = p;
                context.Users.Update(u);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
            }
        }
        private UserDTO ToDTO(User u)
        {
            return new UserDTO(u.Name, u.Surname, u.FechaNacimiento);
        }

        internal bool CheckMail(string mail)
        {
            bool aux = false;
            for (int i = 0; i < emails.Count; i++)
            {
                if (mail.EndsWith(emails[i]))
                {
                    aux = true;
                }
            }
            return aux;

        }

        internal bool AddMail(string m)
        {
            if (CheckMail(m))
            {
                return false;
            }
            else
            {
                emails.Add(m);
                return true;
            }
        }

        internal bool CheckAdmin(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(v => v.UserId.Equals(id.ToLower()));
                return u.Admin;

            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return false;
            }
        }

        internal int GetAgeUser(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User aux;
            try
            {
                aux = context.Users.Single(b => b.UserId.Equals(id.ToLower()));
                string date = aux.FechaNacimiento;
                var datetime = DateTime.Parse(date);
                int age = DateTime.Today.AddTicks(-datetime.Ticks).Year - 1;
                return age;


            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return -1;
            }
        }

        internal UserDTO2 GetUserDTO2(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User aux;
            int age;
            DateTime date;
            try
            {
                aux = context.Users.Single(p => p.UserId.Equals(id.ToLower()));
                date = DateTime.Parse(aux.FechaNacimiento);
                age = DateTime.Today.AddTicks(-date.Ticks).Year - 1;
                return new UserDTO2(aux.Name, aux.Surname,aux.UserId, aux.Preferences,aux.FechaNacimiento);

            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return null;
            }
        }

        internal void SaveUserWithoutPreferences(User u)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
                u.Preferences = "";
                context.Users.Add(u);
                context.SaveChanges();
                
                
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
               
            }
        }

        internal bool PreferencesUpdate(string id, string p1)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            string[] aux;
            try
            {
                u = context.Users.Single(p => p.UserId.Equals(id.ToLower()));
                aux = u.Preferences.Split(';');
                if (aux.Length>= 4){
                    return false;
                }
                if(p1 == null)
                {
                    return false;
                }
                else
                {
                    for(int i =0; i < aux.Length; i++)
                    {
                        if (aux[i].ToLower().Equals(p1.ToLower()))
                        {
                            return false;
                        }
                    }
                    if (u.Preferences==null||aux.Length==0||u.Preferences.Equals(""))
                    {
                        u.Preferences = p1;
                    }
                    else
                    {
                        u.Preferences = u.Preferences + ";" + p1;
                    }
                    context.Users.Update(u);
                    context.SaveChanges();
                    return true;
                }
            }catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return false;
            }
        }
    }
}