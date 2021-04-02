import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #ffffff;

}

body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
}

button {
    cursor:  pointer;
}

`
