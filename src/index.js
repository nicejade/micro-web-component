const template = document.createElement('template')

template.innerHTML = `
  <style>
    .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0px;
      cursor: pointer;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      color: #454545;
      opacity: 0.8;
    }
    .icon {
      fill: #454545;
    }
    .tooltip .tooltip-content {
      position: relative;
      width: 200px;
      height: 0;
      margin-top: 20px;
      padding: 20px;
      z-index: 1;
      background-color: #fefefe;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
      visibility: hidden;
      transition: .8s height;
    }
    .tooltip:hover .tooltip-content {
      height: 200px;
      visibility: visible;
    }
    .triangle {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      margin: auto;
      border: 10px solid transparent;
      border-bottom: 10px solid #fefefe;
    }
    .tooltip-content img {
      display: block;
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0;
    }
  </style>
 
  <div class="tooltip container">
    <div class="content">
      <svg t="1603470327132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="30" height="30"><path d="M932.78 512c0 232.39-188.39 420.78-420.78 420.78S91.22 744.39 91.22 512 279.61 91.22 512 91.22 932.78 279.61 932.78 512" fill="#25AF41" p-id="2475"></path><path d="M259.54 609.85A142.51 142.51 0 0 1 401.85 467.4a32.53 32.53 0 0 1 0 65.05A77.56 77.56 0 1 0 479.39 610V403.48h0.44A142.51 142.51 0 1 1 622 556.3a32.52 32.52 0 0 1 0-65 77.5 77.5 0 1 0-77.6-77.56v207h-0.4a142.44 142.44 0 0 1-284.5-10.8" fill="#FFFFFF" p-id="2476"></path></svg>
      <span class="text">微信小程序</span>
      <svg t="1603469872017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1743" width="30" height="30"><path d="M674.133333 384l-166.4 166.4L341.333333 384a41.258667 41.258667 0 0 0-59.733333 0 41.258667 41.258667 0 0 0 0 59.733333l196.266667 196.266667a41.258667 41.258667 0 0 0 59.733333 0l196.266667-196.266667A42.24 42.24 0 1 0 674.133333 384z" opacity=".8" p-id="1744"></path></svg>
    </div>
    <div class="tooltip-content">
      <div class="triangle"></div>
      <img
        src="https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1"
        alt="倾城之链"
      />
    </div>
  </div>
`

class MiniprogramEntry extends HTMLElement {
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('miniprogram-entry', MiniprogramEntry)
