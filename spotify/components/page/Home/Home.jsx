import React from 'react'
import "./main-content.css"
import "./media-queries.css"
import "./reset.css"
import "./vars.css"
import "./sidebar-footer.css"
import scriptJS from "./script.js"

import IMG_1 from "./assets/playlist/1.jpeg"
import IMG_2 from "./assets/playlist/2.png"
import IMG_3 from "./assets/playlist/3.jpeg"
import IMG_4 from "./assets/playlist/4.jpeg"
import IMG_5 from "./assets/playlist/5.jpeg"
import IMG_6 from "./assets/playlist/6.jpeg"
import IMG_7 from "./assets/playlist/7.jpeg"
import IMG_8 from "./assets/playlist/8.jpeg"
import IMG_9 from "./assets/playlist/9.jpeg"
import IMG_10 from "./assets/playlist/10.jpeg"
import IMG_11 from "./assets/playlist/11.jpeg"
import IMG_12 from "./assets/playlist/12.jpeg"
import IMG_13 from "./assets/playlist/13.jpeg"
import IMG_14 from "./assets/playlist/14.jpeg"
import IMG_15 from "./assets/playlist/15.jpeg"

import Icons_1 from "./assets/icons/favicon.png"
import Icons_2 from "./assets/icons/logo-spotify.png"
import Icons_3 from "./assets/icons/search.png"
import Icons_4 from "./assets/icons/small-left.png"
import Icons_5 from "./assets/icons/small-right.png"
import { Link } from 'react-router-dom'


const Home2 = () => {
   return (
      <>
         <div className="body-container">
            <div className="sidebar">
               <nav className="sidebar__navigation">
                  <div className="logo">
                     <a href="">
                        <img src={Icons_2} alt="Logo" />
                     </a>
                  </div>
                  <ul>
                     <li>
                        <a href="">
                           <span className="fa fa-home"></span>
                           <span>Início</span>
                        </a>
                     </li>
                     <li>
                        <Link to="/main">
                           <span className="fa fa-search"></span>
                           <span>Buscar</span>
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div className="library">
                  <div className="library__content">
                     <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                     </button>
                     <span className="fa fa-plus"></span>
                  </div>
                  <section className="section-playlist">
                     <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                           <span>Criar playlist</span>
                        </button>
                     </div>
                  </section>
                  <div className="cookies">
                     <a href="">Cookies</a>
                  </div>
                  <div className="languages">
                     <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                     </button>
                  </div>
               </div>
            </div>
            <main>
               <div className="main-container">
                  <nav className="header__navigation">
                     <div className="navigation">
                        <button className="arrow-left">
                           <img src={Icons_4} alt="" />
                        </button>
                        <button className="arrow-right">
                           <img src={Icons_5} alt="" />
                        </button>
                     </div>
                     <div className="header__search">
                        <img src={Icons_3} alt="" />
                        <input id="search-input" 
                        maxlength="800" 
                        autocorrect="off" 
                        autocapitalize="off" 
                        spellcheck="false"
                        placeholder="O que você quer ouvir?" 
                        value="" />
                     </div>
                     <div className="header__login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                     </div>
                  </nav>

                  <div className="playlist-container">
                     <div id="result-playlists">
                        <div className="playlist">
                           <h1 id="greeting">Boas vindas</h1>
                           <h2 className="session">Navegar por todas as seções</h2>
                        </div>

                        <div className="offer__scroll-container">
                           <div className="offer__list">
                              <section className="offer__list-item">
                                 <Link to="/main" className="cards">
                                    <div className="cards card1">
                                       <img src={IMG_1} alt="" />
                                       <span>Boas festas</span>
                                    </div>
                                 </Link>

                                 <Link to="/main" className="cards">
                                    <div className="cards card2">
                                       <img src={IMG_2} alt="" />
                                       <span>Feitos para você</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card3">
                                       <img src={IMG_3} alt="" />
                                       <span>Lançamentos</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card4">
                                       <img src={IMG_4} alt="" />
                                       <span>Creators</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card5">
                                       <img src={IMG_5} alt="" />
                                       <span>Para treinar</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card6">
                                       <img src={IMG_6} alt="" />
                                       <span>Podcasts</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card7">
                                       <img src={IMG_7} alt="" />
                                       <span>Sertanejo</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card8">
                                       <img src={IMG_8} alt="" />
                                       <span>Samba e pagode</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card9">
                                       <img src={IMG_9}alt="" />
                                       <span>Funk</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card10">
                                       <img src={IMG_10} alt="" />
                                       <span>MPB</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card11">
                                       <img src={IMG_11} alt="" />
                                       <span>Rock</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card12">
                                       <img src={IMG_12} alt="" />
                                       <span>Hip Hop</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card13">
                                       <img src={IMG_13} alt="" />
                                       <span>Indie</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card14">
                                       <img src={IMG_14} alt="" />
                                       <span>Relax</span>
                                    </div>
                                 </Link>


                                 <Link to="/main" className="cards">
                                    <div className="cards card15">
                                       <img src={IMG_15} alt="" />
                                       <span>Música Latina</span>
                                    </div>
                                 </Link>
                              </section>
                           </div>
                        </div>
                     </div>
                     <div id="result-artist" className="hidden">
                        <div className="grid-container">
                           <div className="artist-card" id="">
                              <div className="card-img">
                                 <img id="artist-img" className="artist-img" />
                                 <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                 </div>
                              </div>
                              <div className="card-text">
                                 <a title="Foo Fighters" className="vst" href=""></a>
                                 <span className="artist-name" id="artist-name"></span>
                                 <span className="artist-categorie">Artista</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main >
            <script src={scriptJS}></script>
         </div >
      </>
   )
}

export default Home2
