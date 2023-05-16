import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4,2]
    };
    return (
        <div className='my-container mt-24'>
            <Pdf targetRef={ref} filename="blog.pdf" >
                {({ toPdf }) => <button className='my-btn ml-5' onClick={toPdf}>Download Pdf</button>}
            </Pdf>
           <div ref={ref} className='p-5 w-full h-full'>
           <h2 className="text-xl text-[#82B440] font-bold mb-4">1. What is the differences between uncontrolled and controlled components?</h2>
            <p className='text-base mb-10 font-medium'>Answer: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h2 className="text-xl text-[#82B440] font-bold mb-4">2.How to validate React props using PropTypes?</h2>
            <p className='text-base mb-10 font-medium'>Answer: PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking.
                <br /> When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console. <br /> If default props are set for the React component, the values are first resolved before type checking against propTypes. Therefore, default values are also subject to the prop type definitions.
                <br />
                Keep in mind that type checking propTypes can happen only in development mode, enabling you to catch bugs in your React application before releasing it to the production environment.</p>
            <h2 className="text-xl text-[#82B440] font-bold mb-4">3. What is the difference between nodejs and express js?</h2>
            <p className='text-base mb-10 font-medium'>
                <span className='text-xl text-[#82B440]'>Node.js: </span>

                Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on. <br />

                <span className='text-xl text-[#82B440]'>Express.js: </span>
                Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                <br />
                NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            <h2 className="text-xl text-[#82B440] font-bold mb-4">4. What is a custom hook, and why will you create a custom hook?</h2>
            <p className='text-base mb-10 font-medium'>Answer: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
           </div>
        </div>
    );
};

export default Blog;