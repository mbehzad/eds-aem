import{x as t,j as n}from"../__chunks__/icon.ocmyz8CZ.js";function r(e,o){var s;return((s=e.children[o].textContent)==null?void 0:s.trim())??""}const l=(e,o)=>t`<icon-component
    class="icon-component${""}"
    name="${e}"
  ></icon-component>`,c=e=>{for(;e.firstChild;)e.removeChild(e.firstChild);e.style.removeProperty("display")},i=({message:e})=>t`<div class="container">
    <div class="hello-world">
      <h1>Hello, World!</h1>
      <p>Welcome to your first EDS Block. ${l("rocket-lunch")}</p>
      <p class="message">This message comes from your block: ${e}</p>
    </div>
  </div>`;function m(e){const o={message:r(e,0)};c(e),n(i(o),e)}export{m as default};
//# sourceMappingURL=hello-world.js.map
