import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="https://codersera.com/blog/wp-content/uploads/2019/12/SQL-VS-NoSQL-1.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Difference between SQL and NoSQL ? </h3>
				<p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="http://jwt.io/img/logo-asset.svg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is JWT ?</h3>
					<p>JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.</p>
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does it work? ?</h3>
					<p>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. </p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is the difference between javascript and NodeJS?</h3>
					<p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful</p>
				
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://miro.medium.com/max/1400/1*FOlZ57fGZTJsSkbP7XGQfg.jpeg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does NodeJS handle multiple requests at the same time?</h3>
					<p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
				</div>
			</a>
		</div>
	</div>
</section>
    </div>
  );
};

export default Blogs;
