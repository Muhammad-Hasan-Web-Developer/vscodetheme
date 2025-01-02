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
            background: rgba(0, 0, 0, 0.9);
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
            max-width: 500px;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                transform: translateY(-100px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 1;
            }
        }



        .welcome-box img {
            width: 300px;
            /* height: 300px;
            object-fit: cover;
            border-radius: 50%; */
            margin: 20px auto !important;
            margin-bottom: 1em;
        }

        .welcome-box h2 {
            color: white;
            background: linear-gradient(45deg, #ff6b6b, #4834d4);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bolder;
        }

        .welcome-box p {
            color: white;
            background: linear-gradient(45deg, #ff6b6b, #4834d4);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bolder;
        }


        .welcome-box button>span {
            color: white;
            background: linear-gradient(45deg, #ff6b6b, #4834d4);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bolder;
        }

        .welcome-box button {
            background: linear-gradient(45deg, #550303, #06026b);
            border: none;
            padding: 1em 2em;
            color: white;
            border-radius: 30px;
            font-size: 1.1em;
            margin-top: 1em;
            transition: transform 0.3s;
        }

        .welcome-box button:hover {
            transform: scale(1.1);
            box-shadow: 10px 10px 10px black;
        }
    </style><style>
        .welcome-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
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
            max-width: 500px;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                transform: translateY(-100px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 1;
            }
        }



        .welcome-box img {
            width: 300px;
            /* height: 300px;
            object-fit: cover;
            border-radius: 50%; */
            margin: 20px auto !important;
            margin-bottom: 1em;
        }

        .welcome-box h2 {
            color: white;
            background: linear-gradient(45deg, #ff6b6b, #4834d4);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bolder;
        }

        .welcome-box p {
            color: white;
            background: linear-gradient(45deg, #ff6b6b, #4834d4);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bolder;
        }


        .welcome-box button>span {
            color: white;
            background: linear-gradient(45deg, #ff6b6b, #4834d4);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bolder;
        }

        .welcome-box button {
            background: linear-gradient(45deg, #550303, #06026b);
            border: none;
            padding: 1em 2em;
            color: white;
            border-radius: 30px;
            font-size: 1.1em;
            margin-top: 1em;
            transition: transform 0.3s;
        }

        .welcome-box button:hover {
            transform: scale(1.1);
            box-shadow: 10px 10px 10px black;
        }
    </style>
<div class="welcome-overlay">
        <div class="welcome-box">
            <img src="https://muhammad-hasan-web-developer.github.io/vscodetheme/vscode.png" alt="Welcome">
            <h2>Welcome to Visual Studio Code.</h2>
            <p>I hope you have a great time with coding!</p>
            <button id="close-welcome">
                <span>Okay</span>
            </button>
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
