import{_ as r,r as n,o as c,c as l,f as u,a as e,d as t,b as a,w as h,e as s}from"./app-sKDtX2xl.js";const p={},b=e("h1",{id:"trigger-state",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#trigger-state","aria-hidden":"true"},"#"),t(" Trigger: state")],-1),g=e("p",null,[t("Much like the "),e("code",null,"State Changed Node"),t(" however, provides some advanced functionality around common automation use cases.")],-1),f=e("p",null,[t("An advanced version of the "),e("code",null,"server:state-changed"),t(" node")],-1),_=e("h2",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),t(" Configuration")],-1),m={id:"entity-id",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#entity-id","aria-hidden":"true"},"#",-1),x=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"string")])],-1),k=e("p",null,"The id of an entity to use for the comparison.",-1),q=e("p",null,[t("Custom ids can be inserted into the list by adding a "),e("code",null,"#"),t(" at the end of the id")],-1),T={id:"entity-id-filter-types",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#entity-id-filter-types","aria-hidden":"true"},"#",-1),w=s('<ul><li>Type: <code>string</code></li><li>Values: <code>exact|list|substring|regex</code></li><li>Default: <code>exact</code></li></ul><h3 id="state-type" tabindex="-1"><a class="header-anchor" href="#state-type" aria-hidden="true">#</a> State Type</h3><ul><li>Type: <code>string</code></li><li>Values: <code>string|number|boolean</code></li><li>Default: <code>string</code></li></ul><p>Convert the state of the entity to the selected type. Boolean will be converted to true based on if the string is equal by default to (<code>y|yes|true|on|home|open</code>). Original value stored in msg.data.original_state</p><h3 id="conditions" tabindex="-1"><a class="header-anchor" href="#conditions" aria-hidden="true">#</a> Conditions</h3><p>This node has two default outputs &quot;allowed&quot; and &quot;blocked&quot;. If all the conditions are true the default message will be sent to the &quot;allowed&quot; output otherwise, it will be sent to the &quot;blocked&quot; output.</p><p><strong>See Also:</strong></p>',7),E=s(`<h3 id="custom-outputs" tabindex="-1"><a class="header-anchor" href="#custom-outputs" aria-hidden="true">#</a> Custom Outputs</h3><p>All the above conditions need to be true for any custom outputs to be sent, having zero conditions is a valid option. Each custom output can send the default message or a custom message. Also, each one can have its constraint on whether or not to be sent.</p><h3 id="output-on-connect" tabindex="-1"><a class="header-anchor" href="#output-on-connect" aria-hidden="true">#</a> Output on connect</h3><ul><li>Type: <code>boolean</code></li></ul><p>Output once on startup/deployment.</p><h3 id="enable-input" tabindex="-1"><a class="header-anchor" href="#enable-input" aria-hidden="true">#</a> Enable input</h3><ul><li>Type: <code>boolean</code></li></ul><p>Enable the input to be used to send a message to the node.</p><h3 id="output-debug-information" tabindex="-1"><a class="header-anchor" href="#output-debug-information" aria-hidden="true">#</a> Output debug information</h3><ul><li>Type: <code>boolean</code></li></ul><p>Output debug information to the debug tab.</p><h3 id="expose-to-home-assistant" tabindex="-1"><a class="header-anchor" href="#expose-to-home-assistant" aria-hidden="true">#</a> Expose to Home Assistant</h3><ul><li>Type: <code>boolean</code></li></ul><p>Expose the node to Home Assistant.</p><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>Input is disabled by default. It can be enabled using the <code>Enable Input</code> option. Input can be used to <a href="#enable-disable">enable/disable</a> the node or for <a href="#testing">testing</a>.</p><h3 id="enable-disable" tabindex="-1"><a class="header-anchor" href="#enable-disable" aria-hidden="true">#</a> Enable / Disable</h3><ul><li>Type: <code>string</code></li></ul><p>If the incoming payload or message is a string and equal to <code>enable</code> or <code>disable</code> then set the node accordingly. Saves over restarts.</p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><h3 id="topic" tabindex="-1"><a class="header-anchor" href="#topic" aria-hidden="true">#</a> topic</h3><ul><li>Type: <code>string</code></li></ul><p>The entity_id that triggered the node</p><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> payload</h3><ul><li>Type: <code>string</code></li></ul><p>The state as sent by home assistant</p><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><ul><li>Type: <code>object</code></li></ul><p>The original home assistant event containing <code>entity_id</code> <code>new_state</code> and <code>old_state</code> properties</p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>To test automation without having to manually change the state in home assistant send an input <code>payload</code> as an object which contains <code>entity_id</code>, <code>new_state</code>, and <code>old_state</code> properties. This will trigger the node as if the event came from Home Assistant.</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;entity_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_entity&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;old_state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;new_state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,33),I={href:"https://home-assistant.io/docs/configuration/state_object",target:"_blank",rel:"noopener noreferrer"};function C(O,A){const o=n("Badge"),i=n("RouterLink"),d=n("ExternalLinkIcon");return c(),l("div",null,[b,g,f,u(" TODO: Needs a total rework "),_,e("h3",m,[y,t(" Entity ID "),a(o,{text:"required"})]),x,k,q,e("h3",T,[v,t(" Entity ID Filter Types "),a(o,{text:"required"})]),w,e("ul",null,[e("li",null,[a(i,{to:"/guide/conditionals.html"},{default:h(()=>[t("Conditionals")]),_:1})])]),E,e("ul",null,[e("li",null,[e("a",I,[t("HA State Object"),a(d)])])])])}const N=r(p,[["render",C],["__file","trigger-state.html.vue"]]);export{N as default};
