import { html } from 'lit-html';
import './my-element';

export default {
    title: 'SlickTopbar',
    component: 'slick-topbar',
    argTypes: {
        hideTitle: { control: 'boolean' },
        titleContent: { control: 'text' },
        hideLogo: { control: 'boolean' },
        imgSource: { control: 'text' },
        color: {control: 'text'},
        backgroundColor: {control: 'text'},
        onClick: { action: 'onClick' }
    },
};

function Template({
                      hideTitle= false,
                      titleContent = 'A TITLE',
                      hideLogo = false,
                      imgSource = '',
                      color = '#F97316',
                      backgroundColor = '#FFF',
                  }) {
    return html`
        <slick-topbar
                .hideTitle=${hideTitle}
                .titleContent=${titleContent}
                .hideLogo=${hideLogo}
                .imgSource=${imgSource}
                .color=${color}
                .backgroundColor=${backgroundColor}
        ></slick-topbar>
    `;
}

export const Regular = Template.bind({});
