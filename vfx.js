
import { VFX } from "@vfx-js/core";
window.addEventListener("DOMContentLoaded", () => {
 const glyph = document.querySelector(".glyphA");
 if (!glyph) {
   console.error("❌ .glyphA introuvable !");
   return;
 }
 const vfx = new VFX();
 vfx.add(glyph, {
   shader: "glitch",
   overflow: 100
 });
 console.log("✅ VFX appliqué au glyphe !");
});