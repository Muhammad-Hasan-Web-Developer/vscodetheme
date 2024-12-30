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
      
      .welcome-box {
        background: linear-gradient(45deg, #550303, #06026b);
        padding: 2em;
        border-radius: 20px;
        text-align: center;
        color: white;
        max-width: 500px;
        animation: slideIn 0.5s ease-out;
      }
      
      @keyframes slideIn {
        from {transform: translateY(-100px); opacity: 0;}
        to {transform: translateY(0); opacity: 1;}
      }
    </style>
    <div class="welcome-overlay">
      <div class="welcome-box">
        <h2>Selamat Datang!</h2>
        <p>Terima kasih telah mengunjungi website saya.</p>
        <button id="close-welcome">Tutup</button>
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
