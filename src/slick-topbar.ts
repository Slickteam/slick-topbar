import {LitElement, html, css} from 'lit-element'

/**
 * Slick Topbar
 *
 * @csspart Topbar - The topbar
 */
export class SlickTopBar extends LitElement {
    /**
     *
     * @private
     *
     * An attribute to hide the title
     */
    private readonly hideTitle : boolean;
    /**
     *
     * @private
     *
     * A property to modify the title's content
     */
    private readonly titleContent : string;
    /**
     *
     * @private
     *
     * A property to hide the logo
     */
    private readonly hideLogo : boolean;
    /**
     *
     * @private
     *
     * A property to define the path of the image we want to have next to the clickable burger
     */
    private readonly imgSrc : string;
    /**
     *
     * @private
     *
     * A property to change the text's color
     */
    private readonly color : string;
    /**
     *
     * @private
     *
     * A property to change the background's color
     */
    private readonly backgroundColor : string;

    // @ts-ignore
    static get styles() {
        return css`
      * {
        
      }
      
      .light {
        background: #FFF;
      }
      
      .dark {
        background: #101010;
      }
      
      header{
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: flex;
      }
      
      div{
        margin: 0;
        padding: 0;
        display: flex;
      }
      
      span{
        margin: 0;
        padding: 0;
        display: flex;
      }
      
      button{
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: flex;
      }
      
      .header {
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0px;
        left: 0px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
      
      .vertical-align {
        align-items: center;
      }
      
      .spacer {
        display: flex;
        padding: 10px 25px;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
      }
      
      .right {
        justify-content: flex-end;
      }
      
      .h-16 {
        height: 50px;
      }
      
      .h-12 {
        height: 30px;      
      }
      
      .button {
        background-color: transparent;
        border: none;
        outline:none;
        margin: 0 10px 0 0  
      }
      
      button:hover {
        cursor: pointer
      }
    `
    }

    // @ts-ignore
    static get properties() {
        return {
            hideTitle: { type: Boolean },
            titleContent: { type: String },
            hideLogo: { type: Boolean },
            imgSrc: { type: String },
            color: { type: String },
            backgroundColor: { type: String }
        }
    }

    constructor() {
        super()
        this.hideTitle = false;
        this.titleContent = 'Portail partners';
        this.hideLogo = false;
        this.imgSrc = '';
        this.color = '#d75e01';
        this.backgroundColor = '#FFF';
    }

    _drawer() {
        const event = new Event('slick-burger')
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <header style="color: ${this.color}; background: ${this.backgroundColor};" class="header">
                <div class="spacer">
                                <span class="vertical-align">
                                  <button @click=${this._drawer} style="color: ${this.color};" class="button">
                                    <svg class="h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                  </button>
                                  ${ this.hideLogo ?
                                          html`` :
                                          html`
                                              <div>
                                                  <img class="h-16" src="${this.imgSrc}" alt="The logo you want to display">
                                              </div>
                                          `}
                                </span>
                    ${this.hideTitle ?
                            html`` :
                            html`
                                <span class="vertical-align">
                                    ${ this.titleContent }
                                </span>
                            `
                    }

                </div>
            </header>
        `;
    }
}

window.customElements.define('slick-topbar', SlickTopBar);
