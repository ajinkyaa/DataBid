// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export function fetchData() {
//   let data = []
//   const client = Stomp.client("ws://localhost:8011/stomp")
// 	global.DEBUG = false
// 	client.debug = function(msg) {
// 		if (global.DEBUG) {
// 			console.info(msg)
// 		}
// 	}
// 	client.connect({}, 
// 			client.subscribe('/fx/prices', function(body, headers) {
// 			    var dataObj = JSON.parse(body.body)
//   				data.push(dataObj)
// 	    }))
//   return {
//     type: RECEIVE_POSTS,
//     posts: data.map(child => child.data)
//   } 
// }

// function showData(text) {
//   return {
//     type: 'SHOW_DATA',
//     id: 10,
//     label: 'list-item-10'
//   }
}
