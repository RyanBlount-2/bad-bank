function Home() {
   return (
      <MyCard
         id="home"
         header="Home"
         title="Welcome to Bad Bank"
         text="The Bad Place To Bank"
         body={(<img src="bank.png" className="img-fluid" style={{width: '250px'}} alt="Responsive Image"/>)}
      />
   );
}
