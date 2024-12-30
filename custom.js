if (!sessionStorage.getItem('visited')) {
  const popup = document.createElement('div');
  popup.innerHTML = `
    <style>
      .welcome-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .welcome-box-bg {
      background: linear-gradient(-45deg, green, darkgreen, black, transparent);
      }
      
      .welcome-box {
        background: linear-gradient(#69ba19, #baaf19);
        padding: 2em;
        border-radius: 20px;
        text-align: center;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: bolder;
        max-width: 500px;
        animation: slideIn 0.5s ease-out;
      }
      
      @keyframes slideIn {
        from {transform: translateY(-100px); opacity: 0;}
        to {transform: translateY(0); opacity: 1;}
      }
    </style>
    <div class="welcome-overlay">
    <div class="welcome-box-bg"></div>
      <div class="welcome-box">
        <h2>Welcome to Visual Studio Code.</h2>
        <p>I hope you have a great time with coding!</p>
        <button id="close-welcome">Okay</button>
      </div>
     </div> 
    </div>
  `;
  document.body.appendChild(popup);
  
  const closeWelcome = document.getElementById('close-welcome');
  closeWelcome.addEventListener('click', () => {
    popup.remove();
  });
  
  sessionStorage.setItem('visited', 'true');
}
