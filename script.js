
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.982603, -71.336441],
    zoom: 14,
    zoomControl: true
});












var style1 = {
                    'color': "green",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

				
var style3 = {
                    'color': "yellow",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };						

			  
			  

			  
			  
			  
var n1 = L.geoJSON(n1, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);			  
			  
			  
			  

  
 var n2 = L.geoJSON(n2, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 2</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map); 
  
  var n3 = L.geoJSON(n3, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 3</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);
  
  
  var n4 = L.geoJSON(n4, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 4</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);
  
  //----------------------------------------------------------------------------------------------------
  
  var n5 = L.geoJSON(n5, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 5</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);

 
  			  
var n187 = L.geoJSON(n187, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);			  
  
 
 
 var n187_2 = L.geoJSON(n187_2, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map); 
	  


var n187_3 = L.geoJSON(n187_3, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);
			  
			  
			  
var n187_4 = L.geoJSON(n187_4, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);

			  

			  
			  
var n187_5 = L.geoJSON(n187_5, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);
  
  
var n187b = L.geoJSON(n187b, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);
  
//-----------------------------------------------------------------------------------------------------------              			  
			  
var n70_1 = L.geoJSON(n70_1, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);
			  

var m70_2 = L.geoJSON(m70_2, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);		  
			  

		  
var n70_3 = L.geoJSON(n70_3, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);


var n70_4 = L.geoJSON(n70_4, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);

var n70_5 = L.geoJSON(n70_5, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);


var n70_6 = L.geoJSON(n70_6, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>Subnodo</p><p>'+feature.properties.Nodo+'</p>');
  }
  }).addTo(map);






// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
