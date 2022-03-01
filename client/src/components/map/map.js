// import React from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import * as parkData from '../../data/skateboard-parks.json';
// import './map.css';
// import '../landingPage/index.css';
// export const icon = new Icon({
// 	iconUrl: '/skateboarding.svg',
// 	iconSize: [25, 25],
// });
// export default function Ma() {
// 	const [activePark, setActivePark] = React.useState(null); // var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// 	return (
// 		<div>
// 			<div>
// 				<nav
// 					style={{ backgroundColor: '#00848c' }}
// 					class='navbar navbar-expand-lg navbar-light fixed-top py-3'
// 					id='mainNav'
// 				>
// 					<div class='container'>
// 						<a class='navbar-brand js-scroll-trigger' href='/landingPage'>
// 							{' '}
// 							Desk Tops
// 						</a>
// 						<button
// 							class='navbar-toggler navbar-toggler-right'
// 							type='button'
// 							data-toggle='collapse'
// 							data-target='#navbarResponsive'
// 							aria-controls='navbarResponsive'
// 							aria-expanded='false'
// 							aria-label='Toggle navigation'
// 						>
// 							<span class='navbar-toggler-icon'></span>
// 						</button>
// 						<div class='collapse navbar-collapse' id='navbarResponsive'>
// 							<ul class='navbar-nav ml-auto my-2 my-lg-0'>
// 								<li class='nav-item'>
// 									<a class='nav-link js-scroll-trigger' href='/loginForOwner'>
// 										LogIn As Owner
// 									</a>
// 								</li>
// 								<li class='nav-item'>
// 									<a class='nav-link js-scroll-trigger' href='/login'>
// 										LogIn As Customer
// 									</a>
// 								</li>
// 								<li class='nav-item'>
// 									<a class='nav-link js-scroll-trigger' href='/contactPage'>
// 										Let's Talk
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</nav>
// 			</div>
// 			<Map
// 				center={[31.354675, 34.308826]}
// 				zoom={12}
// 				style={{ position: 'relative', height: '100vh' }}
// 			>
// 				<TileLayer
// 					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// 					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// 				/>
// 				{parkData.features.map(park => (
// 					<Marker
// 						key={park.properties.PARK_ID}
// 						position={[
// 							park.geometry.coordinates[1],
// 							park.geometry.coordinates[0],
// 						]}
// 						onClick={() => {
// 							setActivePark(park);
// 						}}
// 						icon={icon}
// 					/>
// 				))}
// 				{activePark && (
// 					<Popup
// 						position={[
// 							activePark.geometry.coordinates[1],
// 							activePark.geometry.coordinates[0],
// 						]}
// 						onClose={() => {
// 							setActivePark(null);
// 						}}
// 					>
// 						<div>
// 							<h2>{activePark.properties.NAME}</h2>
// 							<p>{activePark.properties.DESCRIPTIO}</p>
// 						</div>
// 					</Popup>
// 				)}
// 			</Map>
// 		</div>
// 	);
// }
