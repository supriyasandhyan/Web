import React from 'react'
import { connect } from 'react-redux'

export const dontopen = (props) => {
  return (
    <div>dontopen</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(dontopen)