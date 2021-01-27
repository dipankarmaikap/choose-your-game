<script>
  export let opacity;
</script>

<div
  class="game bg-dark-100 bg-opacity-50 rounded-xl p-4 {opacity
    ? opacity
    : ''} "
>
  <div class="top-hero h-28 relative flex items-center overflow-hidden">
    <div class="flex justify-between items-center">
      <div class="name flex items-center space-x-4">
        <div class="w-16 h-16 bg-dark-100 rounded-lg overflow-hidden">
          <img
            class="w-full h-full"
            src="https://secure.gravatar.com/avatar/507759c0bf9bcedece3952d0b3e87348?s=100&d=monsterid&r=g"
            alt=""
          />
        </div>
        <div class="content">
          <p class="text-gray-500 text-sm  uppercase">Fighting game</p>
          <p class="text-xl font-medium">Super Smash Bros. Ultimate</p>
        </div>
      </div>
      <div class="img absolute  top-0 right-0  ">
        <img class="w-32" src="./video-games-clipart_344384.png" alt="" />
      </div>
    </div>
  </div>
  <div class="actions flex flex-col space-y-3">
    <div class="bg-dark-300 rounded-lg p-2 flex justify-between items-center">
      <div class="left flex items-center space-x-4 text-lg">
        <span
          ><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.64">
              <rect
                x="4.78391"
                y="0.814889"
                width="2.60553"
                height="4.87347"
                rx="1.30277"
                stroke="#798694"
                stroke-width="1.36336"
              />
              <rect
                x="11.0204"
                y="0.814889"
                width="2.60553"
                height="4.87347"
                rx="1.30277"
                stroke="#798694"
                stroke-width="1.36336"
              />
              <path
                d="M4.66906 2.96814H3.53509C2.28254 2.96814 1.26715 3.98353 1.26715 5.23608V14.8748C1.26715 16.1274 2.28254 17.1427 3.53509 17.1427H14.8748C16.1273 17.1427 17.1427 16.1274 17.1427 14.8748V5.23608C17.1427 3.98353 16.1273 2.96814 14.8748 2.96814H13.7408M7.50398 2.96814H9.20493H10.9059"
                stroke="#798694"
                stroke-width="1.36336"
              />
              <path
                d="M4.66852 10.3976H6.988"
                stroke="#798694"
                stroke-width="1.36336"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
              <path
                d="M11.627 10.3976H13.9464"
                stroke="#798694"
                stroke-width="1.36336"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
            </g>
          </svg>
        </span>
        <p>Live 1:1 Session</p>
      </div>
      <div class="right flex space-x-4">
        <button class=" bg-blue-900 rounded px-4 bg-opacity-30 text-gray-400">
          $<span class="font-semibold text-white">80</span>
          / hour
        </button>
        <button
          class="bg-dark-100 w-9 h-9 rounded flex items-center justify-center"
        >
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49695 6C5.75929 6 5.98502 5.90323 6.18636 5.71537L10.756 1.34345C10.9146 1.19545 11 1.01328 11 0.796964C11 0.352941 10.6217 0 10.152 0C9.92013 0 9.7005 0.085389 9.52967 0.244782L5.50305 4.11575L1.47033 0.244782C1.2995 0.0910816 1.08597 0 0.848031 0C0.378258 0 0 0.352941 0 0.796964C0 1.01328 0.0854132 1.19545 0.244038 1.34915L4.81364 5.71537C5.02718 5.90892 5.24071 6 5.49695 6Z"
              fill="#798694"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="bg-dark-300 rounded-lg p-2 flex justify-between items-center">
      <div class="left flex items-center space-x-4 text-lg">
        <span
          ><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.64">
              <rect
                x="4.78391"
                y="0.814889"
                width="2.60553"
                height="4.87347"
                rx="1.30277"
                stroke="#798694"
                stroke-width="1.36336"
              />
              <rect
                x="11.0204"
                y="0.814889"
                width="2.60553"
                height="4.87347"
                rx="1.30277"
                stroke="#798694"
                stroke-width="1.36336"
              />
              <path
                d="M4.66906 2.96814H3.53509C2.28254 2.96814 1.26715 3.98353 1.26715 5.23608V14.8748C1.26715 16.1274 2.28254 17.1427 3.53509 17.1427H14.8748C16.1273 17.1427 17.1427 16.1274 17.1427 14.8748V5.23608C17.1427 3.98353 16.1273 2.96814 14.8748 2.96814H13.7408M7.50398 2.96814H9.20493H10.9059"
                stroke="#798694"
                stroke-width="1.36336"
              />
              <path
                d="M4.66852 10.3976H6.988"
                stroke="#798694"
                stroke-width="1.36336"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
              <path
                d="M11.627 10.3976H13.9464"
                stroke="#798694"
                stroke-width="1.36336"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
            </g>
          </svg>
        </span>
        <p>Replay Reviews</p>
      </div>
      <div class="right flex space-x-4">
        <button class=" bg-blue-900 rounded px-4 bg-opacity-30 text-gray-400">
          $<span class="font-semibold text-white">25</span>
          / hour
        </button>
        <button
          class="bg-dark-100 w-9 h-9 rounded flex items-center justify-center"
        >
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49695 6C5.75929 6 5.98502 5.90323 6.18636 5.71537L10.756 1.34345C10.9146 1.19545 11 1.01328 11 0.796964C11 0.352941 10.6217 0 10.152 0C9.92013 0 9.7005 0.085389 9.52967 0.244782L5.50305 4.11575L1.47033 0.244782C1.2995 0.0910816 1.08597 0 0.848031 0C0.378258 0 0 0.352941 0 0.796964C0 1.01328 0.0854132 1.19545 0.244038 1.34915L4.81364 5.71537C5.02718 5.90892 5.24071 6 5.49695 6Z"
              fill="#798694"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
