export interface Props {
  // Las intefaces tienen que empezar con mayuculas
  firstName: string;
  lastName?: string; // al poner el signo de pregunta indicamos que podemos agragar esta propiedad o no
  email: string;
  isActive: boolean;
}
export default function KoderCard(props: Props) {
  return (
    <article>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <p>{props.email}</p>
      <p>{props.isActive ? "activo" : "inactivo"}</p>
    </article>
  );
}
