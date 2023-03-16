const theme = {
    color:{
        primaryColor:'red',
        secondaryColor:'#00848A',
    },
    text:{
        primaryColor:'#484848',
        secondaryColor:'#222'
    },
    mixin:{
        boxShadow:`
        transition:box-shadow 0.5s ease;

        &:hover {
            box-shadow:0 2px 4px rgba(0,0,0,.18)
        }
        `
    }
}

export default theme