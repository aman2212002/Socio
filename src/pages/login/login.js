import "./login.css"
import Split from 'react-split'

function Login(){
    return(
      <div>
         <Split
         sizes={[25, 75]}
         minSize={100}
         
         gutterSize={3}
         gutterAlign="center"
         
         direction="horizontal"
         cursor="col-resize">
       <div className="leftside">hello</div>
       <div className="rightside">world</div>
    </Split>
      </div> 
       
    );
}
export default Login