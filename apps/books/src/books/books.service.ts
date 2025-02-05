import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from './books.schema';
import { Model } from 'mongoose';
// 
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
// import { BookDto } from './dto/book.dto';
// 

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books.name) private bookModel: Model<Books>) {}



async findAll(): Promise<any[]> {
  const books = await this.bookModel.find().exec();
  return books.map((book) => ({
    id: book._id, // Map _id to id
    title: book.title,
    author: book.author,
    price: book.price,
    image: book.image,
  }));
}

// 
// private books:BookDto[]=[

//   {
//     id: 1,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     rating: 4.8,
//   },
//   {
//     id: 3,
//     title: "1984",
//     author: "George Orwell",
//     rating: 4.6,
//   },
//   {
//     id: 4,
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     rating: 4.7,
//   },
//   {
//     id: 5,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     rating: 4.2,
//   },

// ]

// create(createBookDto:CreateBookDto){
  //  const newbook:BookDto ={
    //   ...createBookDto,
    //   id:this.books.length + 1,
    //  }
    //  this.books.push(newbook);
    //  return newbook
    // }
    
    // findAll() {
    //   return this.books;
    // }


  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
  // 
}
