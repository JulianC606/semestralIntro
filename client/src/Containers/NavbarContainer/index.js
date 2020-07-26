import { connect } from 'react-redux'
import Navbar from '../../Components/Molecular/Navbar'
import { updateLocation } from '../../Redux/Actions/locationActions'

const mapStateToProps = state => (
  {
    structure: state.structure,
    location: state.location
  }
)

const mapDispatchToProps = dispatch => ({
  updateLocation: newLocation => dispatch(updateLocation(newLocation))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
