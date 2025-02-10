const apiEmpleado = "http://localhost:5201/api/Empleado";
const apiPuesto = "http://localhost:5201/api/Puesto";

const app = Vue.createApp({
    data() {
        return {
            empleados: [],
            puestos: [],
            modalCrear: false,
            modalEditar: false,
            modalEliminar: false,
            empleadoActual: {},
            selectedPuesto: ""
        }
    },
    mounted() {
        this.getEmpleados()
        this.getPuestos()
    },
    methods: {
        getEmpleados() {
            axios.get(apiEmpleado).then(function (response) {
                app.empleados = response.data;
            });
        },
        getPuestos() {
            axios.get(apiPuesto).then(function (response) {
                app.puestos = response.data;
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
                app.selectedPuesto = ""
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
                app.selectedPuesto = ""
                app.getEmpleados()
            })
        },
        selectEmpleado(empleado) {
            app.empleadoActual = empleado
            app.selectedPuesto = empleado.idPuesto
        }
    }
}).mount('#app')


