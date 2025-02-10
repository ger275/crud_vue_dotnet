using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vuedotnet.Data;
using vuedotnet.Models;

namespace vuedotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuestoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PuestoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<PuestoModel>>> GetPuestos()
        {
            var lista = await _context.puesto.ToListAsync();
            return Ok(lista);
        }
    }
}
