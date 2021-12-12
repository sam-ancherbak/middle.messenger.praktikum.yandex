const buttonTemplate: string = `
    <button 
        class='{{class}}'
        {{#if type}}
            type='{{type}}'
        {{/if}}>
        {{text}}
        </button>
`

export default buttonTemplate;
