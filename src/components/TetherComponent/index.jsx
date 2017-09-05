// @flow
/**
 * Ported from unmaintained https://github.com/souporserious/react-tether
 */
import _ from 'lodash'
import { ReactChildren } from 'tcomb-react'
import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import Tether from 'tether'

import type { Attachment, Constraint } from './types'

type Props = {
  attachment: Attachment,
  targetAttachment: Attachment,
  constraints?: Array<Constraint>,
  renderElementTag: string,
  offset?: string,
  children?: ReactChildren,
  onUpdate?: () => any,
  tetherExtraCssClasses?: string,
  onRepositioned?: () => any
}

export default class TetherComponent extends React.Component {
  props: Props
  targetNode: any = null
  elementParentNode: any = null
  tether: ?Tether = null

  static defaultProps = {
    renderElementTag: 'div'
  }

  componentDidMount () {
    /* eslint "react/no-find-dom-node": "warn" */
    this.targetNode = ReactDOM.findDOMNode(this)
    this.update()
    this.registerEventListeners()
  }

  componentDidUpdate () {
    this.update()
  }

  componentWillUnmount () {
    this.destroy()
  }

  registerEventListeners () {
    if (!this.tether) return

    if (this.props.onUpdate) {
      this.tether.on('update', this.props.onUpdate)
    }

    if (this.props.onRepositioned) {
      this.tether.on('repositioned', this.props.onRepositioned)
    }
  }

  destroy () {
    if (this.elementParentNode) {
      ReactDOM.unmountComponentAtNode(this.elementParentNode)
      this.elementParentNode.parentNode.removeChild(this.elementParentNode)
    }

    if (this.tether) {
      this.tether.destroy()
    }

    this.elementParentNode = null
    this.tether = null
  }

  update () {
    const { tetherExtraCssClasses, children, renderElementTag } = this.props
    const elementComponent = Children.toArray(children)[1]

    // if no element component provided, bail out
    if (!elementComponent) {
      // destroy Tether element if it has been created
      if (this.tether) {
        this.destroy()
      }
      return
    }

    // create element node container if it hasn't been yet
    if (!this.elementParentNode) {
      // create a node that we can stick our content Component in
      this.elementParentNode = document.createElement(renderElementTag)
      if (tetherExtraCssClasses) {
        this.elementParentNode.setAttribute('class', tetherExtraCssClasses)
      }

      // append node to the render node
      if (document.body) {
        document.body.appendChild(this.elementParentNode)
      }
    }

    // TODO: Use portal?
    // render element component into the DOM
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      elementComponent,
      this.elementParentNode,
      () => {
        // don't update Tether until the subtree has finished rendering
        this.updateTether()
      }
    )
  }

  updateTether () {
    const { offset = '0 0' } = this.props
    // $FlowFixMe: https://github.com/flowtype/flow-typed/issues/654
    const options = _.pickBy(this.props, Boolean)
    const tetherOptions = {
      target: this.targetNode,
      element: this.elementParentNode,
      offset,
      ...options
    }

    if (!this.tether) {
      this.tether = new Tether(tetherOptions)
    } else {
      this.tether.setOptions(tetherOptions)
    }

    if (this.tether) this.tether.position()
  }

  render () {
    return Children.toArray(this.props.children)[0]
  }
}
