export const codeSnippets = [
  {
    name: 'Button', snippets: [
      {
        htmlCode: '<button class="button-1">Button 1</button>',
        css: `
          .button-1 {
            background: #FF4742;
            border: 1px solid #FF4742;
            border-radius: 6px;
            box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            display: inline-block;
            font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
            font-size: 16px;
            font-weight: 800;
            line-height: 16px;
            min-height: 40px;
            outline: 0;
            padding: 12px 14px;
            text-align: center;
            text-rendering: geometricprecision;
            text-transform: none;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: middle;
          }

          .button-1:hover,
          .button-1:active {
            background-color: initial;
            background-position: 0 0;
            color: #FF4742;
          }

          .button-1:active {
            opacity: .5;
          }
          `
      },
      {
        htmlCode: '<button class="button-2">Button 2</button>',
        css: `
          .button-2 {
            align-items: center;
            appearance: none;
            background-color: #fff;
            border-radius: 24px;
            border-style: none;
            box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
            box-sizing: border-box;
            color: #3c4043;
            cursor: pointer;
            display: inline-flex;
            fill: currentcolor;
            font-family: "Google Sans",Roboto,Arial,sans-serif;
            font-size: 14px;
            font-weight: 500;
            height: 48px;
            justify-content: center;
            letter-spacing: .25px;
            line-height: normal;
            max-width: 100%;
            overflow: visible;
            padding: 2px 24px;
            position: relative;
            text-align: center;
            text-transform: none;
            transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: auto;
            will-change: transform,opacity;
            z-index: 0;
          }

          .button-2:hover {
            background: #F6F9FE;
            color: #174ea6;
          }

          .button-2:active {
            box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
            outline: none;
          }

          .button-2:focus {
            outline: none;
            border: 2px solid #4285f4;
          }

          .button-2:not(:disabled) {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
          }

          .button-2:not(:disabled):hover {
            box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
          }

          .button-2:not(:disabled):focus {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
          }

          .button-2:not(:disabled):active {
            box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
          }

          .button-2:disabled {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
          }
          `
      },
      {
        htmlCode: '<button class="button-3">Button 3</button>',
        css: `
          .button-3 {
            font-size: 16px;
            font-weight: 200;
            letter-spacing: 1px;
            padding: 13px 20px 13px;
            outline: 0;
            border: 1px solid black;
            cursor: pointer;
            position: relative;
            background-color: rgba(0, 0, 0, 0);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .button-3:after {
            content: "";
            background-color: #ffe54c;
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 7px;
            left: 7px;
            transition: 0.2s;
          }

          .button-3:hover:after {
            top: 0px;
            left: 0px;
          }

          @media (min-width: 768px) {
            .button-3 {
              padding: 13px 50px 13px;
            }
          }
          `
      },
      {
        htmlCode: '<button class="button-4">Button 4</button>',
        css: `
          .button-4 {
            margin: 10px;
            padding: 15px 30px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            border-radius: 10px;
            display: block;
            border: 0px;
            font-weight: 700;
            box-shadow: 0px 0px 14px -7px #f09819;
            background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .button-4:hover {
            background-position: right center;
            /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }

          .button-4:active {
            transform: scale(0.95);
          }
          `
      },
      {
        htmlCode: '<button class="button-5">Button 5</button>',
        css: `
          .button-5 {
            width: 220px;
            height: 50px;
            border: none;
            outline: none;
            color: #fff;
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
        }

        .button-5:before {
            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left:-2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
        }

        .button-5:active {
            color: #000
        }

        .button-5:active:after {
            background: transparent;
        }

        .button-5:hover:before {
            opacity: 1;
        }

        .button-5:after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #111;
            left: 0;
            top: 0;
            border-radius: 10px;
        }

        @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
        }
          `
      },
      {
        htmlCode: '<button class="button-6">Button 6</button>',
        css: `
          .button-6 {
            color: #fff;
            cursor: pointer;
            background: #e1332d;
            font-size: 16px;
            font-weight: 400;
            line-height: 45px;
            max-width: 160px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            width: 100%;
            border: 0 solid;
            box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
            outline: 1px solid;
            outline-color: rgba(255, 255, 255, .5);
            outline-offset: 0px;
            text-shadow: none;
            transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
            &:hover { text-decoration: none; }
          }

          .button-6:hover {
            border: 1px solid;
            box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
            outline-color: rgba(255, 255, 255, 0);
            outline-offset: 15px;
            text-shadow: 1px 1px 2px #427388;
          }
          `
      },

    ]
  },
  {
    name: 'Loader', snippets: [
      {
        htmlCode: '<div class="loader-1"></div>',
        css: `
          .loader-1 {
            width: 60px;
            aspect-ratio: 2;
            --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
            background:
              var(--_g) 0%   50%,
              var(--_g) 50%  50%,
              var(--_g) 100% 50%;
            background-size: calc(100%/3) 50%;
            animation: loader-1 1s infinite linear;
          }
          @keyframes loader-1 {
            20%{background-position:0%   0%, 50%  50%,100%  50%}
            40%{background-position:0% 100%, 50%   0%,100%  50%}
            60%{background-position:0%  50%, 50% 100%,100%   0%}
            80%{background-position:0%  50%, 50%  50%,100% 100%}
          }`
      },
      {
        htmlCode: '<div class="loader-2"></div>',
        css: `
          .loader-2 {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: block;
            margin:15px auto;
            position: relative;
            background: #FFF;
            box-shadow: -24px 0 #FFF, 24px 0 #FFF;
            box-sizing: border-box;
            animation: loader-2 2s linear infinite;
          }

          @keyframes loader-2 {
            30% {
              background: #FFF;
              box-shadow: -24px 0 #FF3D00, 24px 0 #FFF;
            }
            60% {
              background: #FF3D00;
              box-shadow: -24px 0 #FFF, 24px 0 #FFF;
            }
            90% {
              background: #FFF;
              box-shadow: -24px 0 #FFF, 24px 0 #FF3D00;
            }
          }`
      },
      {
        htmlCode: '<div class="loader-3"></div>',
        css: `
          .loader-3 {
            width: 8px;
            height: 40px;
            border-radius: 4px;
            display: block;
            margin: 20px auto;
            position: relative;
            background: currentColor;
            color: #FFF;
            box-sizing: border-box;
            animation: loader-3 0.3s 0.3s linear infinite alternate;
          }

          .loader-3::after, .loader-3::before {
            content: '';
            width: 8px;
            height: 40px;
            border-radius: 4px;
            background: currentColor;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            box-sizing: border-box;
            animation: loader-3 0.3s  0.45s  linear infinite alternate;
          }
          .loader-3::before {
            left: -20px;
            animation-delay: 0s;
          }

          @keyframes loader-3 {
            0%   { height: 48px}
            100% { height: 4px}
          }`
      },
      {
        htmlCode: '<div class="loader-4"></div>',
        css: `
          .loader-4 {
            width: 40px;
            height: 20px;
            --c:no-repeat radial-gradient(farthest-side, #ffffff 93%,#0000);
            background:
              var(--c) 0    0,
              var(--c) 50%  0,
              var(--c) 100% 0;
            background-size: 8px 8px;
            position: relative;
            animation: loader-4-0 1s linear infinite alternate;
          }
          .loader-4:before {
            content: "";
            position: absolute;
            width: 8px;
            height: 12px;
            background: #ffffff;
            left: 0;
            top: 0;
            animation:
              loader-4-1 1s  linear infinite alternate,
              loader-4-2 0.5s cubic-bezier(0,200,.8,200) infinite;
          }
          @keyframes loader-4-0 {
            0%      {background-position: 0  100%,50% 0   ,100% 0}
            8%,42%  {background-position: 0  0   ,50% 0   ,100% 0}
            50%     {background-position: 0  0   ,50% 100%,100% 0}
            58%,92% {background-position: 0  0   ,50% 0   ,100% 0}
            100%    {background-position: 0  0   ,50% 0   ,100% 100%}
          }
          @keyframes loader-4-1 {
            100% {left:calc(100% - 8px)}
          }
          @keyframes loader-4-2 {
            100% {top:-0.1px}
          }`
      },
      {
        htmlCode: '<div class="loader-5"></div>',
        css: `
          .loader-5 {
            width: 40px;
            height: 30px;
            --c:no-repeat linear-gradient(#ffffff 0 0);
            background:
              var(--c) 0    100%/8px 30px,
              var(--c) 50%  100%/8px 20px,
              var(--c) 100% 100%/8px 10px;
            position: relative;
            clip-path: inset(-100% 0);
          }
          .loader-5:before{
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ffffff;
            left: -16px;
            top: 0;
            animation:
              loader-5-1 2s   linear infinite,
              loader-5-2 0.5s cubic-bezier(0,200,.8,200) infinite;
          }
          @keyframes loader-5-1 {
            0%   {left:-16px;transform:translateY(-8px)}
            100% {left:calc(100% + 8px);transform:translateY(22px)}
          }
          @keyframes loader-5-2 {
            100% {top:-0.1px}
          }`
      },
      {
        htmlCode: '<div class="loader-6"></div>',
        css: `
          .loader-6 {
            width: 40px;
            height: 20px;
            --c:no-repeat radial-gradient(farthest-side, #ffffff 93%,#0000);
            background:
              var(--c) 0    0,
              var(--c) 50%  0;
            background-size: 8px 8px;
            position: relative;
            clip-path: inset(-200% -100% 0 0);
            animation: loader-6-0 1.5s linear infinite;
          }
          .loader-6:before {
            content: "";
            position: absolute;
            width: 8px;
            height: 12px;
            background: #ffffff;
            left: -16px;
            top: 0;
            animation:
              loader-6-1 1.5s linear infinite,
              loader-6-2 0.5s cubic-bezier(0,200,.8,200) infinite;
          }
          .loader-6:after {
            content: "";
            position: absolute;
            inset: 0 0 auto auto;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ffffff;
            animation: loader-6-3 1.5s linear infinite;
          }
          @keyframes loader-6-0 {
            0%,30%  {background-position: 0  0   ,50% 0   }
            33%     {background-position: 0  100%,50% 0   }
            41%,63% {background-position: 0  0   ,50% 0   }
            66%     {background-position: 0  0   ,50% 100%}
            74%,100%{background-position: 0  0   ,50% 0   }
          }
          @keyframes loader-6-1 {
            90%  {transform:translateY(0)}
            95%  {transform:translateY(15px)}
            100% {transform:translateY(15px);left:calc(100% - 8px)}
          }
          @keyframes loader-6-2 {
            100% {top:-0.1px}
          }
          @keyframes loader-6-3 {
            0%,80%,100% {transform:translate(0)}
            90%         {transform:translate(26px)}
          }`
      },
      {
        htmlCode: '<div class="loader-7"></div>',
        css: `
          .loader-7 {
            width: fit-content;
            font-weight: bold;
            font-family: monospace;
            font-size: 30px;
            clip-path: inset(0 3ch 0 0);
            animation: loader-7 1s steps(4) infinite;
          }
          .loader-7:before {
            content:"Loading...";
            font-size: 14px;
          }
          @keyframes loader-7 {to{clip-path: inset(0 -1ch 0 0)}}`
      },
      {
        htmlCode: '<div class="loader-8"></div>',
        css: `
          .loader-8 {
            color: #ffffff;
            width: 4px;
            aspect-ratio: 1;
            border-radius: 50%;
            box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
            transform: translateX(-38px);
            animation: loader-8 .5s infinite alternate linear;
          }

          @keyframes loader-8 {
            50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
            100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
          }`
      },
      {
        htmlCode: '<div class="loader-9"></div>',
        css: `
          .loader-9 {
            width: 35px;
            aspect-ratio: 1;
            --_g: no-repeat radial-gradient(farthest-side, #ffffff 94%,#0000);
            background:
              var(--_g) 0    0,
              var(--_g) 100% 0,
              var(--_g) 100% 100%,
              var(--_g) 0    100%;
            background-size: 40% 40%;
            animation: loader-9 .5s infinite;
          }
          @keyframes loader-9 {
            100% {background-position: 100% 0,100% 100%,0 100%,0 0}
          }`
      },
      {
        htmlCode: '<div class="loader-10"></div>',
        css: `
          .loader-10 {
            width: 50px;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 8px solid;
            border-color: #ffffff #0000;
            animation: loader-10 1s infinite;
          }
          @keyframes loader-10 {to{transform: rotate(.5turn)}}`
      },
      {
        htmlCode: '<div class="loader-11"></div>',
        css: `
          .loader-11 {
            width: 50px;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 8px solid lightblue;
            border-right-color: orange;
            animation: loader-11 1s infinite linear;
          }
          @keyframes loader-11 {to{transform: rotate(1turn)}}`
      },
      {
        htmlCode: '<div class="loader-12"></div>',
        css: `
          .loader-12 {
            width: 50px;
            padding: 8px;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #25b09b;
            --_m:
              conic-gradient(#0000 10%,#000),
              linear-gradient(#000 0 0) content-box;
            -webkit-mask: var(--_m);
            mask: var(--_m);
            -webkit-mask-composite: source-out;
            mask-composite: subtract;
            animation: loader-12 1s infinite linear;
          }
          @keyframes loader-12 {to{transform: rotate(1turn)}}`
      },
      {
        htmlCode: '<div class="loader-13"></div>',
        css: `
          .loader-13 {
            --d:22px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            color: #25b09b;
            box-shadow:
              calc(1*var(--d))      calc(0*var(--d))     0 0,
              calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
              calc(0*var(--d))      calc(1*var(--d))     0 2px,
              calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
              calc(-1*var(--d))     calc(0*var(--d))     0 4px,
              calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
              calc(0*var(--d))      calc(-1*var(--d))    0 6px;
            animation: loader-13 1s infinite steps(8);
          }
          @keyframes loader-13 {
            100% {transform: rotate(1turn)}
          }`
      },
      {
        htmlCode: '<div class="loader-14"></div>',
        css: `
          .loader-14 {
            width: 40px;
            height: 40px;
            --c:no-repeat linear-gradient(orange 0 0);
            background: var(--c),var(--c),var(--c),var(--c);
            background-size: 21px 21px;
            animation: loader-14 1.5s infinite cubic-bezier(0.3,1,0,1);
          }
          @keyframes loader-14 {
            0%   {background-position: 0    0,100% 0   ,100% 100%,0 100%}
            33%  {background-position: 0    0,100% 0   ,100% 100%,0 100%;width:60px;height: 60px}
            66%  {background-position: 100% 0,100% 100%,0    100%,0 0   ;width:60px;height: 60px}
            100% {background-position: 100% 0,100% 100%,0    100%,0 0   }
          }`
      },
      {
        htmlCode: '<div class="loader-15"></div>',
        css: `
          .loader-15 {
            width: 80px;
            height: 40px;
            color: #ffffff;
            border: 2px solid currentColor;
            border-right-color: transparent;
            padding: 3px;
            background:
              repeating-linear-gradient(90deg,currentColor 0 10px,#0000 0 15px)
              0/0% no-repeat content-box content-box;
            position: relative;
            box-sizing: border-box;
            animation: loader-15 2s infinite steps(6);
          }
          .loader-15::before {
            content: "";
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: 100%;
            width: 10px;
            background:
              linear-gradient(
                  #0000   calc(50% - 7px),currentColor 0 calc(50% - 5px),
                  #0000 0 calc(50% + 5px),currentColor 0 calc(50% + 7px),#0000 0) left /100% 100%,
              linear-gradient(currentColor calc(50% - 5px),#0000        0 calc(50% + 5px),currentColor 0) left /2px 100%,
              linear-gradient(#0000        calc(50% - 5px),currentColor 0 calc(50% + 5px),#0000        0) right/2px 100%;
            background-repeat:no-repeat;
          }
          @keyframes loader-15 {
            100% {background-size:120%}
          }`
      },
      {
        htmlCode: '<div class="loader-16"></div>',
        css: `
          .loader-16 {
            width: 120px;
            height: 22px;
            border-radius: 20px;
            color: #b0ffa5;
            border: 2px solid;
            position: relative;
          }
          .loader-16::before {
            content: "";
            position: absolute;
            margin: 2px;
            inset: 0 100% 0 0;
            border-radius: inherit;
            background: currentColor;
            animation: loader-16 2s infinite;
          }
          @keyframes loader-16 {
            100% {inset:0}
          }`
      },
      {
        htmlCode: '<div class="loader-17"></div>',
        css: `
          .loader-17 {
            --r1: 154%;
            --r2: 68.5%;
            width: 60px;
            aspect-ratio: 1;
            border-radius: 50%;
            background:
              radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
              radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%),
              radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
              #ccc;
            background-size: 50.5% 220%;
            background-position: -100% 0%,0% 0%,100% 0%;
            background-repeat:no-repeat;
            animation: loader-17 2s infinite linear;
          }
          @keyframes loader-17 {
            33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
            66%  {background-position: -100%  66%,0%   66% ,100% 66% }
            100% {background-position:    0% 100%,100% 100%,200% 100%}
          }`
      },
      {
        htmlCode: '<div class="loader-18"></div>',
        css: `
          .loader-18 {
            height: 60px;
            aspect-ratio: 1;
            position: relative;
          }
          .loader-18::before,
          .loader-18::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            transform-origin: bottom;
          }
          .loader-18::after {
            background:
              radial-gradient(at 75% 15%,#fffb,#0000 35%),
              radial-gradient(at 80% 40%,#0000,#0008),
              radial-gradient(circle  5px,#fff 94%,#0000),
              radial-gradient(circle 10px,#000 94%,#0000),
              linear-gradient(#F93318 0 0) top   /100% calc(50% - 5px),
              linear-gradient(#fff    0 0) bottom/100% calc(50% - 5px)
              #000;
            background-repeat: no-repeat;
            animation: loader-18 1s infinite cubic-bezier(0.5,120,0.5,-120);
          }
          .loader-18::before {
            background:#ddd;
            filter: blur(8px);
            transform: scaleY(0.4) translate(-13px, 0px);
          }
          @keyframes loader-18 {
            30%,70% {transform:rotate(0deg)}
            49.99%  {transform:rotate(0.2deg)}
            50%     {transform:rotate(-0.2deg)}
          }`
      },
      {
        htmlCode: '<div class="loader-19"></div>',
        css: `
          .loader-19 {
            width: 60px;
            aspect-ratio: 1;
            color: #ffa516;
            background:
              linear-gradient(currentColor 0 0) 100%  0,
              linear-gradient(currentColor 0 0) 0  100%;
            background-size: 50.1% 50.1%;
            background-repeat: no-repeat;
            animation:  loader-19-0 1s infinite steps(1);
          }
          .loader-19::before,
          .loader-19::after {
            content:"";
            position: absolute;
            inset: 0 50% 50% 0;
            background: currentColor;
            transform: scale(var(--s,1)) perspective(150px) rotateY(0deg);
            transform-origin: bottom right;
            animation: loader-19-1 .5s infinite linear alternate;
          }
          .loader-19::after {
            --s:-1,-1;
          }
          @keyframes loader-19-0 {
            0%  {transform: scaleX(1)  rotate(0deg)}
            50% {transform: scaleX(-1) rotate(-90deg)}
          }
          @keyframes loader-19-1 {
            49.99% {transform:scale(var(--s,1)) perspective(150px) rotateX(-90deg) ;filter:grayscale(0)}
            50%    {transform:scale(var(--s,1)) perspective(150px) rotateX(-90deg) ;filter:grayscale(0.8)}
            100%   {transform:scale(var(--s,1)) perspective(150px) rotateX(-180deg);filter:grayscale(0.8)}
          }`
      },
      {
        htmlCode: '<div class="loader-20"></div>',
        css: `
          .loader-20 {
            display: inline-flex;
            gap: 10px;
          }
          .loader-20:before,
          .loader-20:after {
            content: "";
            height: 20px;
            aspect-ratio: 1;
            border-radius: 50%;
            background:
              radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
              #fff;
            transform: scaleX(var(--s,1)) rotate(0deg);
            animation: loader-20 1s infinite linear;
          }
          .loader-20:after {
            --s: -1;
            animation-delay:-0.1s;
          }
          @keyframes loader-20 {
            100% {transform:scaleX(var(--s,1)) rotate(360deg);}
          }`
      },
      {
        htmlCode: '<div class="loader-21"></div>',
        css: `
          `
      },

    ]
  }
];
