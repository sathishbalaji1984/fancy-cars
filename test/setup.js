// import { JSDOM } from 'jsdom';
// import chai from 'chai';
// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';
//
// global.dom = new JSDOM();
// global.document = new JSDOM().window;
// const exposedProperties = ['window', 'navigator', 'document'];
// Object.keys(global.window).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = global.window[property];
//   }
// });
//
// configure({ adapter: new Adapter(), disableLifecycleMethods: true });


import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import jsdom from 'jsdom'

function setUpDomEnvironment() {
    const { JSDOM } = jsdom;
    const dom = new JSDOM('');
    const { window } = dom;

    global.window = window;
    global.document = window.document;
    global.navigator = {
        userAgent: 'node.js',
    };
    copyProps(window, global);
}

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
}

setUpDomEnvironment();

configure({ adapter: new Adapter() })
