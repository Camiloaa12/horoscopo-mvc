export default class HoroscopoController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    init() {
  this.view.onFechaCambiada((valido) => {
    this.view.habilitarBoton(valido);
  });

  this.view.onClickConsultar((fecha) => {
    const signo = this.model.obtenerSigno(fecha);
    if (signo) {
      const horoscopo = this.model.obtenerHoroscopo(signo);
      this.view.mostrarMensaje(horoscopo);
    } else {
      this.view.mostrarMensaje("Fecha inválida o signo no encontrado.");
    }
  });

  // Validar si el campo ya tiene una fecha válida al cargar
  const fechaActual = this.view.inputFecha.value;
  const valido = /^\d{2}-\d{2}-\d{4}$/.test(fechaActual);
  this.view.habilitarBoton(valido);
    }
}