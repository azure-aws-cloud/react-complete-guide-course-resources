import {useState} from "react";
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from "./data";

import Header from './components/Header';
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

export const userData ={
    firstname:'Rhushikesh',
    title:'Architect'
}


function App() {
    const [selectedTopic,setSelectedTopic ]= useState('Please click a button state');
    function handleSelect(selectedButton){
        //selectedButton values can be 'components', 'jsx','prop','state'
        setSelectedTopic(selectedButton);
    }
  return (
    <div>
        <Header></Header>
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>

                  <CoreConcept {...CORE_CONCEPTS[1]}/>

                  <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
                  <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton label="Components" onSelect={()=>handleSelect('components')}></TabButton>
                  <TabButton label="JSX" onSelect={()=>handleSelect('jsx')}></TabButton>
                  <TabButton label="Props" onSelect={()=>handleSelect('props')}></TabButton>
                  <TabButton label="State" onSelect={()=>handleSelect('state')}></TabButton>
              </menu>
              {selectedTopic}
          </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

