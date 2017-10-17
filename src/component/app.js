import React ,{Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import * as TodoActions from '../action'


class App extends Component {
  constructor({value,actions}) {
    super()
  }

  render(){
    let {value,actions} = this.props
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={actions.jia}>加</button>
            <button onClick={actions.jian}>减</button>
            <button onClick={actions.async}>异步</button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.counter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
mapStateToProps,
mapDispatchToProps

)(App);
