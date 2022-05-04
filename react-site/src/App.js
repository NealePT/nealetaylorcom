import Header from './components/Header';
import { useState } from 'react';
import './App.css';
import './components/LinkBar.css'
import './components/Header.css'

function App() {
  const [linkClick, setLinkClick] = useState(true);

  return (
    <div className="App">
      <Header 
        linkClick={linkClick}
        setLinkClick={setLinkClick}
      />
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet sapien ac ex bibendum, ultrices placerat ipsum volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut non ex tincidunt, rutrum ex nec, lacinia risus. Vivamus ac accumsan urna. Phasellus et lacus eget metus molestie viverra. Vivamus semper sed ex ac ornare. Donec sodales, velit at egestas sagittis, ex sapien eleifend lacus, egestas pretium magna sapien ac sapien. Praesent lectus justo, commodo et velit vel, tincidunt tempor tortor. Nunc nec vulputate odio. Mauris sit amet ipsum eu justo egestas pellentesque sit amet rhoncus felis. Nulla lacinia ac quam ac pretium. Nullam eget ligula ut sem ultrices scelerisque. In consequat eleifend lobortis. Donec sodales eu augue vitae vulputate.

Donec sit amet ante purus. Nunc a dolor luctus, varius metus sed, dictum ligula. Donec sed varius risus. Integer in auctor elit. Vestibulum eu lorem porttitor, pulvinar neque in, volutpat ligula. Aliquam erat volutpat. Donec pharetra rhoncus nibh, eget congue odio dignissim malesuada. Cras eu varius orci. Fusce feugiat, sapien imperdiet dictum vehicula, nibh ante pulvinar arcu, sit amet rutrum ipsum tellus vel urna. Phasellus ullamcorper, purus at consequat lobortis, ligula quam varius leo, vitae tincidunt metus nisi vel mauris. Donec iaculis nulla luctus, mattis mi ac, cursus sem. Pellentesque vehicula quam sit amet egestas dapibus. In ut mollis quam.

Suspendisse eget condimentum nisi. Ut vitae elementum nibh. Sed pharetra interdum nisl eget sodales. Suspendisse id condimentum massa, sed tincidunt metus. Maecenas eleifend fermentum sem eget blandit. Nulla auctor posuere nibh. Phasellus pulvinar justo tortor. Nam id leo eu urna posuere cursus.

Aenean id fermentum urna, lacinia lacinia nisi. Nunc auctor venenatis odio ac rutrum. Vestibulum nec nisl vel mauris tempor dictum. Vestibulum bibendum id orci dignissim malesuada. Sed fermentum nisi at metus porttitor malesuada. Integer convallis finibus pellentesque. In ac dui eget dui porttitor porta. Nulla nec posuere ligula, dignissim cursus justo. Proin tempor ex erat. Praesent eros nulla, ultricies a dui eget, pretium fringilla lectus. Nunc ut semper eros. Nunc vestibulum eu orci at condimentum. In vestibulum at nunc nec interdum.

Sed vehicula elit vitae iaculis venenatis. Vestibulum malesuada libero sed sem volutpat elementum. Sed accumsan ornare tortor in porttitor. Vestibulum mollis risus eu ligula scelerisque vehicula at dictum purus. Quisque vel libero dolor. In diam est, suscipit vel velit a, sagittis vestibulum arcu. Vestibulum eu mi malesuada felis pulvinar ultrices eu vitae leo. Aenean iaculis volutpat enim, id efficitur turpis accumsan et. Donec ullamcorper sapien at lacus varius volutpat. Ut sed ultricies dolor, luctus ultrices elit. Phasellus bibendum euismod arcu, eget consectetur tortor sollicitudin venenatis. Morbi quis nunc at justo pharetra imperdiet. 
      </div>
    </div>
  );
}

export default App;
