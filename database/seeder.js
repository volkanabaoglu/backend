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

const seedDB = async () => {
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
        imageUrl: "https://example.com/forrest-gump.jpg",
        genre: "Drama",
        actors: [actor1._id, actor2._id],
        desc: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
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
