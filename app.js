/* const MyImage = props => {
const src = props.src
({src})
'stipping value'
*/

const MyImage = ({src}) => (
  <img src={src} alt="Sally's Portrait picture" />
)

const SallysResume = () => {
    console.log();
      return (
        <div id="portrait">
          <SallysAboutMe />
          <MyImage src="SallysPortrait.jpg"/>
          <SallysIntroduction />
          <SallysEducationAndWork />
          <SallysContactSection />
        </div>
      );
  }

const SallysAboutMe = () => (
  <>
    <header>
      <div id="img">
        <img src="luo-lei-fGdo4EnCjgw-unsplash.jpg" />
      </div>
      <h1 class="title">About me</h1>
    </header>
  </>
)
const SallysIntroduction = () => (
  <section id="introduction">
    <p>Hi I'm Sally I'm 25 and below this line you'll find more information about me.</p>
  </section>
)

const SallysEducationAndWork = () => (
  <>
  <section id="Education">
    <p>I have studied at:</p>
    <ul>
        <li>IES BEZMILIANA</li>
        <li>Minnesota University</li>
    </ul>
  </section>
  <section id="works">
    <p>I have worked at:</p>
    <div id="works_list">
        <ul>
            <li>Github as Engineer during 2018 and there I have to Design, implement, launch, and maintain highly visible and scalable services and applications.
            </li>
            <li>Jetbrains as Project manager during 2019 and I'm still working there. My work consist in
                use design patterns to solve business problems
            </li>
        </ul>
    </div>
  </section>
  </>
)

const SallysContactSection = () => (
  <>
  <section id="Contact-section">
    <p>My contact information: </p>
      <address id="Contact-info">
          <p>My name is Sally</p>
          <p>My email is: <a href="mailto://sally@IntenetExplorer.old">sally@IntenetExplorer.old</a></p>
          <p>My phone number is: <a href="tel:+34100572415">+34 100 57 24 15</a></p>
      </address>
  </section>
  </>
)

const App = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

ReactDOM.render(
  <App className='my-class'>
    <h1>Current Page Title!</h1>
  </App>,
  document.querySelector('#application-root')
);


/* 
Define: 
fractions
  a shortcut to group a list of children without adding extra nodes to the DOM
destructuring 
components
props
children
*/


