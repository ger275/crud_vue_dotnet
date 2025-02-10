const apiEmpleado = "http://localhost:5201/api/Empleado";

const app = Vue.createApp({
    data() {
        return {
            empleados: [],
            modalCrear: false,
            modalEditar: false,
            modalEliminar: false,
            empleadoActual: {}
        }
    },
    mounted() {
        this.getEmpleados()
    },
    methods: {
        getEmpleados() {
            axios.get(apiEmpleado).then(function (response) {
                app.empleados = response.data;
            });
        },
        insertEmpleado() {
            let emp = new FormData()
            emp.append('nombre', document.getElementById('nombre').value)
            emp.append('apellido', document.getElementById('apellido').value)
            emp.append('direccion', document.getElementById('direccion').value)
            emp.append('telefono', document.getElementById('telefono').value)
            emp.append('idPuesto', document.getElementById('idPuesto').value)
            emp.append('dpi', document.getElementById('dpi').value)
            emp.append('fechaNacimiento', document.getElementById('fechaNacimiento').value)
            emp.append('fechaIngresoRegistro', document.getElementById('fechaIngresoRegistro').value)

            axios.post(apiEmpleado, emp,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                app.getEmpleados()
            })
        },
        updateEmpleado() {
            let emp = new FormData()
            emp.append('idEmpleado', app.empleadoActual.idEmpleado)
            emp.append('nombre', document.getElementById('nombre').value)
            emp.append('apellido', document.getElementById('apellido').value)
            emp.append('direccion', document.getElementById('direccion').value)
            emp.append('telefono', document.getElementById('telefono').value)
            emp.append('idPuesto', document.getElementById('idPuesto').value)
            emp.append('dpi', document.getElementById('dpi').value)
            emp.append('fechaNacimiento', document.getElementById('fechaNacimiento').value)
            emp.append('fechaIngresoRegistro', document.getElementById('fechaIngresoRegistro').value)

            axios.put(apiEmpleado + "/" + app.empleadoActual.idEmpleado, emp,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                app.empleadoActual = {}
                app.getEmpleados()
            })
        },
        eliminarEmpleado() {
            axios.delete(apiEmpleado + "/" + app.empleadoActual.idEmpleado,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                app.empleadoActual = {}
                app.getEmpleados()
            })
        },
        selectEmpleado(empleado) {
            app.empleadoActual = empleado
        }
    }
}).mount('#app')


