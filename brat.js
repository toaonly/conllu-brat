import * as jQuery from './lib/jquery.min'
import * as jQuerySVG from './lib/jquery.svg.min'
import * as jquerySVGDom from './lib/jquery.svgdom.min'

// brat helper modules
import Configuration from './src/configuration'
import Util from './src/util'
import AnnotationLog from './src/annotation_log'

// brat modules
import Dispatcher from './src/dispatcher'
import URLMonitor from './src/url_monitor'
import Visualizer from './src/visualizer'

// import './static/fonts/Astloch-Bold.ttf'
// import './static/fonts/PT_Sans-Caption-Web-Regular.ttf'
// import './static/fonts/Liberation_Sans-Regular.ttf'
// import './style-vis.css'

export default {
  Configuration,
  Util,
  AnnotationLog,
  Dispatcher,
  URLMonitor,
  Visualizer
}
