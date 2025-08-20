import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Credit, MovieCredit, Personas } from "../api/api";
import type { Person, Credits } from "../types/credits";

const Persons = ()=> {
    const { id } = useParams();

        const [credit, setCredit] = useState<Person>()
        const [movies, setMovies] = useState<Credits | null>(null)
        const [expanded, setExpanded] = useState(false);
    
        useEffect(() => {
          
            const Detalle = async ()=> {
                try {
                    
                    if(id){
                        const [resPersonas, resMovie] =await Promise.all(
                            [
                               await Personas(parseInt(id)),
                               await MovieCredit(parseInt(id))
                            ]
                        )
                        
                        setCredit(resPersonas)
                        setMovies(resMovie)

                    }
                } catch (error) {
                    console.error("Error en la carga de datos:", error);
                }
    
            }
            Detalle();
        }, [id])
    return(
        <section className="flex justify-center mt-[50px] lg:mt-[100px]">
            <div className="content">
                <div className="flex flex-row">
                    <div className="w-[100px] md:w-[200px]">
                        <img src={`https://image.tmdb.org/t/p/w300${credit?.profile_path}`} alt="" className="!max-w-[300px] w-[100px] md:w-[200px]"/>
                    <div className="mt-4">
                        <h2 className="text-sm md:text-lg text-bold">Personal Information</h2>
                        <p><strong>Known for: </strong>
                            <span>{credit?.known_for_department} </span>
                        </p>
                        <p className="text-sm md:text-md"><strong>Sex: </strong>
                        <span className="text-sm md:text-md"> { credit?.gender===1?"Female":"Male"} </span>
                        </p>
                        <p className="text-sm md:text-md"><strong>Date of birth: </strong>
                        <span className="text-sm md:text-md"> { credit?.birthday.toString()} </span>
                        </p>
                        <p className="text-sm md:text-md"><strong>Place of birth: </strong>
                        <span className="text-sm md:text-md"> { credit?.place_of_birth} </span>
                        </p>
                        <p className="text-sm md:text-md"><strong>Also known as: </strong>
                        <span className="text-sm md:text-md"> { credit?.also_known_as.map(item => {
                            return(
                                <p> {item} </p>
                            )
                        })
                    
                        } </span>
                        </p>
                        
                    </div>
                    </div>
                    <div className="pl-4 overflow-hidden">
                        <section>
                            <h1> {credit?.name} </h1>
                            <h3> Biography </h3>
                            <p className={`${expanded ? "" : "line-clamp-6 text-sm md:text-md"}`}>
                            {
                               credit?.biography
                            }
                            </p>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-blue-600 font-semibold mt-2 text-sm md:text-md"
                            >
                                {expanded ? "Read less" : "Read more"}
                            </button>
                        </section>
                        <section>
                            <h1 className="">Interpretation</h1>
                            <div className="card__list">
                                <table className="card__table">
                                    <tbody>
                                    </tbody>
                                        {
                                            movies?.cast.map( item => {
                                                return(
                                                    
                                                    <tr>
                                                        <td>
                                                            <div className="flex card__sm">
                                                                <div className="card__sm-fecha text-sm md:text-md mr-2"> 
                                                                    {item.release_date.toString()}
                                                                </div>
                                                                <div className="card__sm-info text-sm md:text-md"> 
                                                                    <Link to={`/movies/${item.id}`} >
                                                                        {item.title} 
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                </table>
                                
                                    
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Persons;