const links = document.querySelector('.nav-links-container');
const currentContentContainer = document.querySelector('#home');


const contents = {
  home: `
      <h1>WELCOME</h1>
      <div class="home-content">
        <h2>Hi, I’m Frankelly</h2>
        <p>
          Welcome to my portfolio. Here you’ll find a selection of my work,
          projects, and the skills I’m currently developing.
        </p>
        <p>
          Use the navigation icons to explore more about me, my projects,
          and how we can work together.
        </p>
      </div>
  `,

  about: `
      <h1>ABOUT ME</h1>
      <p>
        I’m a software engineering student and developer with a strong interest
        in web technologies, Linux environments, and problem-solving.
      </p>
      <p>
        I work mainly with JavaScript, HTML, CSS, and Node.js, and I’m constantly
        improving my understanding of systems, networking, and security.
      </p>
      <p>
        Beyond code, I enjoy reading and writing, which strongly influences how
        I approach structure, clarity, and creativity in my projects.
      </p>
  `,

  projects: `
      <h1>PROJECTS</h1>
      <p>
        This section showcases projects focused on frontend development,
        backend logic, and practical problem-solving.
      </p>
      <p>
        Most projects are built using JavaScript and modern web tools,
        emphasizing clean structure, scalability, and learning by doing.
      </p>
      <p>
        More projects will be added as I continue expanding my skills and
        experimenting with new technologies.
      </p>
  `,

  services: `
      <h1>SERVICES</h1>
      <p>
        I offer development services focused on building simple, effective,
        and well-structured web solutions.
      </p>
      <ul>
        <li>Frontend development (HTML, CSS, JavaScript)</li>
        <li>Basic backend APIs with Node.js</li>
        <li>Website structure and code organization</li>
        <li>Technical problem analysis and debugging</li>
      </ul>
  `,

  contact: `
      <h1>CONTACT</h1>
      <p>
        If you’re interested in collaborating, discussing a project,
        or just connecting, feel free to reach out.
      </p>
      <p>
        You can contact me through my social platforms or by email.
      </p>
      <p>
        I’m always open to learning opportunities and meaningful conversations.
      </p>
  `
};


function handleContentChange(e){
   if(e.target.getAttribute('alt')){
        const contentId = e.target.getAttribute('alt');
        const content = contents[contentId];
        currentContentContainer.innerHTML = content;
   }
}

links.addEventListener('click', handleContentChange);

