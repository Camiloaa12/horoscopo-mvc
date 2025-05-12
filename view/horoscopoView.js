export default class HoroscopoView {
    constructor() {
      this.inputFecha = document.getElementById('fechaNacimiento');
      this.btnConsultar = document.getElementById('btnConsultar');
      this.mensaje = document.getElementById('mensajeHoroscopo');
    }
  
    onFechaCambiada(callback) {
      this.inputFecha.addEventListener('input', () => {
        const valido = /^\d{2}-\d{2}-\d{4}$/.test(this.inputFecha.value);
        callback(valido);
      });
    }
  
    onClickConsultar(callback) {
      this.btnConsultar.addEventListener('click', () => {
        callback(this.inputFecha.value);
      });
    }
  
    mostrarMensaje(texto) {
      this.mensaje.classList.remove('oculto', 'fade-out');
      this.mensaje.textContent = texto;
      this.btnConsultar.disabled = true;
  
      setTimeout(() => {
        this.mensaje.classList.add('fade-out');
        setTimeout(() => {
          this.mensaje.classList.add('oculto');
          this.btnConsultar.disabled = false;
        }, 2000);
      }, 15000);
    }
  
    habilitarBoton(valor) {
      this.btnConsultar.disabled = !valor;
    }
  }
  