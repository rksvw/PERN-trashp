import { useEffect, useState } from "react";
import "./admin.css";

const TABLE_HEAD = ["ID", "USERNAME", "EMAIL", "PASSWORD"];

const HOST = "localhost";
const PORT = 5434;

function Login() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://${HOST}:${PORT}/users`);
        const jsonData = await res.json();
        setUserData(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  console.log(userData);

  return (
    <>
      <table>
        <thead className="top">
          <tr className="tl-row">
            {TABLE_HEAD.map((head) => {
              return (
                <th className="tl-col" key={head}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="mid">
          {userData.map((user) => {
            return (
              <tr className="bd-row" key={user.id}>
              <td className="bd-col">{user.id}</td>
                <td className="bd-col">{user.username}</td>
                <td className="bd-col">{user.email}</td>
                <td className="bd-col">{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
    //   <div>
    //     {userData.map((id, username, email, password) => {
    //         <div key={id}>
    //           <h1>{username}</h1>
    //           <h1>{email}</h1>
    //           <h1>{password}</h1>
    //         </div>
    //     })}
    //   </div>
  );
}

export default Login;
