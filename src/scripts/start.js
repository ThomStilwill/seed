import  * as header  from './header'
import  * as nav  from './nav'

console.log('start');
header.load();

let navconfig = [{name:'Menu A',href:'#'},{name: 'Menu B',href:'#'},{name: 'Menu B',href:'#'}];
nav.load(navconfig);
