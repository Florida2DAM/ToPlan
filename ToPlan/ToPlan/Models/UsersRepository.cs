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
        public string[] emails = { "@gmail.com", "@outlook.com", "@hotmail.com", "@floridauniversitaria.es" };
        internal void Save(User u)
        {
            ToPlanContext context = new ToPlanContext();
            try
            {
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
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine("Error");
                    return false;
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return false;
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

        internal string GetPasswrod(string id)
        {
            ToPlanContext context = new ToPlanContext();
            User u;
            try
            {
                u = context.Users.Single(r => r.UserId.Equals(id.ToLower()));
                return u.Password;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
                return null;
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
            for (int i = 0; i < emails.Length; i++)
            {
                if (mail.EndsWith(emails[i]))
                {
                    aux = true;
                }
            }
            return aux;

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
                return new UserDTO2(aux.Name, aux.Surname, age, aux.UserId, aux.Preferences);

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
                context.Users.Add(u);
                string preferences = u.Preferences;
                preferences = null;
                context.SaveChanges();
                
                
            }
            catch (Exception e)
            {
                Debug.WriteLine("Error de conéxion");
               
            }
        }
    }
}