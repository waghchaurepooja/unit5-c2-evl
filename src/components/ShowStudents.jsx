import { useState, useEffect } from "react";
export const ShowStudents = () => {
    const [ Studnetdata, setStudentdata] = useState([]);

    useEffect(() =>{
        getData();
    },[]);

    async function getData()
    {
        const data = await fetch("http://localhost:8080/students").then((element) =>

            element.json()
        )
        console.log(data);
        setStudentdata(data);
    }
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            {Studnetdata.map((element) =>{
                
                return (

                    <tr className="row">
                        <td className="first_name">{element.first_name}</td>
                        <td className="last_name">{element.last_name}</td>
                        <td className="email">{element.email}</td>
                        <td className="gender">{element.gender}</td>
                        <td className="age">{element.age}</td>
                        <td className="tenth_score">{element.tenth_score}</td>
                        <td className="twelth_score">{element.twelth_score}</td>
                        <td className="preferred_branch">{element.preferred_branch}</td>
                    </tr>

                )
            })}
          </tbody>
        </table>
      </div>
    );
  };