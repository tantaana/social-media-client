import React from 'react';
import AllTitle from '../../Hooks/AllTitle';

const Blogs = () => {
    AllTitle('Blogs')
    return (
        <div className='mt-20 mb-20 flex flex-col justify-center items-center'>
            <div className="card w-10/12 bg-blue-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-black text-2xl font-bold">Q1. What are the difference between SQL and noSQL?</h2>
                    <h2 className=" text-black text-2xl text-start"><u><b>Ans:</b></u> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h2>

                </div>
            </div>

            <div className="card w-10/12 bg-red-200 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title text-black text-2xl font-bold">Q2. What is JWT and how does it work?</h2>
                    <h2 className=" text-black text-2xl text-start"><u><b>Ans:</b></u> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.<br /> <br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</h2>

                </div>
            </div>

            <div className="card w-10/12 bg-green-200 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title text-black text-2xl font-bold">Q3. What is the difference between JavaScript and Node JS?</h2>
                    <h2 className=" text-black text-2xl text-start"><u><b>Ans:</b></u> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.<br /> <br /> Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h2>

                </div>
            </div>

            <div className="card w-10/12 bg-gray-200 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title text-black text-2xl font-bold">Q4. How does Node JS handle multiple request at the same time?</h2>
                    <h2 className=" text-black text-2xl text-start"><u><b>Ans:</b></u> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h2>

                </div>
            </div>
        </div>
    );
};

export default Blogs;