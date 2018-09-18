import React, { Component } from 'react';
import styles from './GetStarted.css';

class GetStarted extends Component {

  render() { 
    return (
      <div className={styles.getStarted}>
        <header>
          <h2>Get Started</h2>
        </header>
        <section>
          <p>Lorem ipsum dolor amet cronut marfa organic scenester iPhone, cloud bread bespoke edison bulb microdosing seitan roof party synth helvetica next level. Umami gastropub chicharrones forage readymade, gochujang salvia post-ironic. Biodiesel fanny pack food truck kickstarter heirloom, selvage paleo put a bird on it. Meditation pickled sustainable hell of tote bag. Poke chartreuse austin cornhole, keytar palo santo iPhone.</p>
          <button>START LOOKING FOR A PET</button>
        </section>

        <section>
          <p>Lorem ipsum dolor amet disrupt fixie cardigan gluten-free dreamcatcher. Flannel waistcoat kombucha, affogato poke occupy meh cronut tilde quinoa narwhal. Pitchfork viral hoodie ramps. Gochujang VHS banjo, succulents venmo cliche craft beer kinfolk cornhole subway tile vexillologist letterpress affogato. Bicycle rights skateboard letterpress, fanny pack raw denim etsy raclette blog.</p>
          <button>POST A PET</button>
        </section>
      </div>
    );
  }
}
 
export default GetStarted;