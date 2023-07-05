
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className="headline">Train Schedule and Registration</h1>
      <header className="App-header">
        
        
        <section className="booking">
    <h1 className="heading-title">Train Registration</h1>

    <form  method="post" className="book-form">
        <div className="flex">
            <div className="inputBox">
                <span>Name :</span>
                <input type="text" placeholder="Enter your name" name="name"/>
            </div>
            <div className="inputBox">
                <span>Email :</span>
                <input type="email" placeholder="Enter your email" name="email"/>
            </div>
            <div className="inputBox">
                <span>Phone no :</span>
                <input type="number" placeholder="Enter your number" name="phone"/>
            </div>
            <div className="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="Enter your address" name="address"/>
            </div>
            <div className="inputBox">
                <span>Where to :</span>
                <input type="text" placeholder="Place you want to visit" name="location"/>
            </div>
            <div className="inputBox">
                <span>How many :</span>
                <input type="number" placeholder="Number of members" name="guests"/>
            </div>
            <div className="inputBox">
                <span>Arrivals :</span>
                <input type="date" name="arrivals"/>
            </div>
            <div className="inputBox">
                <span>Leaving :</span>
                <input type="date" name="leaving"/>
            </div>
        </div>
        <input type="submit" value="Submit" className="btn" name="send"/>
    </form>
</section>
      </header>
      <div class="box-wrap">
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Places</th>
                        <th>Phone No</th>
                        <th>AC</th>
                        <th>AC-Prices</th>
                        <th>NON-AC-Prices</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>TamilNadu</td>
                        <td>5689741236</td>
                        <td>yes</td>
                        <td>40000</td>
                        <td>20000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Chennai </td>
                        <td>8975489612</td>
                        <td>no</td>
                        <td>0</td>
                        <td>25000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Hyderabad</td>
                        <td>8956234578</td>
                        <td>yes</td>
                        <td>60000</td>
                        <td>53000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Kashmir</td>
                        <td>9512367869</td>
                        <td>no</td>
                        <td>0</td>
                        <td>75000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>shimla</td>
                        <td>5896125748</td>
                        <td>yes</td>
                        <td>56000</td>
                        <td>25000</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

      
    </div>
    </div>
  );
}

export default App;
