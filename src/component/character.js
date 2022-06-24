function character (props) {
    let {name,picture,desc}=props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src={picture} alt=""/>
        </div>
    )
}
export default character;