import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	width: 100vw;
	height: 100vh;
	background-color: #333333;
	display: flex;
	justify-content: center;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



  //-----------------------------------------------------------------------------


a{
    text-decoration: none;
}

body{
     background: rgb(51,51,51);
background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(70,70,70,1) 100%); 
	font-family: 'Lato', sans-serif;
}

*{ 
	box-sizing: border-box;
    margin: 0;

    //fonts
    //font-family: 'Oswald', sans-serif;
    //font-family: 'Passion One', cursive;
    font-family: 'Lato', sans-serif;
}
`;
export default GlobalStyles;
