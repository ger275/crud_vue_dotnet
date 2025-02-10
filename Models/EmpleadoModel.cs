using System.ComponentModel.DataAnnotations;

namespace vuedotnet.Models
{
    public class EmpleadoModel
    {
        [Key]
        public int? idEmpleado { get; set; }
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public string? Apellido { get; set; }
        [Required]
        public string? Direccion { get; set; }
        [Required]
        public string? Telefono { get; set; }
        [Required]
        public int? idPuesto { get; set; }
        [Required]
        public string? DPI { get; set; }
        [Required]
        public DateTime? FechaNacimiento { get; set; }
        [Required]
        public DateTime? FechaIngresoRegistro { get; set; }
    }
}
