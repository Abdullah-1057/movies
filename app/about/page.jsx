import Movie from "./movies";
export default async function About() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res)
  return (
    <div>
      <h1>page About</h1>
      <div className="grid gap-16 grid-cols-fluid ">
        {res.results.map((movies) => {
          return (
            <div>
              <Movie
                key={movies.id}
                id={movies.id}
                poster_path={movies.poster_path}
                title={movies.title}
                release_date={movies.release_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
