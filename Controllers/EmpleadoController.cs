using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vuedotnet.Data;
using vuedotnet.Models;

namespace vuedotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EmpleadoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<EmpleadoModel>>> GetEmpleados()
        {
            var lista = await _context.empleado.ToListAsync();
            return Ok(lista);
        }

        [HttpPost]
        public async Task<ActionResult<string>> CrearEmpleado(EmpleadoModel empleado)
        {
            try
            {
                _context.empleado.Add(empleado);
                await _context.SaveChangesAsync();
                return Ok("¡Creado con éxito!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<EmpleadoModel>>> ActualizarEmpleado(EmpleadoModel empleado)
        {
            var DbEmpleado = await _context.empleado.FindAsync(empleado.idEmpleado);
            if (DbEmpleado == null)
            {
                return NotFound("El registro que desea modificar no existe.");
            }

            DbEmpleado.Nombre = empleado.Nombre;
            DbEmpleado.Apellido = empleado.Apellido;
            DbEmpleado.Direccion = empleado.Direccion;
            DbEmpleado.Telefono = empleado.Telefono;
            DbEmpleado.idPuesto = empleado.idPuesto;
            DbEmpleado.DPI = empleado.DPI;
            DbEmpleado.FechaNacimiento = empleado.FechaIngresoRegistro;

            await _context.SaveChangesAsync();
            //return Ok(await _context.empleado.ToListAsync());
            return Ok("¡Se modifico el registro correctamente!");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> EliminarEmpleado(int id)
        {
            var DbEmpleado = await _context.empleado.FirstOrDefaultAsync(emp => emp.idEmpleado == id);
            if (DbEmpleado == null)
            {
                return NotFound("El registro que desea eliminar no existe.");
            }

            try
            {
                _context.empleado.Remove(DbEmpleado);
                await _context.SaveChangesAsync();

                return Ok("¡Eliminado correctamente!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
