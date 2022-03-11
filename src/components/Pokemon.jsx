import "../styles/pokemon.css"

const Pokemon = ({id,name}) => {
    console.log(id)
    return (
        
        <div className="poke-card-container">
            <div className="poke-img-container"> 
                <img className="poke-img" src="#" alt={name} />
            </div>
            <div className="poke-name-container"> 
                <h2>{name}</h2>
                <h1>#{id}</h1>
            </div>
        </div>
    )
}

export default Pokemon;


