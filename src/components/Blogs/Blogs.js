import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold text-center my-4'>What is semantic tag ?</h2>
            <p className='text-2xl'>The semantic tag is most important for understand developers and browser. It's useful for blind. Because it is meaning full tag. It can understand easy to any person. Non-sematic is very difficult for understand browser, developer and blind. So we should to use semantic. Now it is very use able.</p>
            <h2 className='text-3xl font-bold text-center my-4'> What is context api or What is a purpose of context api ?</h2>
            <p className='text-2xl'>The react context api is a way for data passing. It is very easy for data passing. It works like props. It can do data pass from grandfather or parent to any child and it is very easy. Props data pass is manual. But context api data pass is autometic. Firstly it do pass data  by export and nextly any child component can receive by import. It is very easy to data passing. So, now it is very useable for developer.
            </p>
            <h2 className='text-3xl font-bold text-center'>Inline blog vs inline blog element ?</h2>
        </div>
    );
};

export default Blogs;