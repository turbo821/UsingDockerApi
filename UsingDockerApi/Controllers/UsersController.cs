using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UsingDockerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = new[]
            {
                new { Name = "Tom" },
                new { Name = "Bob" }
            };
            return Ok(users);
        }
    }
}
