// export function connectCallback() {
//   let data = []
//   const client = Stomp.client("ws://localhost:8011/stomp")
// 	global.DEBUG = false
// 	client.debug = function(msg) {
// 		if (global.DEBUG) {
// 			console.info(msg)
// 		}
// 	}
// 	function onMessage() {
//       console.log(message)
//       // var dataObj = JSON.parse(message.body)
//       // data.push(dataObj)
// 	}
		
// 		client.connect({}, client.subscribe('/fx/prices',onMessage()), function(error) {
// 			alert(error.headers.message)
// 		})
//   return data
// }