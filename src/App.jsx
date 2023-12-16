import React from 'react';
import './App.css';
import { BecerilerileriListele, getPersonInfo,HobileriListele } from './personal/personInfo'; // personInfo dosyasından fonksiyonu içe aktar
import { ImageThumbnails } from './personal/photos';


const App = () => {
  const personInfo = getPersonInfo();

  return (
  
    <>
    
    <header>
        <h1>Merhaba</h1>
       
    </header>

    <div class="fixed-image ">
        <img src={ImageThumbnails} alt="" style={{padding:"4px",margin:0, borderRadius:"8px", border:"1px solid #bdc3c7"}} />
    </div>


    <div id='all'>
      
    <section id="about">
        <h2>Hakkımda</h2>
        <p>Merhaba, ben {personInfo.name}. {personInfo.city} şehrinde yaşayan bir Web geliştirici ve Siber Güvenlik Öğrenicisiyim </p>
    </section>

    <section id="skills">
        <BecerilerileriListele />
    </section>

    <section id="hobbies">
        <HobileriListele />
    </section>

    <section id="contact">
        <h2>İletişim</h2>
        <p>Bana aşağıdaki adreslerden ulaşabilirsin:</p>
        <ul>
          <li>Email: {personInfo.email}</li>
          <li>LinkedIn: <a href="{personInfo.linkedin}">Mahmut-Alperen-Atar</a></li>

        </ul>
    </section>
    </div>


      <br />
      <br />
    <footer>
        <p>&copy; 2023 {personInfo.name}. Tüm hakları saklıdır.</p>
    </footer>
  
    
    </>
  );
};

export default App;
