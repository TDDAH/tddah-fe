## About The "TDDAH" Project
This Project was intended to show off our teams BE game of submitting tests to earn achievements. The FE implemented User Auth as well as Tailwind to make the whole thing come togethor.

[Here](https://tddah-fe-server.onrender.com) is a link to the deployed project. Be aware the backend takes time to boot up if it has not been used recently, after the initial wait any other users will have the API data load instantly.
<img width="1431" alt="Screenshot 2024-04-19 at 9 53 25 PM" src="https://github.com/TDDAH/tddah-fe/assets/145882814/7071a917-b7f2-4884-a707-955dacf29591">

<img width="1438" alt="Screenshot 2024-04-19 at 9 54 50 PM" src="https://github.com/TDDAH/tddah-fe/assets/145882814/98fddc80-51a4-41b7-9336-fbeb0521e7f1">

<img width="1435" alt="Screenshot 2024-04-19 at 9 55 04 PM" src="https://github.com/TDDAH/tddah-fe/assets/145882814/5169830a-3f7e-4ce9-a6e3-b3b2cfe81f69">

### Wins:

* Effective communication between FE and BE
* Much more experience in Bug Fixing
* Stylizing with Tailwind

### Challenges:

* Learning Oath for Github
* 2 very persistant bugs (Fixed)

### Built With

* Reactjs
* CSS
* HTML
* Tailwind

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Installation (server)

1. Get our FE server at [git@github.com:TDDAH/tddah-fe-server.git](https://github.com/TDDAH/tddah-fe-server)
2. Clone the repo
   ```sh
   git@github.com:TDDAH/tddah-fe-server.git
   ```
3. Install NPM packages
   ```sh
   npm install i
   ```
4. cd into `tddah-fe-server` and run 
   ```js
   node server.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation (frontend)

1. Get to our FE at https://github.com/TDDAH/tddah-fe
2. Clone the repo
   ```sh
   git@github.com:TDDAH/tddah-fe.git
   ```
3. Install NPM packages
   ```sh
   npm install i
   ```
4. cd into `tddah-fe` and run 
   ```js
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Testing

In future iterations we would like to implement a better solution for testing user auth. With more time we would try to accomplish this using fixtures. This is not something we have used before, but we believe it may be the solution based on our recent studies. We have used intercept before and hard coded mock data, which was unsuccessful in this attempt. We also tried reading the cypress docs, and using chatgpt for some guidance on our research, but to not much success. We attempted to break it into many small steps, such as one fetch per test, and that seemed to not work well, and we seemed to try to do it all in one bigger test also without much success. That said, with the numerous fetches and the reliance of the fetch requests on each other it is hard. We know it is something we can accomplish, but would require more research and new ways of testing that we have yet to learn.

1. In your console type "npm run cypress"
2. Enjoy




