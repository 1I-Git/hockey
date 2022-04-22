import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipo.model';
@Injectable()
export class EquiposService {
  private equipos: any[] = [
    {
      nombre: 'Anaheim Ducks',
      alias: 'Ducks',
      img_team: 'assets/img/teams/ducks.webp',
      img_logo: 'assets/img/logos/ducks.webp',
      fecha: '19-06-1993',
      division: 'west',
      bio_short: `
      Los Anaheim Ducks (en español, Patos de Anaheim) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Anaheim, California.
      Compiten en la División Pacífico de la Conferencia Oeste de la National Hockey League (NHL) y disputan sus partidos como locales en el Honda Center.
      `,
      bio_long: `
          Los Mighty Ducks of Anaheim (traducible al español como "Los patos poderosos") fue fundado en 1993 por la compañía multinacional de entretenimiento Walt Disney Company. El nombre para el equipo fue escogido a partir de la película de Disney The Mighty Ducks (conocida en España como "Somos los mejores"), basada en la historia de auto-superación de un grupo de chicos desafortunados que pasan de ser uno de los peores equipos a ser unos campeones.1​ La buena acogida de la película hizo incluso que la compañía lanzase una serie de animación titulada Mighty Ducks, basada en un club de hockey formado por patos.
          El nuevo equipo estaría situado en Anaheim, cerca de Disneyland, y jugaría sus partidos como local en el Anaheim Arena (actual Honda Center). Como primera elección de draft del equipo, los Mighty Ducks escogieron a la joven promesa Paul Kariya. Rápidamente este jugador se convertiría en uno de los favoritos de la hinchada de Anaheim y en uno de los estandartes de la franquicia.
          Las primeras temporadas del equipo no fueron especialmente buenas, con un discreto debut en 1994 en el que el club quedó cuarto en su división, y en la temporada siguiente quedarían últimos. La situación cambiaría en 1996, cuando el club sella un acuerdo de varios traspasos con los Winnipeg Jets entre los cuales destacan Chad Kilger y futuras elecciones de draft como Teemu Selanne o Marc Chouinard que en un futuro fueron decisivas para la consolidación del club.
          La temporada 1996-97 sería la primera del equipo en playoffs al terminar cuarto en la conferencia, cayendo en la fase final ante Detroit Red Wings en la segunda ronda. El club regresó de nuevo a playoff en 1998-99 volviendo a perder frente al mismo rival, en esta ocasión en los cuartos de final de conferencia.
          Tras varias malas temporadas, el equipo se clasifica para playoff en 2003, derrotando por fin a Detroit y, en las siguientes fases, a Dallas Stars y Minnesota Wild llegando por primera vez en su historia a la final de la Stanley Cup frente a New Jersey Devils. El club luchó por hacerse con el título en una ronda apretada que se decidió en el séptimo y último partido, pero perdió por 3-0 y el equipo de Nueva Jersey resultó vencedor. A pesar de la derrota, el portero de los Ducks Jean Sebastien Giguere logró el Conn Smythe Trophy como jugador más valioso durante los playoff.
          La temporada 2004 trajo varios cambios, siendo el más importante la marcha de su estrella Paul Kariya. Anaheim contrarrestó las salidas con el fichaje de la estrella de Detroit, Sergei Fedorov, y de Tampa Bay Lighting Vaclav Prospal. Sin embargo, dicha temporada fue una gran decepción del club ya que no lograron clasificarse para los playoff.
          `,
    },
    {
      nombre: 'Anaheim Ducks',
      alias: 'Ducks',
      img_team: 'assets/img/teams/ducks.webp',
      img_logo: 'assets/img/logos/ducks.webp',
      fecha: '19-06-1993',
      division: 'west',
      bio_short: `
      Los Anaheim Ducks (en español, Patos de Anaheim) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Anaheim, California.
      Compiten en la División Pacífico de la Conferencia Oeste de la National Hockey League (NHL) y disputan sus partidos como locales en el Honda Center.
      `,
      bio_long: `
          Los Mighty Ducks of Anaheim (traducible al español como "Los patos poderosos") fue fundado en 1993 por la compañía multinacional de entretenimiento Walt Disney Company. El nombre para el equipo fue escogido a partir de la película de Disney The Mighty Ducks (conocida en España como "Somos los mejores"), basada en la historia de auto-superación de un grupo de chicos desafortunados que pasan de ser uno de los peores equipos a ser unos campeones.1​ La buena acogida de la película hizo incluso que la compañía lanzase una serie de animación titulada Mighty Ducks, basada en un club de hockey formado por patos.
          El nuevo equipo estaría situado en Anaheim, cerca de Disneyland, y jugaría sus partidos como local en el Anaheim Arena (actual Honda Center). Como primera elección de draft del equipo, los Mighty Ducks escogieron a la joven promesa Paul Kariya. Rápidamente este jugador se convertiría en uno de los favoritos de la hinchada de Anaheim y en uno de los estandartes de la franquicia.
          Las primeras temporadas del equipo no fueron especialmente buenas, con un discreto debut en 1994 en el que el club quedó cuarto en su división, y en la temporada siguiente quedarían últimos. La situación cambiaría en 1996, cuando el club sella un acuerdo de varios traspasos con los Winnipeg Jets entre los cuales destacan Chad Kilger y futuras elecciones de draft como Teemu Selanne o Marc Chouinard que en un futuro fueron decisivas para la consolidación del club.
          La temporada 1996-97 sería la primera del equipo en playoffs al terminar cuarto en la conferencia, cayendo en la fase final ante Detroit Red Wings en la segunda ronda. El club regresó de nuevo a playoff en 1998-99 volviendo a perder frente al mismo rival, en esta ocasión en los cuartos de final de conferencia.
          Tras varias malas temporadas, el equipo se clasifica para playoff en 2003, derrotando por fin a Detroit y, en las siguientes fases, a Dallas Stars y Minnesota Wild llegando por primera vez en su historia a la final de la Stanley Cup frente a New Jersey Devils. El club luchó por hacerse con el título en una ronda apretada que se decidió en el séptimo y último partido, pero perdió por 3-0 y el equipo de Nueva Jersey resultó vencedor. A pesar de la derrota, el portero de los Ducks Jean Sebastien Giguere logró el Conn Smythe Trophy como jugador más valioso durante los playoff.
          La temporada 2004 trajo varios cambios, siendo el más importante la marcha de su estrella Paul Kariya. Anaheim contrarrestó las salidas con el fichaje de la estrella de Detroit, Sergei Fedorov, y de Tampa Bay Lighting Vaclav Prospal. Sin embargo, dicha temporada fue una gran decepción del club ya que no lograron clasificarse para los playoff.
          `,
    },
  ];

  constructor() {
    console.log('servicio listo');
  }

  //Recuperar Array de Equipos
  getEquipos(): Equipo[] {
    return this.equipos;
  }

  //Recuperar un solo equipò
  getEquipo(id: number): Equipo[] {
    return this.equipos[id];
  }

  //Buscar un equipo por el NavBar
  buscarEquipo(textoNavBar: string): Equipo[] {
    let equipos: Equipo[] = [];
    textoNavBar = textoNavBar.toLowerCase();

    for (let equipo of this.equipos) {
      let nombre = equipo.nombre.toLowerCase();

      if (nombre.indexOf(textoNavBar) >= 0) {
        equipos.push(equipo);
      }
    }
    return equipos;
  }
}
