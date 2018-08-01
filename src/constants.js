export const CSS_PROPERTIES = {
  display: 'display',
  width: 'width',
  minWidth: 'min-width',
  maxWidth: 'max-width',
  height: 'height',
  minHeight: 'min-height',
  maxHeight: 'max-height',
  filter: 'filter',
  position: 'position',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',

  color: 'color',
  cursor: 'cursor',

  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  backfaceVisibility: 'backface-visibility',

  /* border */
  border: 'border',
  borderTop: 'border-top',
  borderRight: 'border-right',
  borderBottom: 'border-bottom',
  borderLeft: 'border-left',
  borderTopWidth: 'border-top-width',
  borderTopStyle: 'border-top-style',
  borderTopColor: 'border-top-color',
  borderRightWidth: 'border-right-width',
  borderRightStyle: 'border-right-style',
  borderRightColor: 'border-right-color',
  borderBottomWidth: 'border-bottom-width',
  borderBottomtStyle: 'border-bottom-style',
  borderBottomColor: 'border-bottom-color',
  borderLeftWidth: 'border-left-width',
  borderLeftStyle: 'border-left-style',
  borderLeftColor: 'border-left-color',
  borderRadius: 'border-radius',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightradius: 'border-top-right-radius',
  borderBottomRightRadius: 'border-top-right-radius',
  borderBottomLeftRadius: 'border-bottom-left-radius',

  /* background */
  background: 'background',
  backgroundColor: 'background-color',
  backgroundImage: 'background-image',
  backgroundRepeat: 'background-repeat',
  backgroundPosition: 'background-position',
  backgroundAttachment: 'background-attachment',
  backgroundBlendMode: 'background-blend-mode',
  backgroundClip: 'background-clip',
  backgroundOrigin: 'background-origin',
  backgroundSize: 'background-size',

  boxShadow: 'box-shadow',
  boxSizing: 'box-sizing',

  clip: 'clip',
  columnsCount: 'column-count',
  columnsFill: 'column-fill',
  columnsGap: 'column-gap',
  columnsRule: 'column-rule',
  columnsRuleColor: 'column-rule-color',
  columnsRuleStyle: 'column-rule-style',
  columnsRuleWidth: 'column-rule-width',
  columnsSpan: 'column-span',
  columnsWidth: 'column-width',
  columns: 'columns',

  animation: 'animation',
  animationDelay: 'animation-delay',
  animationDirection: 'animation-direction',
  animationDuration: 'animation-duration',
  animationFillMode: 'animation-fill-mode',
  animationIterationCount: 'animation-iteration-count',
  animationName: 'animation-name',
  animationPlayState: 'animation-play-state',
  animationTimingFunction: 'animation-timing-function',

  transform: 'transform',
  transformOrigin: 'transform-origin',
  transformStyle: 'transform-style',

  transition: 'transition',
  transitionDelay: 'transition-delay',
  transitionDuration: 'transition-duration',
  transitionProperty: 'transition-property',
  transitionTimingFunction: 'transition-timing-function',

  mixBlendMode: 'mix-blend-mode',
  objectFit: 'object-fit',
  objectPosition: 'object-position',

  opacity: 'opacity',
  userSelect: 'user-select',
  verticalAlign: 'vertical-align',
  visibility: 'visibility',
  whiteSpace: 'white-space',
  wordBreak: 'word-break',
  wordSpacing: 'word-spacing',
  wordWrap: 'word-wrap',
  zIndex: 'z-index',

  font: 'font',
  fontFamily: 'font-family',
  fontKerning: 'font-kerning',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  textAlign: 'text-align',
  textAlignLast: 'text-align-last',
  textDecoration: 'text-decoration',
  textDecorationColor: 'text-decoration-color',
  textDecorationLine: 'text-decoration-line',
  textDecorationText: 'text-decoration-style',
  textIndent: 'text-indent',
  textJustify: 'text-justify',
  textOverflow: 'text-overflow',
  textShadow: 'text-shadow',
  textTransform: 'text-transform',

  flex: 'flex',
  flexDirection: 'flex-direction',
  flexFlow: 'flex-flow',
  flexWrap: 'flex-wrap',
  flexBasis: 'flex-basis',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  alignItems: 'align-items',
  alignContent: 'align-content',
  alignSelf: 'align-self',
  justifyContent: 'justify-content',
  justifySelf: 'justify-self',
  order: 'order',

  gridTemplateRows: 'grid-template-rows',
  gridTemplateColumns: 'grid-template-columns',
  gridTemplate: 'grid-template',
  gridRowGap: 'grid-row-gap',
  gridColumnGap: 'grid-column-gap',
  gridGap: 'grid-gap',
  gridAreas: 'grid-template-areas',
  gridTemplateAreas: 'grid-template-areas',

  justifyItems: 'justify-items',
  placeItems: 'place-items',
  placeContent: 'place-content',

  gridAutoRows: 'grid-auto-rows',
  gridAutoColumns: 'grid-auto-columns',
  gridAutoFlow: 'grid-auto-flow',
  gridFlow: 'grid-auto-flow',
  grid: 'grid',

  gridColumnStart: 'grid-column-start',
  gridColumnEnd: 'grid-column-end',
  gridRowStart: 'grid-row-start',
  gridRowEnd: 'grid-row-end',
  gridColumn: 'grid-column',
  gridRow: 'grid-row',
  gridArea: 'grid-area',
  placeSelf: 'place-self',

  margin: 'margin',
  marginBottom: 'margin-bottom',
  marginTop: 'margin-top',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',

  padding: 'padding',
  paddingBottom: 'padding-bottom',
  paddingTop: 'padding-top',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
}

export const BREAKPOINTS = {
  sm: { min: 576 },
  md: { min: 768 },
  lg: { min: 992 },
  xl: { min: 1200 },
  'only-xs': { max: 575 },
  'only-sm': { min: 576, max: 767 },
  'only-md': { min: 768, max: 991 },
  'only-lg': { min: 992, max: 1199 },
}
