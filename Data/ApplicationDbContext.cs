using Microsoft.EntityFrameworkCore;
using vuedotnet.Models;

namespace vuedotnet.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }

        public DbSet<EmpleadoModel> empleado { get; set; }

        public DbSet<PuestoModel> puesto { get; set; }
    }
}
