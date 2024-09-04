import { useCharacters } from "../hooks/useCharacters"
import { BuscarCharacter } from './BuscarCharacter'
 

export const MarvelApp = () => {
    const{characters, formatImageUrl} = useCharacters()

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
            <BuscarCharacter onSearch={handleSearch} />
            
            <div className="d-flex flex-row row row-cols-5">
                {
                    //preguntando si characters tiene valores (si No es null)
                    characters && 
                        characters.map((char)=>(
                            <div >
                                <div key={char.id}>
                                    <li>{char.name}</li>
                                    <img src={formatImageUrl(char)} style={{width: '8rem'}}/>
                                </div>
                            </div>
                    ))
                }
            </div>
            <br></br>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}


 