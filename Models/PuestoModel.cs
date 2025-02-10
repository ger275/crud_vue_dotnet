using System.ComponentModel.DataAnnotations;

namespace vuedotnet.Models
{
    public class PuestoModel
    {
        [Key]
        public int idPuesto { get; set; }
        [Required]
        public string puesto { get; set; }
    }
}
