import{_ as e,o as t,c as a,e as o}from"./app-sKDtX2xl.js";const c={},s=o('<h1 id="mustache-templates" tabindex="-1"><a class="header-anchor" href="#mustache-templates" aria-hidden="true">#</a> Mustache Templates</h1><p>When using templates the top level is a property of the message object: <code>msg.payload</code> would be <code>{{payload}}</code>.</p><p>You can access flow, global, and states contexts <code>{{flow.foobar}}</code> <code>{{global.something}}</code>. For the <code>states</code> context you can use <code>{{entity.domain.entity_id}}</code> to get the state or drill further down <code>{{entity.light.kitchen.attributes.friendly_name}}</code>.</p><ul><li><code>{{entity.light.kitchen}}</code> and <code>{{entity.light.kitchen.state}}</code> are equivalent</li></ul><p>By default, Mustache will replace certain characters with their HTML escape codes. To stop this happening, you can use triple braces: <code>{{{payload}}}</code>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Mustache templates work well with strings but if you&#39;re trying to insert a JSON object somewhere you&#39;re better off using a JSONata expression or doing with a function node and passing it in as an input.</p></div>',6),n=[s];function i(d,l){return t(),a("div",null,n)}const h=e(c,[["render",i],["__file","mustache-templates.html.vue"]]);export{h as default};
