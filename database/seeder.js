import mongoose from "mongoose";
import Actor from "../models/Actor.js";
import Director from "./../models/Director.js";
import Movie from "./../models/Movie.js"; 
import MovieDirector from "./../models/MovieDirector.js";
import MovieGenre from "./../models/MovieGenre.js";
import Role from "./../models/Role.js";
import env from "dotenv";

env.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB'ye başarıyla bağlanıldı."))
    .catch(err => console.error("MongoDB bağlantı hatası:", err));
const cleanDB = async () => {
        await mongoose.connection.dropDatabase();
        console.log("Veritabanı temizlendi.");
    };
    
    

const seedDB = async () => {
    await cleanDB();
    await mongoose.connection.dropDatabase();

    // Örnek aktörler
    const actor1 = await Actor.create({
        firstName: "Tom",
        lastName: "Hanks",
        birthDate: "1956-07-09",
        bio: "Thomas Jeffrey Hanks is an American actor and filmmaker.",
        imageUrl: "https://example.com/tom-hanks.jpg"
    });

    const actor2 = await Actor.create({
        firstName: "Meryl",
        lastName: "Streep",
        birthDate: "1949-06-22",
        bio: "Mary Louise Streep, better known as Meryl Streep, is an American actress.",
        imageUrl: "https://example.com/meryl-streep.jpg"
    });

    // Örnek yönetmen
    const director1 = await Director.create({
        firstName: "Steven",
        lastName: "Spielberg",
        birthDate: "1946-12-18",
        bio: "Steven Allan Spielberg is an American film director, producer, and screenwriter.",
        imageUrl: "https://example.com/steven-spielberg.jpg"
    });

    // Örnek film
    const movie1 = await Movie.create({
        title: "Forrest Gump",
        releaseDate: "1994-07-06",
        imageUrl: "https://m.media-amazon.com/images/I/61MGZTJwl6L._AC_SY679_.jpg",
        genre: "Drama",
        actors: [actor1._id],
        desc: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
    });

    const movie2 = await Movie.create({
        title: "The Devil Wears Prada",
        releaseDate: "2006-06-30",
        imageUrl: "https://m.media-amazon.com/images/I/51FXM94Tz8L._AC_SY679_.jpg",
        genre: "Comedy",
        actors: [actor2._id],
        desc: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine."
    });

    const movie3 = await Movie.create({
        title: "Inception",
        releaseDate: "2010-07-16",
        imageUrl: "https://m.media-amazon.com/images/I/51KlUetTdcL._AC_SY679_.jpg",
        genre: "Sci-Fi",
        actors: [actor2._id],
        desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    });

    const movie4 = await Movie.create({
        title: "The Hunger Games",
        releaseDate: "2012-03-23",
        imageUrl: "https://m.media-amazon.com/images/I/71XyFQm+RXL._AC_SY679_.jpg",
        genre: "Action",
        actors: [actor2._id],
        desc: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death."
    });

    const movie5 = await Movie.create({
        title: "Jurassic Park",
        releaseDate: "1993-06-11",
        imageUrl: "https://m.media-amazon.com/images/I/81R1YdZnv3L._AC_SY679_.jpg",
        genre: "Adventure",
        actors: [actor1._id],
        desc: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok."
    });

    const movie6 = await Movie.create({
        title: "Titanic",
        releaseDate: "1997-12-19",
        imageUrl: "https://m.media-amazon.com/images/I/71jylCDHM+L._AC_SY679_.jpg",
        genre: "Romance",
        actors: [actor2._id],
        desc: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    });

    const movie7 = await Movie.create({
        title: "Pulp Fiction",
        releaseDate: "1994-10-14",
        imageUrl: "https://m.media-amazon.com/images/I/71kWfM5v6LL._AC_SY679_.jpg",
        genre: "Crime",
        actors: [actor2._id],
        desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    });

    const movie8 = await Movie.create({
        title: "Interstellar",
        releaseDate: "2014-11-07",
        imageUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
        genre: "Sci-Fi",
        actors: [actor2._id, actor2._id],
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    });

    // Film ve yönetmen ilişkisi
    await MovieDirector.create({
        movieId: movie1._id,
        directorId: director1._id
    });

    // Film ve tür ilişkisi
    await MovieGenre.create({
        movieId: movie1._id,
        genre: "Drama"
    });

    // Örnek rol
    await Role.create({
        role: "Forrest Gump",
        actor: actor1._id,
        movie: movie1._id
    });

    console.log("Veritabanı örnek verilerle dolduruldu.");
};

seedDB().then(() => {
    mongoose.connection.close();
});
