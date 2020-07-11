import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchTeams} from '../redux/actions/teamsAction'
import {Link} from "react-router-dom"
import Spinner from './spinner.js' 
import {Table}  from 'react-bootstrap';
function Teams(teamsData) {
    useEffect(() => {
        teamsData.fetchTeams()
      }, [])
      return teamsData.loading ? (
        <Spinner/>
      ) : teamsData.error ? (
        <h2>{teamsData.error}</h2>
      ) : (
        <div>
          <h2>Teams List</h2>
          <div>
            {teamsData &&
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Founded in</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    
                {teamsData.teamsData.map(team =>
                    <tr  key={team.id}>
                            <td><Link to={`/teams/${team.id}`}>{team.name}</Link></td>
                            <td>{team.founded}</td>
                            <td>{team.address}</td>
                        
                    </tr>
                )}    
                   
                </tbody>
            </Table>
            }
          </div>
        </div>
      )
}

const mapStateToProps = state => {
    return {
      teamsData: state.teams.teams,
      loading:state.teams.loading,
      error:state.teams.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchTeams: () => dispatch(fetchTeams())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Teams)
