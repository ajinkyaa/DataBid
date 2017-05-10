import ReactDOM from 'react-dom';
import React from 'react';

class ItemList extends React.Component {
	constructor(props) {
       super(props)
       this.state = {
            items: []
        };
       this.state = {
        wtf: 'wtf'
       } 
    }

    componentDidMount() {
      var data = new Array()
      const stompUrl = "ws://localhost:8011/stomp"
      const client = Stomp.client(stompUrl)
      var connectCallBack () =>  {
        client.subscribe('/fx/prices', function(message) {
          var dataObj = JSON.parse(message.body)
          // console.log(data)
           data.push(dataObj)
           console.log(data)
           this.setState( (state) => {
                state.items = data;
                return state;
            });

           this.setState({items: data})
          })
      }
      var CallBackFun = connectCallBack.bind(this)
      client.connect({}, CallBackFun, function(error) {
        alert(error.headers.message)
      })

      console.log("hello" + data)

    }
    renderListItems() {
      setTimeout(function(){
        return this.state.items.forEach((item, index) => {
           <TodoItem
            key={index}
            index={index}
            message={item.name}
          />
        });
      },2000);
    }

    render() {
        return (
            <div>
              <h1>{this.state.wtf}</h1>
              {this.renderListItems()}
            </div>
        );
    }
}

export default ItemList;

class ItemSubList extends React.Component {
  constructor(){
    super(props)
  }
  render() {
    return (
      <li>{this.props.data.name}</li>
    )
  }
}


ReactDOM.render(
	  <div>
	    <h1>Todo</h1>
	    <ItemList />
	  </div>,
  document.getElementById('stomp-status')
)