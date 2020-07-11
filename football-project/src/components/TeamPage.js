import React, { useEffect,Fragment } from 'react'
import {fetchTeamPage} from '../redux/actions/teamPageAction'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import Spinner from './spinner.js' 
import {Table}  from 'react-bootstrap';
function TeamPage(props) {
    useEffect(() => {
        props.fetchTeamPage(props.match.params.id)
      }, [props.fetchTeamPage,props.match.params.id])
      return props.teamData.loading ? (
        <Spinner/>
      ) : props.teamData.error ? (
        <h2>{props.teamData.error}</h2>
      ) : (
        <Fragment>
            <Link to="/teams" className="btn btn-primary hBack"
            ><i className="fas fa-user-circle text-primary"></i> Go Back to teams</Link >
            <h1>{props.teamData.name}<img src={props.teamData.crestUrl} className="photo"></img></h1>
            <h2>Founded: {props.teamData.founded}</h2>
            <h2>Website: <a href={props.teamData.website}>{props.teamData.website}</a></h2>
            <h2>Address: {props.teamData.address}</h2>
            <h2>Squad:</h2>
            {props.teamData.squad &&
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    
                {props.teamData.squad.map(player =>
                    <tr  key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                        
                    </tr>
                )}    
                   
                </tbody>

            </Table>
            }
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
      teamData: state.teamData.teamData,
      loading:state.teamData.loading,
      error:state.teamData.error
    }
  }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       fetchTeamPage: () => dispatch(fetchTeamPage())
//     }
//   }
  
  export default connect(
    mapStateToProps,
    {fetchTeamPage}
  )(TeamPage)
