using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using WebApplication3.Controllers;

namespace NGTodoList
{
    [RoutePrefix("api/todos")]
    public class TodoController : ApiController
    {
        private static List<TodoItem> TodoItems = new List<TodoItem>()
        {
        new TodoItem { Id = Guid.NewGuid(), Label = "Faire les courses", Done = false },
        new TodoItem { Id = Guid.NewGuid(), Label = "Repasser une chemise", Done = true },
        new TodoItem { Id = Guid.NewGuid(), Label = "Ecrire article", Done = false}
        };

        [HttpGet]
        [Route("")]
        public IEnumerable<TodoItem> Get()
        {
            return TodoItems;
        }

        [HttpPost]
        [Route("")]
        public void Add(TodoItem item)
        {
            item.Id = Guid.NewGuid();
            TodoItems.Add(item);
        }

        [HttpPut]
        [Route("")]
        public void Update(TodoItem item)
        {
            var itemToUpdate = TodoItems.FirstOrDefault(i => i.Id == item.Id);
            if (itemToUpdate == null)
            {
                throw new ArgumentException("item");
            }

            itemToUpdate.Label = item.Label;
            itemToUpdate.Done = item.Done;
        }

        [HttpDelete]
        [Route("{id}")]
        public void Remove(Guid id)
        {
            var itemToDelete = TodoItems.FirstOrDefault(i => i.Id == id);
            if (itemToDelete == null)
            {
                throw new ArgumentException("item");
            }

            TodoItems.Remove(itemToDelete);
        }
    }
}