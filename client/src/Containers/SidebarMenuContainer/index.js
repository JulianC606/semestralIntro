import { connect } from 'react-redux'
import SidebarMenu from '../../Components/Molecular/SidebarMenu'

const mapStateToProps = state => ({
  structure: state.structure,
  location: state.location
})

export default connect(mapStateToProps)(SidebarMenu)
