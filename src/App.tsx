import { useState } from 'react';
import './App.css';
import myphoto from './me.jpg';
import bananaImage from './banana.jpg';
import bananaImage1 from './banana1.jpg';
import bananaImage2 from './banana2.jpg';

function App() {
  return (
    <div id="app">
      <div id="container">
        <div id="user">
          <div id="myphoto">
            <img src={myphoto} alt="我的照片"/>
          </div>
          <div id="userInfo">
            <div id="NameAndTitle">
              <strong className="title">Chun-Lin Huang</strong>
              <p>TKUIM 3C</p>
            </div>
            <div id="aboutUser">
              <p>我目前就讀於淡江資管三年級</p>
            </div>
          </div>
        </div>

      <div id="edu">
        <p className="title">Education</p>
        <ul>
          <li>國小：頂番國小</li>
          <li>國中：和美國中</li>
          <li>高中：和美高中</li>
          <li>大學：淡江大學</li>
        </ul>
      </div>

      <div id="contact">
        <p className="title">Contact</p>
        <div id="contactInfo">
          <div id="locate">
            <p className="title">Locate <i className="bi bi-geo-alt"></i></p>
            <p>彰化縣和美鎮</p>
          </div>
          <div id="email">
            <p className="title">Email <i className="bi bi-envelope"></i></p>
            <p>E-mail: <a href="mailto:411630212@o365.tku.edu.tw">411630212@o365.tku.edu.tw</a></p>
          </div>
          <div id="ins">
            <p className="title">Instagram <i className="bi bi-instagram"></i></p>
            <p>Instagram: <a href="https://www.instagram.com/h.chunnn_/" target="_blank">h.chunnn_</a></p>
          </div>
        </div>
      </div>

      <div id="experience">
        <p className="title">Experience</p>
        <div className="experience">
          <p className="title">康輔社社長 - 高二</p>
          <p>在和美高中擔任康輔社社長一年的時間！</p>
        </div>
      </div>

      <div id="habit">
        <p className="title">My Habit</p>
        <ul>
          <li>唱歌</li>
          <li>跳舞</li>
          <li>打排球</li>
        </ul>
      </div>

      <div id="MBTI">
        <p className="title">My MBTI</p>
        <p>MBTI: ISFJ 守衛者</p>
      </div>

      <div id="Family">
        <p className="title">My Family</p>
        <ul>
          <li>爸爸</li>
          <li>媽媽</li>
          <li>妹妹</li>
          <li>弟弟</li>
        </ul>
        <span>我是家中的老大！</span>
      </div>

      <div id="pet">
        <p className="title">My Pet</p>
        <h3>我養了一隻可愛的倉鼠</h3>
        <table>
          <tr>
            <th>名字:</th>
            <td>banana</td>
          </tr>
          <tr>
            <th>性別:</th>
            <td>女</td>
          </tr>
          <tr>
            <th>年齡:</th>
            <td>2</td>
          </tr>
        </table>
        <div className="pet-images">
          <img src={bananaImage} alt="我的倉鼠" />
          <img src={bananaImage1} alt="我的倉鼠" />
          <img src={bananaImage2} alt="我的倉鼠" />
        </div>
        <p><em>這是我為他拍的照片！</em></p>
      </div>
    </div>
  </div> 
  );
}
export default App;