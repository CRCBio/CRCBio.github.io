define("@widget/LAYOUT/bs-layout10-Theme-publish-Theme-6815f8ef.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-index3","~/c/bs-themeOverrides","~/c/bs-boldOutline","~/c/bs-defaultSocialIconPack","~/c/bs-loaders","~/c/bs-overlayTypes","~/c/bs-index"],(function(e,t,r,o,a,n,s,l,i){"use strict";const{colorPackCategories:g,buttons:c}=(global.Core||guac["@wsb/guac-widget-core"]).constants,{LIGHT:d,LIGHT_ALT:u,LIGHT_COLORFUL:p,DARK:m,DARK_ALT:h,DARK_COLORFUL:y,COLORFUL:f}=(global.Core||guac["@wsb/guac-widget-core"]).constants.paintJobs,b={[l.F]:"accent-overlay",[l.b]:"accent-overlay",[l.I]:"category-alt-solid",[l.B]:"accent-overlay",[l.L]:"accent-overlay"},S={defaultHeaderTreatment:l.F,imageTreatments:b};var T={id:"layout10",name:"slate",packs:{color:"#008390",font:"archivo-black"},logo:{font:"primary"},packCategories:{color:g.ACCENT},headerProperties:{alignmentOption:"center"},headerTreatmentsConfig:S,showSlideshowTab:!0,hasNavWithBackground:!0,paintJobs:[d,u,p,f,y,h,m],defaultPaintJob:h,buttons:{primary:{fill:c.fills.SOLID,shape:c.shapes.SQUARE,decoration:c.decorations.NONE,shadow:c.shadows.NONE,color:c.colors.PRIMARY},secondary:{fill:c.fills.SOLID,decoration:c.decorations.NONE,shadow:c.shadows.NONE,color:c.colors.PRIMARY},...i.C}};class v extends r.D{static get displayName(){return"Theme10"}static getMutatorDefaultProps(e,t){const r=super.getMutatorDefaultProps(e,t),o=i.W[t]||r.enableCircularImage;return"HEADER"===e?{...r,hasLogoAlign:!0,showOverlayOpacityControls:!0,enableVideoOverlaySlider:!0,useSlideshow:!0,headerTreatmentsConfig:{...r.headerTreatmentsConfig,imageTreatments:{[l.F]:"accent-overlay",[l.b]:"accent-overlay",[l.I]:"category-alt-solid",[l.B]:"accent-overlay",[l.L]:"accent-overlay"}}}:{...r,enableCircularImage:o}}constructor(){super(),this.mappedValues={...this.mappedValues,typographyOverrides:{LogoAlpha:{style:{font:"primary",color:"highContrast",fontSize:"large",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingBeta:{style:{font:"primary",color:"highlight",fontSize:"xxlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingGamma:{style:{font:"alternate",color:"highlight",fontSize:"xlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},NavAlpha:{style:{font:"alternate",color:"highContrast",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"uppercase"}},SubNavAlpha:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},NavBeta:{style:{font:"alternate",color:"highContrast",fontSize:"large",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},SubNavBeta:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},ButtonAlpha:{style:{font:"alternate",fontWeight:"bold",letterSpacing:"1px",textTransform:"uppercase"}}}}}getSection(e){return"default"===e?"alt":"overlay"===e?"overlay":"default"}Heading(e){const{tag:t,level:o}=e,a={5:"DetailsAlpha"}[r.l({tag:t,level:o})];return super.Heading(this.merge({typography:a},e))}Input(e){const{section:t}=e;return super.Input(this.merge({section:this.getSection(t||this.base.section),style:{borderBottomWidth:0,paddingBottom:"small",backgroundColor:"section",borderColor:"input",paddingHorizontal:"small",paddingTop:"small",borderRadius:"0",borderStyle:"solid"}},e))}NavLinkActive(e){return super.NavLinkActive(this.merge({style:{borderBottomStyle:"solid",borderWidth:"1px",paddingBottom:"2px",marginBottom:"-3px"}},e))}Icon(e){return super.Icon(this.merge({iconPack:{...a.b,...n.s}},e))}Loader(e){return s.C.apply(this,[e])}SectionHeading(e){const{layout:t="full"}=e,r=this.base,a=this.merge({},o.s(r),o.a(r));return super.SectionHeading(this.merge({style:{textAlign:"center","@md":{textAlign:"full"===t?"center":"left"}}},a,e))}Pipe(e){return super.Pipe(this.merge({style:{backgroundColor:"sectionLowContrast"}},e))}InputTextArea(e){return super.InputTextArea(this.merge({rows:5},e))}InputSelect(e){const{section:t}=e;return super.InputSelect(this.merge({section:this.getSection(t||this.base.section),style:{backgroundColor:"section",borderColor:"input",borderBottomWidth:"medium",borderStyle:"solid",borderRadius:"none","@xs-only":{fontSize:"medium"}}},e))}InputSelectElement(e){return super.InputSelectElement(this.merge({style:{paddingHorizontal:"small",paddingTop:"small",paddingBottom:"11px","@xs-only":{fontSize:"medium"}}},e))}Table(e){return super.Table(this.merge({style:{borderRadius:0}},e))}MediaObjectBackground(e){return super.MediaObjectBackground(this.merge({style:{borderRadius:"0px"}},e))}HeadingMajor(e){return super.HeadingMajor(this.merge({typography:"HeadingBeta",featured:!0},e))}NavFooterLink(e){return super.NavFooterLink(this.merge({typography:"LinkAlpha"},e))}Tagline(e){return super.Tagline(this.merge({style:{wordWrap:"break-word",overflowWrap:"break-word","@xs-only":{maxWidth:"100%",margin:"0 auto"}}},e))}HeroText(e){return super.SubTagline(this.merge({style:{lineHeight:"1.5"}},e))}Intro(e){return super.Intro(this.merge({alignment:"center"},e))}ImageLogo(e){return!1===e.hasOverhang?super.ImageLogo(e):super.ImageLogo(this.merge({style:{"@xs-only":{marginTop:"medium"},"@sm-only":{marginTop:"medium"}}},e))}Phone(e){const{logoOverhangHeight:t}=e;return 0===t?super.Phone(e):super.Phone(this.merge({style:{"@xs-only":{paddingTop:"medium"},"@sm-only":{paddingTop:"medium"}}},e))}ContentCard(e){const t="about1"===this.base.widgetPreset?{style:{alignItems:"center"}}:{};return super.ContentCard(this.merge(t,e))}SearchPopout(e){let{section:t,...r}=e;return super.SearchPopout(this.merge({section:"alt"===t?"default":"alt",style:{borderStyle:"none"}},r))}}t._(v,"config",T),e.default=v,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-layout10-Theme-publish-Theme-6815f8ef.js.map
