/**
* Add multiples "Event Listener" to an element
* @param {Node} element HTML Element
* @param {String} events All the events you want separated by a space
* @param {Object} fn The function you wanna execute to all these events
*/
const addEventListenerAll = (element, events, fn) => { // Function
	events.split(' ').forEach(event => {
		element.addEventListener(event, fn)
	})
}