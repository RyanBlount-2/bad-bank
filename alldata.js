function AllData() {
   let ctx = React.useContext(UserContext);

   return (
      <MyCard
         id="all-data"
         header="All Data"
         body={(
            <>
               <table className="alldata-table">
                  <thead className="alldata-table-head">
                     <tr className="alldata-table-head-row">
                        <th className="alldata-table-heading" scope="col" key='name-header'>Name</th>
                        <th className="alldata-table-heading" scope="col" key='email-header'>Email</th>
                        <th className="alldata-table-heading" scope="col" key='password-header'>Password</th>
                        <th className="alldata-table-heading" scope="col" key='balance-header'>Account Balance</th>
                        <th className="alldata-table-heading" scope="col" key='loggedIn-header'>Login Status</th>
                        <th className="alldata-table-heading" scope="col" key='displayed-header'>Display Status</th>
                     </tr>
                  </thead>
                  <tbody className="alldata-table-body">
                     {ctx.users.map((element, index, array) => {
                        return (
                           <tr className="alldata-table-body-row" key={`${index}`}>
                              <td className="alldata-table-data" key={`Name#${index}`}>{element.name}</td>
                              <td className="alldata-table-data" key={`Email#${index}`}>{element.email}</td>
                              <td className="alldata-table-data" key={`Password#${index}`}>{element.password}</td>
                              <td className="alldata-table-data" key={`Balance#${index}`}>{element.balance}</td>
                              <td className="alldata-table-data" key={`LoggedIn#${index}`}>{JSON.stringify(element.loggedIn)}</td>
                              <td className="alldata-table-data" key={`Displayed#${index}`}>{JSON.stringify(element.displayed)}</td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </>
         )}
      />
   );
}
