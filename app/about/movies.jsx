import Link from "next/link";
import Image from "next/image"
export default function Movie({ key,id,poster_path,title,release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
      <div>
        <Link href={`/${id}`}>
          <Image
            src={imagePath + poster_path}
            width={800}
            height={800}
            alt={title}
            priority
          />
        </Link>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        
      </div>
    )
  }
  
