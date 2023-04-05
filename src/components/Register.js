
import './Register.css'
export default function Suree(){
    return(
        <div>
       <p id='p1'>Registration form</p>
       <div className='table'>
       <table>
       <tr>
       <td><p>Name: </p></td>
       <td><input type='text'></input></td>
       </tr>
       <tr>
      <td><p>Register no:</p></td> 
       <td><input type='number'></input></td>
       </tr>
       <tr>
       <td><p>Dob</p></td>
       <td><input type='date'></input></td>
       </tr>
       <tr>
       <td><p>Email:</p></td>
       <td><input type='email' placeholder='enter email'></input></td>
       <td></td>
       </tr>
       <tr>
       <td><p>Phone no:</p></td>
       <td><input type='number' placeholder='mobile number'></input></td>
       </tr>
       <tr>
       <td><p>Gender:</p></td>
       <td><input type='radio'/><label>male</label>
       <input type='radio'/><label>female</label>
       </td>
       </tr>
      
       <tr>
       <td><p>select category:</p></td>
       <td><select name="department" >
       
       <option value="cse">cse</option>
       <option value="cse">ece</option>
       <option value="cse">eee</option>
       <option value="cse">mct</option>
       <option value="cse">aids</option>
       
       </select></td>
         </tr>
         <tr>
         <td><p>Comments :</p></td>
         <td><textarea></textarea></td>
         </tr>
         
         
       
       </table>
       </div>
       </div>
    )
}