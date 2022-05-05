import { IndexPage } from "./components/pages/index.js";

customElements.define('index-page', IndexPage);

const root = document.getElementById('app');
console.log(new IndexPage);
root?.appendChild(new IndexPage);
