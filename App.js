import React, { useEffect, useState } from "react";
import './App.css';
import donutImage from './images/donuts1.jpg';


const Donut = ({ name, description, price }) => (
    <div>
        <h3>{name}</h3>
        <p><em>{description}</em></p>
        <p><strong>${price.toFixed(2)}</strong></p>
    </div>
);

function App() {
    const [donuts, setDonuts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/backend/api.php")
            .then(response => response.json())
            .then(data => {
            console.log(data); 
            setDonuts(data);
            })
            .catch(err => console.error(err));
    }, []);

	const scrollToMenu = () => {
        const menuSection = document.getElementById("menu");
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth" }); 
        }
    };
	
    return (
    <>
        <div class = "donut-header">
			<div class = "donut-box">

				<h1>Destination</h1>
				<h1>Donuts</h1>
				<button onClick={scrollToMenu} className="button">Explore</button>
			</div>
			
			<img src={donutImage} alt="Donut" className="header-image" />	
			<div className="gradient-overlay"></div>

		</div>
		
		<div class="navbar">
    	
			<div class = "tab">
				<button class = "dropbtn"> <b>About Us</b>
				</button>
			</div>	
							
			<div class = "tab">
				<button class = "dropbtn"> <b>Locations</b>
				</button>
			</div>
		
  			<div class="tab">
    			<button class="dropbtn"> <b>Contact Us</b>
    			</button>
  			</div> 
		</div>
		
		<div class = "container">
		<div class = "donut-card">
		<h3 id = "menu">Menu</h3>
		<div class = "donut-details">
		<ul>
			{donuts.map(donut => (
				<li key = {donut.id}>
                    <Donut
                    name={donut.name}
                    description={donut.description}
                    price={parseFloat(donut.price)} />
                </li>
            ))}    
        </ul>
        </div>
        </div>
	</div>
	
	<div id="root"></div>
	<footer>&copy; Developed and created by Mara Ramshaw. None of these images belong to me. </footer>

      </>  
    );
}

export default App;

