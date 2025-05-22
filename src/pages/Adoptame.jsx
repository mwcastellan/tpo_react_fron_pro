import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import cachorro_1 from "../assets/cachorro_1.jpg";
import perro_adulto from "../assets/perro_adulto.jpg";
import perro_joven from "../assets/perro_joven.jpg";

/* Adoptame */ 
const Adoptame = ({ carrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} carrito={carrito} />
      <blockquote className="blockquote">
        <h2>
          Que tener en cuenta antes de adoptar una <strong>mascota.</strong>
        </h2>
        <article>
          <h4>
            Adoptar una mascota es una decisión importante y emocionante. Aquí
            hay algunas cosas que deberías considerar:
          </h4>

          <ol>
            <li>
              <b>Tipo de mascota:</b> Decide qué tipo de mascota se adapta mejor
              a tu estilo de vida, ya sea un perro, un gato, un pájaro, un
              conejo, etc. Cada especie tiene diferentes necesidades y requerirá
              diferentes cuidados.
            </li>
            <li>
              <b>Espacio:</b> Considera el tamaño de tu hogar y si tienes
              suficiente espacio tanto dentro como fuera para la mascota que
              estás considerando. Algunas mascotas necesitan más espacio que
              otras.
            </li>
            <li>
              <b>Tiempo:</b> Las mascotas requieren tiempo y atención. Piensa en
              cuánto tiempo tienes disponible para dedicarle a tu mascota cada
              día. Algunas mascotas, como los perros, necesitan mucho tiempo de
              ejercicio y socialización.
            </li>
            <li>
              <b>Costos:</b> Tener una mascota conlleva gastos, como alimentos,
              atención veterinaria, juguetes, y otros accesorios. Asegúrate de
              poder cubrir estos costos antes de adoptar una mascota
            </li>
            <li>
              <b>Compromiso a largo plazo:</b> Las mascotas viven muchos años,
              así que asegúrate de estar listo para el compromiso a largo plazo
              que implica cuidar de una mascota.
            </li>
            <li>
              <b>Compatibilidad:</b> Considera si la mascota que estás
              considerando adoptar es compatible con tu estilo de vida,
              personalidad y necesidades.
            </li>
            <li>
              <b>Condiciones de adopción:</b> Infórmate sobre los requisitos de
              adopción en el refugio o centro de rescate donde planeas adoptar.
              Algunos lugares tienen criterios específicos que debes cumplir
              antes de adoptar.
            </li>
            <li>
              <b>Preparación del hogar:</b> Asegúrate de que tu hogar esté
              seguro y listo para recibir a tu nueva mascota. Esto incluye
              preparar un área para dormir, asegurar cualquier peligro potencial
              y tener todos los suministros necesarios.
            </li>
            <li>
              <b>Considera la adopción:</b> En lugar de comprar una mascota,
              considera adoptar de un refugio o centro de rescate. Hay muchas
              mascotas que necesitan un hogar amoroso y puedes hacer una gran
              diferencia en sus vidas al adoptar.
            </li>
            <li>
              <b>Responsabilidad:</b> Adoptar una mascota es una gran
              responsabilidad. Asegúrate de estar listo para comprometerte a
              proporcionarle amor, cuidado y atención durante toda su vida.
            </li>
          </ol>
        </article>
      </blockquote>

      <blockquote className="blockquote">
        <img src={cachorro_1} width="25%" height="25%" />
        <img src={perro_adulto} width="25%" height="25%" />
        <img src={perro_joven} width="25%" height="25%" />
      </blockquote>

      <blockquote className="blockquote">
        <h2>
          Requisitos de <strong>adopción.</strong>
        </h2>
        <article>
          <h4>
            Los requisitos de adopción pueden variar dependiendo del refugio,
            centro de rescate o organización de adopción de mascotas. Sin
            embargo, algunos requisitos comunes incluyen:
          </h4>
          <ul>
            <li>
              <b>Edad mínima:</b> Muchos lugares requieren que los adoptantes
              sean mayores de 18 años. Algunos pueden tener requisitos de edad
              más específicos dependiendo del tipo de mascota.
            </li>
            <li>
              <b>Formulario de solicitud:</b> Por lo general, se requiere que
              los adoptantes completen un formulario de solicitud que incluye
              información sobre su historial como propietario de mascotas, su
              estilo de vida y su capacidad para cuidar de una mascota.
            </li>
            <li>
              <b>Entrevista y visita al hogar:</b> Algunos refugios pueden
              requerir una entrevista con un representante y/o una visita al
              hogar para asegurarse de que el ambiente sea adecuado para la
              mascota que se está considerando adoptar.
            </li>
            <li>
              <b>Verificación de antecedentes:</b> En algunos casos, los
              refugios pueden llevar a cabo una verificación de antecedentes
              para asegurarse de que los adoptantes no tengan un historial de
              abuso animal.
            </li>
            <li>
              <b>Referencias personales:</b> Es posible que se soliciten
              referencias personales para confirmar la idoneidad del adoptante
              para cuidar de una mascota.
            </li>
            <li>
              <b>Acuerdo de adopción:</b> Los adoptantes suelen tener que firmar
              un acuerdo de adopción que establece los términos y condiciones de
              la adopción, incluyendo el compromiso de proporcionar cuidados
              adecuados a la mascota.
            </li>
            <li>
              <b>Tarifa de adopción:</b> Algunos lugares pueden requerir el pago
              de una tarifa de adopción que ayuda a cubrir los costos asociados
              con el cuidado de las mascotas en el refugio, como la atención
              veterinaria y la alimentación.
            </li>
          </ul>
          <p>
            Es importante comunicarse para conocer los requisitos exactos y
            procedimientos de adopción.
          </p>
          <div>
            <a>Si te decidiste llena el formulario.</a>
          </div>
        </article>
      </blockquote>
      <Footer />
    </>
  );
};

export default Adoptame;
