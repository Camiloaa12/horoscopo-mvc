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
    }
  }
  