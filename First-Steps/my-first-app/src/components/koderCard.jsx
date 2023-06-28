function KoderCard (props) {
    const name = `${props.firstName} ${props.lastName}`
    const image = `https://api.dicebear.com/6.x/initials/png?seed=${props.firstName} ${props.lastName}`
    
    return(
        <article className="koder">
        <img
          className="koderImg"
          src={image}
          alt="Avatar"
        />
        <p>{name}</p>
        </article>
    )
}
export default KoderCard;