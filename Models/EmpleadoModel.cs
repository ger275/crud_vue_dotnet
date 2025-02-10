using System.ComponentModel.DataAnnotations;

namespace vuedotnet.Models
{
    public class EmpleadoModel
    {
        [Key]
        public int? idEmpleado { get; set; }
        [Required]
        [StringLength(50)]
        public string? Nombre { get; set; }
        [Required]
        [StringLength(50)]
        public string? Apellido { get; set; }
        [Required]
        [StringLength(100)]
        public string? Direccion { get; set; }
        [Required]
        [StringLength(8)]
        public string? Telefono { get; set; }
        [Required]
        public int? idPuesto { get; set; }
        [Required]
        [StringLength(13)]
        public string? DPI { get; set; }
        [Required]
        public DateTime? FechaNacimiento { get; set; }
        [Required]
        public DateTime? FechaIngresoRegistro { get; set; }
    }
}
