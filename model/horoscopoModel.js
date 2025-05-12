export default class HoroscopoModel {
    constructor() {
      this.signos = [
        { nombre: "Aries", emoji: "🔥", inicio: "21-03", fin: "19-04" },
        { nombre: "Tauro", emoji: "🐂", inicio: "20-04", fin: "20-05" },
        { nombre: "Géminis", emoji: "👯‍♂️", inicio: "21-05", fin: "20-06" },
        { nombre: "Cáncer", emoji: "🦀", inicio: "21-06", fin: "22-07" },
        { nombre: "Leo", emoji: "🦁", inicio: "23-07", fin: "22-08" },
        { nombre: "Virgo", emoji: "🌾", inicio: "23-08", fin: "22-09" },
        { nombre: "Libra", emoji: "⚖️", inicio: "23-09", fin: "22-10" },
        { nombre: "Escorpio", emoji: "🦂", inicio: "23-10", fin: "21-11" },
        { nombre: "Sagitario", emoji: "🏹", inicio: "22-11", fin: "21-12" },
        { nombre: "Capricornio", emoji: "🐐", inicio: "22-12", fin: "19-01" },
        { nombre: "Acuario", emoji: "🌊", inicio: "20-01", fin: "18-02" },
        { nombre: "Piscis", emoji: "🐟", inicio: "19-02", fin: "20-03" }
      ];
    }
  
    obtenerSigno(fecha) {
      const [dia, mes] = fecha.split("-").map(Number);
      const f = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}`;
      for (let signo of this.signos) {
        if (this.compararFechas(f, signo.inicio, signo.fin)) {
          return signo;
        }
      }
      return null;
    }
  
    compararFechas(fecha, inicio, fin) {
      const [d, m] = fecha.split("-").map(Number);
      const [di, mi] = inicio.split("-").map(Number);
      const [df, mf] = fin.split("-").map(Number);
  
      if (mi < mf || (mi === mf && di <= df)) {
        return (m > mi || (m === mi && d >= di)) && (m < mf || (m === mf && d <= df));
      } else {
        return (m > mi || (m === mi && d >= di)) || (m < mf || (m === mf && d <= df));
      }
    }
  
    obtenerHoroscopo(signo) {
      const mensajes = [
        "Hoy es un gran día para comenzar algo nuevo.",
        "Recuerda que todo esfuerzo tiene su recompensa.",
        "No te preocupes por lo que no puedes controlar.",
        "Tu energía atraerá cosas positivas.",
        "El universo tiene planes para ti. Confía.",
        "Es un buen momento para tomar decisiones importantes.",
        "Rodéate de personas que te impulsen."
      ];
      const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
      return `${signo.emoji} ${signo.nombre}: ${mensaje}`;
    }
  }
  