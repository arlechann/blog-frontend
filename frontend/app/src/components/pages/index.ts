export class IndexPage extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = '<h1>Hello World!</h1>';
  }
}