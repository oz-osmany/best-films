import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieCredit, Personas } from '../api/api';
import type { Person, Credits } from '../types/credits';

const Persons = () => {
  const { id } = useParams();

  const [credit, setCredit] = useState<Person>();
  const [movies, setMovies] = useState<Credits | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const Detalle = async () => {
      try {
        if (id) {
          const [resPersonas, resMovie] = await Promise.all([
            Personas(parseInt(id)),
            MovieCredit(parseInt(id)),
          ]);

          setCredit(resPersonas);
          setMovies(resMovie);
        }
      } catch (error) {
        console.error('Error loading person:', error);
      }
    };
    Detalle();
  }, [id]);
  return (
    <section className="flex justify-center mt-[50px] lg:mt-[100px]">
      <div className="content">
        {
          credit ? (
          <div className="flex flex-row">
            <div className="w-[100px] md:w-[200px]">
              {credit.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${credit?.profile_path}`}
                  alt={`${credit.name} profile photo`}
                  className="!max-w-[300px] w-[100px] md:w-[200px]"
                  loading='lazy'
                />

              ): (
                  <div className="w-[100px] md:w-[200px] h-[300px] bg-gray-200 rounded" aria-label="No photo available" />
              )}
              <div className="mt-4">
                <h2 className="text-sm md:text-lg text-bold">Personal Information</h2>
                <p>
                  <strong>Known for: </strong>
                  <span>{credit?.known_for_department} </span>
                </p>
                <p className="text-sm md:text-md">
                  <strong>Sex: </strong>
                  <span className="text-sm md:text-md">
                    {' '}
                    {credit?.gender === 1 ? 'Female' : 'Male'}{' '}
                  </span>
                </p>
                <p className="text-sm md:text-md">
                  <strong>Date of birth: </strong>
                  <span className="text-sm md:text-md">
                    {' '}
                    {
                      credit.birthday
                        ? String(credit?.birthday)
                        : 'No information'}{' '}
                  </span>
                </p>
                <p className="text-sm md:text-md">
                  <strong>Place of birth: </strong>
                  <span className="text-sm md:text-md">
                    {' '}
                    {credit?.place_of_birth || 'No information'}{' '}
                  </span>
                </p>
                {
                  credit.also_known_as?.length && (
                    <p className="text-sm md:text-md">
                  <strong>Also known as: </strong>
                  <span className="text-sm md:text-md">
                    {' '}
                    {credit?.also_known_as.map((item,i) => {
                      return <p key={i}> {item} </p>;
                    })}{' '}
                  </span>
                </p>
                  )}                
              </div>
            </div>
            <div className="pl-4 overflow-hidden">
              <section>
                <h1> {credit?.name} </h1>
                <h2> Biography </h2>
                <p className={`text-sm md:text-md ${expanded ? '' : 'line-clamp-6'}`}>
                  {credit?.biography}
                </p>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-blue-600 font-semibold mt-2 text-sm md:text-md"
                >
                  {expanded ? 'Read less' : 'Read more'}
                </button>
              </section>
              <section>
                <h1 className="">Interpretation</h1>
                <div className="card__list">
                  <table className="card__table">
                    <tbody>
                    {movies?.cast?.map((item,i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <div className="flex card__sm">
                              <div className="card__sm-fecha text-sm md:text-md mr-2">
                                {item.release_date.toString()}
                              </div>
                              <div className="card__sm-info text-sm md:text-md">
                                <Link to={`/movies/${item.id}`}>{item.title}</Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div>
            <h1>No information about this actor</h1>
            <p>go back</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default Persons;
